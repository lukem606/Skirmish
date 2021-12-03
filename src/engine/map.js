import Vector from "../utils/vector.js";

export default class Map {
  constructor() {
    const cellsX = 6;
    const cellsY = 4;

    this.width = global.WIDTH;
    this.height = global.HEIGHT;
    this.cellsX = cellsX;
    this.cellsY = cellsY;
    this.size = new Vector(global.WIDTH / cellsX, global.HEIGHT / cellsY);
    this.cells = this.initialiseCells();
    this.shiftedUnits = [];
  }

  initialiseCells() {
    const cells = [];

    for (let x = 0; x < this.cellsX; x++) {
      const row = [];

      for (let y = 0; y < this.cellsY; y++) {
        row.push({
          obstacles: [],
          platoons: [],
          units: [],
          ballistics: [],
        });
      }

      cells.push(row);
    }

    return cells;
  }

  getMapCell(location) {
    const x_ = Math.floor(location.x / this.size.x);
    const y_ = Math.floor(location.y / this.size.y);

    return this.cells[x_][y_];
  }

  updateCell(unit) {
    const prevCell = this.getMapCell(unit.prevLocation);
    const cell = this.getMapCell(unit.location);

    if (prevCell != cell) {
      this.shiftedUnits.push(unit);

      const index = prevCell.units.indexOf(unit);
      prevCell.units.splice(index, 1);
    }
  }

  cleanupCells() {
    for (const unit of this.shiftedUnits) {
      const cell = this.getMapCell(unit.location);
      cell.units.push(unit);
    }

    this.shiftedUnits = [];
  }
}
