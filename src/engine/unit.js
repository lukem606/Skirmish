import { v4 as v4uuid } from "uuid";
import COLOURS from "../data/colours";
import Colours from "../utils/colours";
import MathUtils from "../utils/mathUtils";
import Vector from "../utils/vector";

export default class Unit {
  constructor(x_, y_, teamName) {
    const { unitTotals } = global;
    unitTotals[teamName] = unitTotals[teamName] + 1;
    this.location = new Vector(x_, y_);
    this.velocity = new Vector(
      MathUtils.random(-1, 1),
      MathUtils.random(-1, 1)
    );
    this.acceleration = new Vector();
    this.size = new Vector(4, 8);
    this.angle = this.velocity.heading();
    this.angleOffset = 0;

    const health = 100;
    const attack = 20 + MathUtils.gaussian() * 2;
    const speed = 1 + MathUtils.gaussian() * 0.25;
    const acuity = this.size.x * 20 + MathUtils.gaussian() * this.size.x * 2;
    const range = acuity * 0.75;
    const restTime = MathUtils.random(2, 4);

    this.stats = {
      team: teamName,
      platoon: null,
      health: health,
      attack: attack,
      speed: speed,
      FOV: 130,
      acuity: acuity,
      range: range,
      restTime: restTime,
    };

    this.state = {
      behaviour: "NON-COMBAT",
      action: "REST",
      destination: null,
      target: null,
      previous: performance.now(),
      id: v4uuid(),
      colour: Colours.getRGB(COLOURS.teams[teamName]),
    };
  }

  performBehaviour(entities) {
    if (!this.state.target && entities.length >= 1) {
      const nearest = this.getNearestEntity(entities);

      if (nearest) {
        // if (nearest.stats.team !== this.stats.team) {
        //   this.state.behaviour = "COMBAT";
        //   this.state.action = "ATTACK";
        //   this.state.target = nearest;
        // console.log("CHEESE BUNS");
        // return;
        // } else if (nearest.stats.team === this.stats.team) {
        if (nearest.stats.team === this.stats.team) {
          if (
            nearest.state.behaviour === "NON-COMBAT" &&
            nearest.state.action !== "JOIN"
          ) {
            this.state.action = "JOIN";
            this.state.target = nearest;
            this.state.destination = nearest.location;
            nearest.state.action = "JOIN";
            nearest.state.target = this;
            nearest.state.destination = this.location;
          }
          return;
        }
      }
    }

    if (this.state.behaviour === "NON-COMBAT") {
      this.nonCombatBehaviour();
    } else if (this.state.behaviour === "COMBAT") {
      this.combatBehaviour();
    }
  }

  nonCombatBehaviour() {
    if (this.state.action === "PATROL") {
      this.patrol();
    } else if (this.state.action === "REST") {
      this.rest();
    } else if (this.state.action === "JOIN") {
      this.join();
    }
  }

  combatBehaviour() {
    if (this.state.action === "ATTACK") {
      //pass
    } else if (this.state.action === "SEARCH") {
      //pass
    }
  }

  patrol() {
    if (this.location.equals(this.state.destination)) {
      this.state.destination = null;
      this.state.action = "REST";
      this.state.previous = performance.now();
    } else {
      if (this.location.dist(this.state.destination) < this.stats.speed) {
        this.location = this.state.destination.copy();
      } else {
        this.seek(this.state.destination);
        this.updateLocation();
      }
    }
  }

  rest() {
    if (performance.now() - this.state.previous > this.stats.restTime * 1000) {
      this.state.action = "PATROL";
      this.getDestination();
      this.seek(this.state.destination);
      this.angleOffset = 0;
    }
  }

  join() {
    if (
      this.location.dist(this.state.target.location) <
      this.size.y * (this.size.x / 2)
    ) {
      const reference = v4uuid();
      const ally = this.state.target;
      this.state.target = null;
      this.state.destination = null;
      this.state.behaviour = "PLATOON";
      this.state.action = "PLATOON";
      this.stats.platoon = [this, ally];
      ally.state.target = null;
      ally.state.destination = null;
      ally.state.behaviour = "PLATOON";
      ally.state.action = "PLATOON";
      ally.stats.platoon = [this, ally];
    } else {
      this.seek(this.state.target.location);
      this.updateLocation();
    }
  }

  seek(destination) {
    const { context } = global;

    const future = Vector.sub(destination, this.location);
    future.normalise();
    future.mult(this.stats.acuity / 2);

    const angle = MathUtils.random(0, 2 * Math.PI);
    // const radius = this.stats.acuity / 2;
    const radius = this.size.y;
    const steer = Vector.add(
      future,
      new Vector(Math.cos(angle) * radius, Math.sin(angle) * radius)
    );
    steer.normalise();
    steer.mult(this.stats.speed);
    steer.sub(this.velocity);

    this.angle =
      future.heading() +
      MathUtils.map(
        Math.cos(this.angleOffset),
        0 - Math.PI,
        Math.PI,
        Math.PI * 0.25,
        Math.PI * 0.75
      );
    this.angleOffset += 0.25 * this.stats.speed;
    this.applyBehaviour(steer);
  }

