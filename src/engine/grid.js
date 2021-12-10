import COLOURS from "../data/colours";
import Colours from "../utils/colours";
import LinkedList from "../utils/linkedList";
import MathUtils from "../utils/mathUtils";
import Platoon from "./platoon";
import Vector from "../utils/vector";
import Unit from "./unit";

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

    if (!previousCell.position.equals(currentCell.position)) {
      if (entity instanceof Unit) {
        currentCell.units.append(entity);
        previousCell.units.removeByValues(entity);
      } else if (entity instanceof Platoon) {
        currentCell.platoons.append(entity);
        previousCell.platoons.removeByValues(entity);
      }
    }
  }

  getVisibleEntities(entity) {
    const entityCell = this.getCellFromVector(entity.location);
    const searchCells = this.getNeighbouringCells(entityCell);
    const visibleEntities = [];
    const entityDirection = entity.velocity.copy();
    entityDirection.normalise();

    for (const cell of searchCells) {
      let otherNode = cell.units.head;

      while (otherNode) {
        const other = otherNode.value;

        if (entity.state.id === other.state.id) {
          otherNode = otherNode.next;
        } else {
          if (
            (other.location.x - entity.location.x) *
              (other.location.x - entity.location.x) +
              (other.location.y - entity.location.y) *
                (other.location.y - entity.location.y) <
            entity.stats.acuity * entity.stats.acuity
          ) {
            const otherDirection = new Vector(
              other.location.x - entity.location.x,
              other.location.y - entity.location.y
            );
            otherDirection.normalise();

            const dot = entityDirection.dot(otherDirection);

            if (MathUtils.map(dot, -1, 1, 180, 0) < entity.stats.FOV / 2) {
              visibleEntities.push(other);
            }
          }

          otherNode = otherNode.next;
        }
      }
    }

    return visibleEntities;
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
