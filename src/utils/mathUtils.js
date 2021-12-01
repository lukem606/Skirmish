export default class MathUtils {
  static degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  static randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  static gaussian() {
    let u = 0;
    let v = 0;

    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();

    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }
}