  avoid(others) {
    const avoid = new Vector();
    const desiredDistance = this.size.y * 1;
    let count = 0;

    for (const other of others) {
      const distance = this.location.dist(other.location);

      if (distance > 0 && distance < desiredDistance) {
        const steer = Vector.sub(other.location, this.location);
        steer.normalise();
        steer.div(distance);
        steer.mult(-1);
        avoid.add(steer);
        count++;
      }
    }

    if (count >= 1) {
      avoid.div(count);
      avoid.normalise();
      avoid.mult(this.stats.speed);
      avoid.sub(this.velocity);
    }

    if (this.state.behaviour === "PLATOON") {
      return avoid;
    } else {
      this.applyBehaviour(avoid);
    }
  }

  cohere(others) {
    const cohere = new Vector(0, 0);
    const desiredDistance = this.size.y * 4;
    let count = 0;

    for (const other of others) {
      const distance = this.location.dist(other.location);

      if (distance > 0 && distance > desiredDistance) {
        const steer = Vector.sub(other.location, this.location);
        steer.normalise();
        steer.div(distance);
        cohere.add(steer);
        count++;
      }
    }

    if (count >= 1) {
      cohere.div(count);
      cohere.normalise();
      cohere.mult(this.stats.speed);
      cohere.sub(this.velocity);
    }

    if (this.state.behaviour === "PLATOON") {
      return cohere;
    } else {
      this.applyBehaviour(cohere);
    }
  }

  align(others) {
    const align = new Vector();

    for (const other of others) {
      if (this.state.id !== other.state.id) {
        align.add(other.velocity);
      }
    }

    align.div(others.length);
    align.normalise();
    align.mult(this.stats.speed);
    align.sub(this.velocity);

    if (this.state.behaviour === "PLATOON") {
      return align;
    } else {
      this.applyBehaviour(align);
    }
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

  getNearestEntity(entities) {
    let closest;
    let shortestDistance = 1000000;

    for (const entity of entities) {
      const distance = this.location.dist(entity.location);

      if (distance < shortestDistance) {
        shortestDistance = distance;
        closest = entity;
      }
    }

    return closest ? closest : false;
  }

  applyBehaviour(force) {
    this.acceleration.add(force);
  }

  checkEdges() {
    const { WIDTH, HEIGHT } = global;

    if (this.location.x < 0) {
      this.location.x = 0;
    } else if (this.location.x > WIDTH - this.size.x) {
      this.location.x = WIDTH - this.size.x;
    }

    if (this.location.y < 0) {
      this.location.y = 0;
    } else if (this.location.y > HEIGHT - this.size.y) {
      this.location.y = HEIGHT - this.size.y;
    }
  }

  render() {
    const { context } = global;
    context.save();
    context.translate(this.location.x, this.location.y);
    context.rotate(this.angle);

    // context.beginPath();
    // context.fillStyle = "rgba(255, 0, 0, 0.2)";
    // context.lineTo(
    //   Math.cos(MathUtils.degreesToRadians((-1 * this.stats.FOV) / 2)),
    //   Math.sin(MathUtils.degreesToRadians((-1 * this.stats.FOV) / 2))
    // );
    // context.arc(
    //   0,
    //   0,
    //   this.stats.acuity,
    //   MathUtils.degreesToRadians((-1 * this.stats.FOV) / 2),
    //   MathUtils.degreesToRadians(this.stats.FOV / 2)
    // );
    // context.lineTo(0, 0);
    // context.fill();
    // context.closePath();

    // context.beginPath();
    // context.fillStyle = "rgba(0, 0, 255, 0.4)";
    // context.lineTo(
    //   Math.cos(MathUtils.degreesToRadians((-1 * this.stats.FOV) / 2)),
    //   Math.sin(MathUtils.degreesToRadians((-1 * this.stats.FOV) / 2))
    // );
    // context.arc(
    //   0,
    //   0,
    //   this.stats.range,
    //   MathUtils.degreesToRadians((-1 * this.stats.FOV) / 2),
    //   MathUtils.degreesToRadians(this.stats.FOV / 2)
    // );
    // context.lineTo(0, 0);
    // context.fill();
    // context.closePath();

    context.fillStyle = this.state.colour;

    context.fillRect(
      -0.25 * this.size.x,
      -0.5 * this.size.y,
      0.5 * this.size.x,
      0.25 * this.size.y
    );
    context.fillRect(
      -0.25 * this.size.x,
      0.25 * this.size.y,
      0.5 * this.size.x,
      0.25 * this.size.y
    );
    context.fillRect(
      -0.5 * this.size.x,
      -0.25 * this.size.y,
      this.size.x,
      0.5 * this.size.y
    );

    context.restore();

    // context.font = "8px PressStart2P";
    // context.fillStyle = "rgba(255, 255, 255, 0.5)";
    // context.textBaseline = "top";
    // context.textAlign = "center";
    // context.fillText(this.state.id, this.location.x, this.location.y - 30);
  }
}
