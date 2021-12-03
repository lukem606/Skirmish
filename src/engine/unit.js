import COLOURS from "../data/colours.js";
import MathUtils from "../utils/mathUtils";
import Vector from "../utils/vector";

export default class Unit {
  constructor(x_, y_, t_) {
    this.location = new Vector(x_, y_);
    this.prevLocation = this.location.copy();
    this.velocity = new Vector(
      MathUtils.random(0, global.WIDTH),
      MathUtils.random(0, global.HEIGHT)
    );
    this.acceleration = new Vector();
    this.size = new Vector(4, 4);
    this.angle = this.velocity.heading();
    this.angleOffset = 0;

    const health = 100;
    const attack = 20 + MathUtils.gaussian() * 2;
    const speed = 1 + MathUtils.gaussian() * 0.25;
    const fov = 100 + MathUtils.gaussian() * 10;
    const range = fov * 0.75;
    const restTime = MathUtils.random(2, 4);

    this.stats = {
      team: t_,
      health: health,
      attack: attack,
      speed: speed,
      fov: fov,
      range: range,
      restTime: restTime,
    };

    this.state = {
      behaviour: "NON-COMBAT",
      action: "REST",
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
    } else if (this.state.behaviour === "COMBAT") {
      if (this.state.action === "ATTACK") {
      } else if (this.state.action === "SEARCH") {
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
        this.seek(this.state.destination);
        this.updateLocation();
      }
    }
  }

  rest() {
    if (performance.now() - this.state.previous > this.stats.restTime * 1000) {
      this.state.action = "PATROL";
      this.getDestination();
      this.acceleration = Vector.mult(this.state.direction, this.stats.speed);
      this.angle = 0;
      this.angleOffset = 0;
    }
  }

  join() {}

  seek(destination) {
    const future = Vector.sub(destination, this.location);
    future.normalise();
    future.mult(this.stats.fov / 2);

    const angle = MathUtils.random(0, 2 * Math.PI);
    const radius = this.stats.fov / 2;

    const target = Vector.add(
      future,
      new Vector(Math.cos(angle) * radius, Math.sin(angle) * radius)
    );

    target.normalise();
    target.mult(this.stats.speed);

    const steer = Vector.sub(target, this.velocity);
    this.applyForce(steer);

    this.angle =
      future.heading() +
      MathUtils.map(Math.cos(this.angleOffset), 0, 2 * Math.PI, 0, Math.PI);
    this.angleOffset += 0.3;
  }

  getDestination() {
    const { WIDTH, HEIGHT } = global;

    let destination = new Vector(Math.random() * WIDTH, Math.random() * HEIGHT);

    const direction = Vector.sub(destination, this.location);
    const distance = direction.magnitude();
    direction.normalise();
    this.state.direction = direction;

    if (distance > this.stats.fov * 2) {
      destination = this.normaliseDestination(destination);
    }

    this.state.destination = destination;
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

  updateLocation() {
    this.prevLocation = this.location.copy();

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.stats.speed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  applyForce(force) {
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
    // context.fillStyle = "rgba(255, 0, 0, 0.3)";
    // context.lineTo(
    //   Math.cos(MathUtils.degreesToRadians((-1 * 130) / 2)),
    //   Math.sin(MathUtils.degreesToRadians((-1 * 130) / 2))
    // );
    // context.arc(
    //   0,
    //   0,
    //   this.stats.fov,
    //   MathUtils.degreesToRadians((-1 * 130) / 2),
    //   MathUtils.degreesToRadians(130 / 2)
    // );
    // context.lineTo(0, 0);
    // context.fill();
    // context.closePath();

    // context.beginPath();
    // context.fillStyle = "rgba(0, 0, 255, 0.6)";
    // context.lineTo(
    //   Math.cos(MathUtils.degreesToRadians((-1 * 130) / 2)),
    //   Math.sin(MathUtils.degreesToRadians((-1 * 130) / 2))
    // );
    // context.arc(
    //   0,
    //   0,
    //   this.stats.range,
    //   MathUtils.degreesToRadians((-1 * 130) / 2),
    //   MathUtils.degreesToRadians(130 / 2)
    // );
    // context.lineTo(0, 0);
    // context.fill();
    // context.closePath();

    context.fillStyle = COLOURS.teams[this.stats.team];

    context.fillRect(
      (-0.5 * this.size.x) / 2,
      -1 * this.size.y,
      this.size.x / 2,
      this.size.y / 2
    );

    context.fillRect(
      (-0.5 * this.size.x) / 2,
      (1 * this.size.y) / 2,
      this.size.x / 2,
      this.size.y / 2
    );

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
