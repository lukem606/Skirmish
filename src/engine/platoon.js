import Formations from "../utils/formations.js";
import MathUtils from "../utils/mathUtils";
import Unit from "./unit.js";
import Vector from "../utils/vector";

export default class Platoon {
  constructor(x_, y_, u_ = null) {
    this.location = new Vector(x_, y_);
    this.velocity = new Vector(
      MathUtils.random(-1, 1),
      MathUtils.random(-1, 1)
    );
    this.units = u_ ? u_ : this.populate();
    this.size = new Vector(30, 2.5 * this.units[0].size.y);

    this.stats = {
      speed: MathUtils.mean(this.units.map((unit) => unit.stats.speed)),
      fov: MathUtils.mean(this.units.map((unit) => unit.stats.fov)),
      restTime: MathUtils.mean(this.units.map((unit) => unit.stats.restTime)),
    };

    this.state = {
      behaviour: "NON-COMBAT",
      action: "REST",
      destination: 0,
      target: 0,
      direction: 0,
      formation: Formations.getFormation(this.units.length),
      previous: performance.now(),
    };
  }

  populate() {
    const units = [];

    for (let i = 0; i < 9; i++) {
      const unit = new Unit(
        this.location.x + Math.random() * 20,
        this.location.y + Math.random() * 20
      );
      units.push(unit);
    }

    return units;
  }

  update() {
    if (this.state.behaviour === "NON-COMBAT") {
      if (this.state.action === "PATROL") {
        this.patrol();
      } else if (this.state.action === "REST") {
        this.rest();
      } else if (this.state.action === "JOIN") {
        this.join();
      }
    }
  }

  patrol() {
    if (this.location.equals(this.state.destination)) {
      this.state.action = "REST";
      this.state.destination = 0;
      this.state.previous = performance.now();
    } else {
      if (this.location.dist(this.state.destination) < this.stats.speed) {
        this.location = this.state.destination.copy();
      } else {
        this.location.add(this.velocity);
      }
    }
  }

  rest() {
    if (performance.now() - this.state.previous > this.stats.restTime * 1000) {
      this.state.action = "PATROL";
      this.getDestination();

      //   this.units.forEach((unit) => {
      //     unit.copyPlatoonDestination(this.state.destination);
      //   });
    }
  }

  getDestination() {
    const { WIDTH, HEIGHT } = global;

    let destination = new Vector(Math.random() * WIDTH, Math.random() * HEIGHT);

    const direction = Vector.sub(destination, this.location);
    direction.normalise();
    this.state.direction = direction;

    const distance = this.location.dist(destination);

    if (distance > this.stats.fov * 2) {
      destination = this.normaliseDestination(destination);
    }

    this.state.destination = destination;
    this.velocity = Vector.mult(direction, this.stats.speed);
  }

  normaliseDestination(destination) {
    destination = Vector.add(
      this.location,
      Vector.mult(this.state.direction, this.stats.fov * 2)
    );

    if (destination.x < 0 || destination.x > global.WIDTH) {
      const scale = Math.abs(destination.x) / (this.location.x - destination.x);

      destination = new Vector(
        Math.cos(direction.heading()) * scale,
        Math.sin(direction.heading()) * scale
      );
    }

    if (destination.y < 0 || destination.y > global.HEIGHT) {
      const scale = Math.abs(destination.y) / (this.location.y - destination.y);

      destination = new Vector(
        Math.cos(direction.heading()) * scale,
        Math.sin(direction.heading()) * scale
      );
    }

    return destination;
  }

  checkEdges() {
    const { canvas } = global;
    if (this.location.x < 0) {
      this.location.x = canvas.width - this.size.x;
    } else if (this.location.x > canvas.width - this.size.x) {
      this.location.x = 0;
    }

    if (this.location.y < 0) {
      this.location.y = canvas.height - this.size.y;
    } else if (this.location.y > canvas.height - this.size.y) {
      this.location.y = 0;
    }
  }

  render() {
    const { context } = global;
    context.beginPath();
    context.save();
    context.translate(this.location.x, this.location.y);
    context.rotate(this.velocity.heading());

    context.fillStyle = "rgba(100, 100, 100, 0.3)";
    context.lineTo(
      Math.cos(MathUtils.degreesToRadians((-1 * 130) / 2)),
      Math.sin(MathUtils.degreesToRadians((-1 * 130) / 2))
    );
    context.arc(
      0,
      0,
      this.stats.fov,
      MathUtils.degreesToRadians((-1 * 130) / 2),
      MathUtils.degreesToRadians(130 / 2)
    );
    context.lineTo(0, 0);
    context.fill();

    this.units.forEach((unit, index) => {
      context.fillStyle = "rgb(3, 160, 98)";
      context.fillRect(
        this.state.formation[index][0] * unit.size.x,
        this.state.formation[index][1] * unit.size.y,
        unit.size.x,
        unit.size.y
      );
    });

    context.restore();
    context.closePath();
  }
}
