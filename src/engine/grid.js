import LinkedList from "../utils/linkedList";
import MathUtils from "../utils/mathUtils";
import Platoon from "./platoon";
import Vector from "../utils/vector";

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
          position: new Vector(x_, y_),
          obstacles: new LinkedList(),
          units: new LinkedList(),
          ballistics: new LinkedList(),
        });
      }

      cells.push(row);
    }

    return cells;
  }

  getCellFromVector(location) {
    let x_ = Math.floor(location.x / this.cellSize.x);
    let y_ = Math.floor(location.y / this.cellSize.y);

    return this.cells[y_][x_];
  }

  updateCells() {
    for (const row of this.cells) {
      for (const cell of row) {
        for (const unit of cell.units.getAll()) {
          const unitCell = this.getCellFromVector(unit.location);

          if (!cell.position.equals(unitCell.position)) {
            cell.units.removeById(unit.state.id);
            unitCell.units.append(unit);
          }
        }

        for (const ballistic of cell.ballistics.getAll()) {
          const ballisticCell = this.getCellFromVector(ballistic.location);

          if (!cell.position.equals(ballisticCell.position)) {
            cell.ballistics.removeById(ballistic.state.id);
            ballisticCell.ballistics.append(ballistic);
          }
        }
      }
    }
  }

  getBulletUnits(current, future) {
    const units = [];
    const currentCell = this.getCellFromVector(current);
    const futureCell = this.getCellFromVector(future);

    if (currentCell == futureCell) {
      currentCell.units.getAll().forEach((unit) => {
        units.push(unit);
      });
    } else {
      currentCell.units.getAll().forEach((unit) => {
        units.push(unit);
      });

      futureCell.units.getAll().forEach((unit) => {
        units.push(unit);
      });
    }

    return units;
  }

  getVisibleUnits(unit) {
    const unitCell = this.getCellFromVector(unit.location);
    const searchCells = this.getNeighbouringCells(unitCell);
    const visibleUnits = [];
    const unitDirection = unit.velocity.copy();
    unitDirection.normalise();

    for (const cell of searchCells) {
      let otherNode = cell.units.head;

      while (otherNode) {
        const other = otherNode.value;

        if (unit.state.id === other.state.id) {
          otherNode = otherNode.next;
        } else {
          if (
            (other.location.x - unit.location.x) *
              (other.location.x - unit.location.x) +
              (other.location.y - unit.location.y) *
                (other.location.y - unit.location.y) <
            unit.stats.acuity * unit.stats.acuity
          ) {
            const otherDirection = new Vector(
              other.location.x - unit.location.x,
              other.location.y - unit.location.y
            );
            otherDirection.normalise();

            const dot = unitDirection.dot(otherDirection);

            if (MathUtils.map(dot, -1, 1, 180, 0) < unit.stats.FOV / 2) {
              visibleUnits.push(other);
            }
          }

          otherNode = otherNode.next;
        }
      }
    }

    return visibleUnits;
  }

  getNeighbouringCells(cell) {
    const xValues = [cell.position.x];
    const yValues = [cell.position.y];

    if (cell.position.x === 0) {
      xValues.push(cell.position.x + 1);
    } else if (cell.position.x === this.cellsX - 1) {
      xValues.push(cell.position.x - 1);
    } else {
      xValues.push(cell.position.x - 1);
      xValues.push(cell.position.x + 1);
    }

    if (cell.position.y === 0) {
      yValues.push(cell.position.y + 1);
    } else if (cell.position.y === this.cellsY - 1) {
      yValues.push(cell.position.y - 1);
    } else {
      yValues.push(cell.position.y - 1);
      yValues.push(cell.position.y + 1);
    }

    const cells = [];

    for (let y_ = 0; y_ < yValues.length; y_++) {
      for (let x_ = 0; x_ < xValues.length; x_++) {
        cells.push(this.cells[yValues[y_]][xValues[x_]]);
      }
    }

    return cells;
  }

  createPlatoon(units) {
    const origin = units[0].location;
    const platoon = new Platoon(origin.x, origin.y, units);

    const cell = this.getCellFromVector(units[0].location);
    cell.platoons.append(platoon);
    cell.units.deactivateNodes(units);
  }

  addUnitToPlatoon(unit, platoon) {
    platoon.units.append(unit);

    const cell = this.getCellFromVector(unit.location);
    cell.units.deactivateNodes(unit);
  }
}
