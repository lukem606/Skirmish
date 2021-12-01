import { rest } from "lodash";
import MathUtils from "../utils/mathUtils";
import Vector from "../utils/vector";

export default class Unit {
  constructor(x_, y_) {
    this.location = new Vector(x_, y_);
    this.velocity = new Vector();
    this.size = new Vector(10, 10);

    this.stats = {
      health: 100,
      attack: 20 + MathUtils.gaussian() * 2,
      speed: 2 + MathUtils.gaussian() / 2,
      fov: 150,
    };

    this.state = {
      behaviour: "PATROLLING",
      destination: 0,
      target: 0,
      heading: 0,
      previous: performance.now(),
    };
  }

  update() {
    if (this.state.behaviour === "PATROLLING") {
      this.patrol();
    } else if (this.state.behaviour === "REST") {
      this.rest();
    }
  }

  patrol() {
    if (this.state.destination === 0) {
      this.state.destination = new Vector(
        Math.random() * global.WIDTH,
        Math.random() * global.HEIGHT
      );

      const heading = Vector.sub(this.state.destination, this.location);
      heading.normalise();

      this.state.heading = heading;
      this.velocity = Vector.mult(this.state.heading, this.stats.speed);
    } else if (this.location.equals(this.state.destination)) {
      this.state.behaviour = "REST";
      this.state.destination = 0;
      this.state.previous = performance.now();
    } else {
      if (
        Vector.dist(this.location, this.state.destination) < this.stats.speed
      ) {
        this.location = this.state.destination.copy();
      } else {
        this.location.add(this.velocity);
      }
    }
  }

  rest() {
    if (performance.now() - this.state.previous > 5000) {
      this.state.behaviour = "PATROLLING";
    }
  }

  checkEdges() {
    const { canvas } = global;
    if (this.location.x < this.size.x / 2) {
      this.location.x = canvas.width - this.size.x / 2;
    } else if (this.location.x > canvas.width - this.size.x / 2) {
      this.location.x = this.size.x / 2;
    }

    if (this.location.y < this.size.y / 2) {
      this.location.y = canvas.height - this.size.y / 2;
    } else if (this.location.y > canvas.height - this.size.y / 2) {
      this.location.y = this.size.y / 2;
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

    context.fillStyle = "rgb(3, 160, 98)";
    context.fillRect(
      (-1 * this.size.x) / 2,
      (-1 * this.size.y) / 2,
      this.size.x,
      this.size.y
    );

    context.restore();
    context.closePath();
  }
}
