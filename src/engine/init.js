import Map from "./map";
import MathUtils from "../utils/mathUtils";
import Platoon from "./platoon";
import Unit from "./unit";
import Vector from "../utils/vector";
import Grid from "./grid";
import LinkedList from "../utils/linkedList";

export default class Init {
  static init(pad) {
    this.initialiseCanvas(pad);

    const grid = Init.initialiseGrid();
    const map = Init.initialiseMap();
    const { platoons, units } = Init.initialisePlatoons(grid);
    units.merge(Init.initialiseUnits(grid));
    // const units = Init.initialiseUnits(grid);
    // const platoons = new LinkedList();

    return { grid: grid, map: map, platoons: platoons, units: units };
  }

  static initialiseCanvas(pad) {
    const WIDTH = window.innerWidth - pad * 2;
    const HEIGHT = window.innerHeight - pad * 2;

    const container = document.createElement("div");
    container.id = "container";
    container.style.padding = `${pad}px`;

    const canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const context = canvas.getContext("2d");

    container.appendChild(canvas);
    document.body.appendChild(container);

    global = {
      canvas: canvas,
      context: context,
      WIDTH: WIDTH,
      HEIGHT: HEIGHT,
      unitTotals: {
        RED: 0,
        BLUE: 0,
        GREEN: 0,
        YELLOW: 0,
      },
      platoonTotals: {
        RED: 0,
        BLUE: 0,
        GREEN: 0,
        YELLOW: 0,
      },
    };
  }

  static initialiseMap() {
    const map = new Map();
    return map;
  }

  static initialiseGrid() {
    const grid = new Grid(6, 4);
    return grid;
  }

  static initialiseUnits(grid) {
    let colour;
    const units = new LinkedList();

    for (let u = 0; u < 80; u++) {
      const origin = new Vector(
        Math.random() * global.WIDTH,
        Math.random() * global.HEIGHT
      );

      if (u % 4 === 0) {
        colour = "RED";
      } else if (u % 4 === 1) {
        colour = "BLUE";
      } else if (u % 4 === 2) {
        colour = "GREEN";
      } else if (u % 4 === 3) {
        colour = "YELLOW";
      }

      const unit = new Unit(origin.x, origin.y, colour);
      units.append(unit);

      const cell = grid.getCellFromVector(origin);
      cell.units.append(unit);
    }

    return units;
  }

  static initialisePlatoons(grid) {
    const platoons = new LinkedList();
    const units = new LinkedList();

    for (let p = 0; p < 8; p++) {
      let colour;
      const platoonUnits = [];

      const origin = new Vector(
        MathUtils.random(50, global.WIDTH - 50),
        MathUtils.random(50, global.HEIGHT - 50)
      );

      if (p % 4 === 0) {
        colour = "RED";
      } else if (p % 4 === 1) {
        colour = "BLUE";
      } else if (p % 4 === 2) {
        colour = "GREEN";
      } else if (p % 4 === 3) {
        colour = "YELLOW";
      }

      for (let u = 0; u < 9; u++) {
        const unit = new Unit(
          origin.x + Math.random() * 20,
          origin.y + Math.random() * 20,
          colour
        );

        unit.state.behaviour = "PLATOON";
        unit.state.action = "PLATOON";
        units.append(unit);
        platoonUnits.push(unit);

        const cell = grid.getCellFromVector(unit.location);
        cell.units.append(unit);
      }

      platoons.append(new Platoon(origin.x, origin.y, platoonUnits, colour));
    }

    return { platoons: platoons, units: units };
  }
}
