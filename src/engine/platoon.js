import { v4 as v4uuid } from "uuid";
import COLOURS from "../data/colours";
import ColourUtils from "../utils/coloursUtils";
import Formations from "../data/formations";
import LinkedList from "../utils/linkedList";
import MathUtils from "../utils/mathUtils";
import Unit from "./unit";
import Vector from "../utils/vector";

export default class Platoon {
  constructor(x_, y_, units, teamName) {
    const { platoonTotals } = global;
    platoonTotals[teamName] = platoonTotals[teamName] + 1;

    this.location = this.getMeanLocation(units);

    this.stats = {
      team: teamName,
      FOV: 130,
    };

    this.state = {
      behaviour: "NON-COMBAT",
      action: "REST",
      destination: 0,
      previous: performance.now(),
      id: v4uuid(),
    };

    this.units = this.populate(units);
  }

  populate(units) {
    const unitList = new LinkedList();
    let speed = 1000;
    let acuity = 0;
    let restTime = 0;

    for (const unit of units) {
      unit.state.platoon = this;
      unit.state.action = "PLATOON";
      unitList.append(unit);

      speed = unit.stats.speed < speed ? unit.stats.speed : speed;
      acuity = unit.stats.acuity > acuity ? unit.stats.acuity : acuity;
      restTime =
        unit.stats.restTime > restTime ? unit.stats.restTime : restTime;
    }

    this.stats.speed = speed;
    this.stats.acuity = acuity;
    this.stats.restTime = restTime;
    this.state.formation = Formations.getFormation(units.length);
    return unitList;
  }

  update() {
    this.location = this.getMeanLocation(this.units.getAll());

    if (this.state.behaviour === "NON-COMBAT") {
      if (this.state.action === "PATROL") {
        this.patrol();
      } else if (this.state.action === "REST") {
        this.rest();
      }
    } else if (this.state.behaviour === "COMBAT") {
      // TODO
    }
  }

  patrol() {
    if (
      this.units.getAll().every((unit) => {
        return (
          unit.location.dist(this.state.destination) <
          unit.size.y * (unit.size.x / 2)
        );
      })
    ) {
      this.state.destination = null;
      this.state.action = "REST";
      this.state.previous = performance.now();
    } else {
      this.moveUnits();
    }
  }

  rest() {
    if (performance.now() - this.state.previous > this.stats.restTime * 1000) {
      this.state.action = "PATROL";
      this.getDestination();
    }
  }

  moveUnits() {
    const units = this.units.getAll();

    for (let unit of units) {
      if (unit.location.dist(this.state.destination) > unit.size.y * 2) {
        unit.seek(this.state.destination);
      }
      this.flock(unit, units);
      unit.updateLocation();
    }
  }

  flock(unit, others) {
    const avoid = unit.avoid(others);
    const cohere = unit.cohere(others);
    const align = unit.align(others);

    avoid.mult(0.2);
    cohere.mult(0.2);
    align.mult(0.2);

    unit.applyBehaviour(avoid);
    unit.applyBehaviour(cohere);
    unit.applyBehaviour(align);
  }

  getDestination() {
    const { WIDTH, HEIGHT } = global;

    let destination = new Vector(Math.random() * WIDTH, Math.random() * HEIGHT);

    const direction = Vector.sub(destination, this.location);
    const distance = direction.magnitude();
    direction.normalise();

    if (distance > this.stats.acuity * 2) {
      direction.mult(this.stats.acuity * 2);

      destination.x = this.location.x + direction.x;
      destination.y = this.location.y + direction.y;
    }

    this.state.destination = destination;
  }

  getMeanLocation(units) {
    const location = new Vector();

    for (let unit of units) {
      location.add(unit.location);
    }

    location.div(units.length);
    return location;
  }

  checkEdges() {
    for (let unit of this.units.getAll()) {
      unit.checkEdges();
    }
  }
}
