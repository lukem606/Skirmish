import MathUtils from "../utils/mathUtils";
import Vector from "../utils/vector";

export default class Unit {
  constructor(x_, y_) {
    this.location = new Vector(x_, y_);
    this.velocity = new Vector(
      MathUtils.random(-1, 1),
      MathUtils.random(-1, 1)
    );
    this.size = new Vector(4, 4);

    this.stats = {
      health: 100,
      attack: 20 + MathUtils.gaussian() * 2,
      speed: 1 + MathUtils.gaussian() * 0.25,
      fov: 100 + MathUtils.gaussian() * 10,
      restTime: MathUtils.random(3, 6),
    };

    this.state = {
      behaviour: "NON-COMBAT",
      action: "REST",
      destination: 0,
      target: 0,
      direction: 0,
      previous: performance.now(),
    };
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

  copyPlatoonDestination(platoonDestination) {
    let angle = this.location.angleBetween(platoonDestination);
    let distance = this.location.dist(platoonDestination);

    angle += MathUtils.degreesToRadians(MathUtils.random(-5, 5));
    distance += MathUtils.random(-distance / 10, distance / 10);

    const x_ = Math.cos(angle) * distance;
    const y_ = Math.sin(angle) * distance;

    let destination = new Vector(x_, y_);
    destination = this.normaliseDestination(destination);
    this.state.destination = destination;
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
