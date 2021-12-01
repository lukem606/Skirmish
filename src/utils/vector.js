export default class Vector {
  constructor(x_, y_, z_) {
    this.x = x_ ? x_ : 0;
    this.y = y_ ? y_ : 0;
    this.z = z_ ? z_ : 0;
  }

  static add(firstVector, secondVector) {
    const x_ = firstVector.x + secondVector.x;
    const y_ = firstVector.y + secondVector.y;
    const z_ = firstVector.z + secondVector.z;
    return new Vector(x_, y_, z_);
  }

  static sub(firstVector, secondVector) {
    const x_ = firstVector.x - secondVector.x;
    const y_ = firstVector.y - secondVector.y;
    const z_ = firstVector.z - secondVector.z;
    return new Vector(x_, y_, z_);
  }

  static mult(vector, scalar) {
    const x_ = vector.x * scalar;
    const y_ = vector.y * scalar;
    const z_ = vector.z * scalar;
    return new Vector(x_, y_, z_);
  }

  static div(vector, scalar) {
    let x_, y_, z_;

    if (scalar !== 0) {
      x_ = vector.x / scalar;
      y_ = vector.y / scalar;
      z_ = vector.z / scalar;
    } else {
      console.warn("Dividing by zero!");
      x_ = vector.x;
      y_ = vector.y;
      z_ = vector.z_;
    }

    return new Vector(x_, y_, z_);
  }

  static fromAngle2d(theta) {
    return new Vector(Math.cos(theta), Math.sin(theta));
  }

  static fromAngle3d(theta, phi) {
    const cosPhi = Math.cos(phi);
    const sinPhi = Math.sin(phi);
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    return new p5.Vector(sinTheta * sinPhi, -1 * cosTheta, sinTheta * cosPhi);
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
  }

  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
  }

  div(scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
      this.y /= scalar;
      this.z /= scalar;
    } else {
      console.warn("Dividing by zero!");
    }
  }

  copy() {
    return new Vector(this.x, this.y, this.z);
  }

  dist(secondVector) {
    return Vector.sub(secondVector, this).magnitude();
  }

  equals(vector) {
    if (this.x === vector.x && this.y === vector.y && this.z === vector.z) {
      return true;
    } else {
      return false;
    }
  }

  heading() {
    return Math.atan2(this.y, this.x);
  }

  normalise() {
    const length = this.magnitude();

    if (length !== 0) {
      this.mult(1 / length);
    }

    return this;
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
}
