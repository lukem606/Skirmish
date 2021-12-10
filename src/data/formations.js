export default class Formations {
  static getFormation(units) {
    if (units === 2) {
      return [
        [0, -1],
        [0, 1],
      ];
    } else if (units === 3) {
      return [
        [1, 0],
        [-1, -1],
        [-1, 1],
      ];
    } else if (units === 4) {
      return [
        [1, -1],
        [1, 1],
        [-1, -1],
        [-1, 1],
      ];
    } else if (units === 5) {
      return [
        [2, 0],
        [0, -1],
        [0, 1],
        [-2, -1],
        [-2, 1],
      ];
    } else if (units === 6) {
      return [
        [2, -1],
        [2, 1],
        [0, -1],
        [0, 1],
        [-2, -1],
        [-2, 1],
      ];
    } else if (units === 7) {
      return [
        [3, 0],
        [1, -1],
        [1, 1],
        [-1, -1],
        [-1, 1],
        [-3, -1],
        [-3, 1],
      ];
    } else if (units === 8) {
      return [
        [3, -1],
        [3, 1],
        [1, -1],
        [1, 1],
        [-1, -1],
        [-1, 1],
        [-3, -1],
        [-3, 1],
      ];
    } else if (units === 9) {
      return [
        [4, 0],
        [2, -1],
        [2, 1],
        [0, -1],
        [0, 1],
        [-2, -1],
        [-2, 1],
        [-4, -1],
        [-4, 1],
      ];
    }
  }
}
