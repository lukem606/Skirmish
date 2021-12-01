export default class Vector {
  constructor(x_, y_, z_) {
    this.x = x_ ? x_ : 0;
    this.y = y_ ? y_ : 0;
    this.z = z_ ? z_ : 0;
  }

  static add(vector) {
    const x = this.x + vector.x;
    const y = this.y + vector.y;
    const z = this.z + vector.z;
    return new Vector(x, y, z);
  }

  static sub(vector) {
    const x = this.x - vector.x;
    const y = this.y - vector.y;
    const z = this.z - vector.z;
    return new Vector(x, y, z);
  }

  static mult(vector) {
    const x = this.x * vector.x;
    const y = this.y * vector.y;
    const z = this.z * vector.z;
    return new Vector(x, y, z);
  }

  static div(vector) {
    let x, y, z;

    if (this.x !== 0 && vector.x !== 0) {
      x = this.x / vector.x;
    } else {
      x = 0;
    }

    if (this.y !== 0 && vector.y !== 0) {
      y = this.y / vector.y;
    } else {
      y = 0;
    }

    if (this.z !== 0 && vector.z !== 0) {
      z = this.z / vector.z;
    } else {
      z = 0;
    }

    return new Vector(x, y, z);
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

  mult(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    this.z *= vector.z;
  }

  div(vector) {
    if (this.x !== 0 && vector.x !== 0) {
      this.x /= vector.x;
    }

    if (this.y !== 0 && vector.y !== 0) {
      this.y /= vector.y;
    }

    if (this.z !== 0 && vector.z !== 0) {
      this.z /= vector.z;
    }
  }

  copy() {
    return new Vector(this.x, this.y, this.z);
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
