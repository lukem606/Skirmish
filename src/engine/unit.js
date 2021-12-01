import MathUtils from "../utils/mathUtils";
import Vector from "../utils/vector";

export default class Unit {
  constructor(x_, y_) {
    this.location = new Vector(x_, y_);
    this.velocity = new Vector();
    this.size = new Vector(10, 10);
    this.health = 100;
    this.attack = 20 + MathUtils.gaussian() * 2;
    this.speed = 2 + MathUtils.gaussian() + 5;
    this.fov = 150;
    this.state = "PATROLLING";
  }

  update() {
    this.location.add(this.velocity);
  }

  checkEdges(canvas) {
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

  render(context) {
    context.beginPath();

    context.fillStyle = "rgba(50, 50, 50)";
    context.arc(this.location.x, this.location.y, this.fov, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = "rgb(3, 160, 98)";
    context.fillRect(
      this.location.x - this.size.x / 2,
      this.location.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );

    context.closePath();
  }
}
