import LinkedList from "../utils/linkedList.js";
import Vector from "../utils/vector.js";
import Platoon from "./platoon.js";
import Unit from "./unit.js";

export default class Grid {
  constructor(x_, y_) {
    this.width = global.WIDTH;
    this.height = global.HEIGHT;
    this.cellsX = x_;
    this.cellsY = y_;
    this.cellSize = new Vector(global.WIDTH / x_, global.HEIGHT / y_);
    this.cells = this.initaliseCells();
  }

  initaliseCells() {
    const cells = [];

    for (let y_ = 0; y_ < this.cellsY; y_++) {
      const row = [];

      for (let x_ = 0; x_ < this.cellsX; x_++) {
        row.push({
          id: y_ * this.cellsX + x_,
          obstacles: new LinkedList(),
          platoons: new LinkedList(),
          units: new LinkedList(),
          ballistics: new LinkedList(),
        });
      }

      cells.push(row);
    }

    return cells;
  }

  getCellFromVector(location) {
    const x_ = Math.floor(location.x / this.cellSize.x);
    const y_ = Math.floor(location.y / this.cellSize.y);

    return this.cells[y_][x_];
  }

  updateCell(entity, previousCell) {
    const currentCell = this.getCellFromVector(entity.location);

    if (previousCell.id !== currentCell.id) {
      if (entity instanceof Unit) {
        currentCell.units.append(entity);
        previousCell.units.remove(entity);
      } else if (entity instanceof Platoon) {
        currentCell.platoons.append(entity);
        previousCell.platoons.remove(entity);
      }
    }
  }
}
