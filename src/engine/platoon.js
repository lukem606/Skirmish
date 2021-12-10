import { v4 as v4uuid } from "uuid";
import COLOURS from "../data/colours";
import Colours from "../utils/colours";
import Formations from "../data/formations";
import LinkedList from "../utils/linkedList";
import MathUtils from "../utils/mathUtils";
import Unit from "./unit";
import Vector from "../utils/vector";

export default class Platoon {
  constructor(x_, y_, units = null, teamName = units[0].stats.team) {
    const { platoonTotals } = global;
    platoonTotals[teamName] = platoonTotals[teamName] + 1;
    this.location = new Vector(x_, y_);
    this.velocity = new Vector(
      MathUtils.random(-1, 1),
      MathUtils.random(-1, 1)
    );
    this.acceleration = new Vector();

    this.stats = {
      team: teamName,
      FOV: 130,
    };

    this.state = {
      behaviour: "NON-COMBAT",
      action: "REST",
      destination: 0,
      target: 0,
      direction: 0,
      previous: performance.now(),
      id: v4uuid(),
    };

    this.units = units ? this.populate(units) : this.populate(teamName);
  }

  populate(initial) {
    const units = new LinkedList();
    let speed = 0;
    let acuity = 0;
    let restTime = 0;

    if (initial.constructor === Array) {
      for (const unit of initial) {
        units.append(unit);

        speed = unit.stats.speed > speed ? unit.stats.speed : speed;
        acuity = unit.stats.acuity > acuity ? unit.stats.acuity : acuity;
        restTime =
          unit.stats.restTime > restTime ? unit.stats.restTime : restTime;
      }
    } else {
      for (let i = 0; i < 9; i++) {
        const unit = new Unit(
          this.location.x + Math.random() * 20,
          this.location.y + Math.random() * 20,
          initial
        );
        unit.state.behaviour = "PLATOON";
        unit.state.action = "PLATOON";
        units.append(unit);

        speed = unit.stats.speed > speed ? unit.stats.speed : speed;
        acuity = unit.stats.acuity > acuity ? unit.stats.acuity : acuity;
        restTime =
          unit.stats.restTime > restTime ? unit.stats.restTime : restTime;
      }
    }

    this.stats.speed = speed;
    this.stats.acuity = acuity;
    this.stats.restTime = restTime;
    this.state.formation = Formations.getFormation(units.length);
    return units;
  }

  update() {
    if (this.state.behaviour === "NON-COMBAT") {
      if (this.state.action === "PATROL") {
        this.patrol();
      } else if (this.state.action === "REST") {
        this.rest();
      }
    }
  }

  patrol() {
    if (this.location.equals(this.state.destination)) {
      if (
        this.units.getAll().every((unit) => {
          return (
            unit.location.dist(this.location) < unit.size.y * (unit.size.x / 2)
          );
        })
      ) {
        this.state.destination = null;
        this.state.action = "REST";
        this.state.previous = performance.now();
      } else {
        this.moveUnits();
      }
    } else {
      if (this.location.dist(this.state.destination) < this.stats.speed) {
        this.location = this.state.destination.copy();
        this.moveUnits();
      } else {
        this.seek(this.state.destination);
        this.updateLocation();
        this.moveUnits();
      }
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
    units.forEach((unit) => {
      if (unit.location.dist(this.location) > unit.size.y * 2) {
        unit.seek(this.location);
      }
      this.flock(unit, units);
      unit.updateLocation();
      unit.checkEdges();
    });
  }

  flock(unit, others) {
    const avoid = unit.avoid(others);
    const cohere = unit.cohere(others);

    avoid.mult(0.2);
    cohere.mult(0.2);

    unit.applyBehaviour(avoid);
    unit.applyBehaviour(cohere);
  }

  seek(destination) {
    const steer = Vector.sub(destination, this.location);

    steer.normalise();
    steer.mult(this.stats.speed);
    steer.sub(this.velocity);
    this.applyBehaviour(steer);

    this.angle = steer.heading();
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

  updateLocation() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.stats.speed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  applyBehaviour(force) {
    this.acceleration.add(force);
  }

  checkEdges() {
    const { canvas } = global;
    if (this.location.x < 0) {
      this.location.x = canvas.width;
    } else if (this.location.x > canvas.width) {
      this.location.x = 0;
    }

    if (this.location.y < 0) {
      this.location.y = canvas.height;
    } else if (this.location.y > canvas.height) {
      this.location.y = 0;
    }
  }

  render() {
    const { context } = global;
    context.beginPath();
    context.save();
    context.translate(this.location.x, this.location.y);
    context.rotate(this.velocity.heading());

    context.fillStyle = Colours.getRGBA(COLOURS.GREY, 0.3);
    context.arc(0, 0, 10, 0, 2 * Math.PI);
    context.fill();

    context.restore();
    context.closePath();
  }
}
