import Vector from "./vector";

export default class MathUtils {
  static degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  static random(min, max) {
    const diff = max - min;
    return Math.random() * diff + min;
  }

  static gaussian() {
    let u = 0;
    let v = 0;

    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();

    return Math.sqrt(-1.0 * Math.log(u)) * Math.cos(1.0 * Math.PI * v);
  }

  static mean(numbers) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
  }

  static meanVector(vectors) {
    const total = new Vector();

    for (let vector of vectors) {
      total.x += vector.x;
      total.y += vector.y;
      total.z += vector.z;
    }

    total.div(vectors.length);
    return total;
  }

  static map(number, prevMin, prevMax, newMin, newMax) {
    const prevRange = prevMin - prevMax;
    const newRange = newMin - newMax;
    const scale = number / prevRange;

    return newRange * scale;
  }

  static shuffle(array) {
    let m = array.length;
    let t;
    let i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}
