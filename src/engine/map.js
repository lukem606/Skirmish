export default class Map {
  constructor() {
    this.width = global.WIDTH;
    this.height = global.HEIGHT;
    this.cells = this.initialiseCells();
  }

  initialiseCells() {
    const cells = [
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
    ];

    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        cells[y][x] = {
          platoons: [],
          units: [],
        };
      }
    }

    return cells;
  }

  getMapCell(location) {
    const x_ = Math.floor((location.x % global.WIDTH) / 4);
    const y_ = Math.floor((location.y % global.HEIGHT) / 4);

    return this.cells[y][x];
  }
}
