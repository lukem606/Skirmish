import Map from "./map";
import MathUtils from "../utils/mathUtils";
import Platoon from "./platoon";
import Unit from "./unit";
import Vector from "../utils/vector";
import Grid from "./grid";

export default class Init {
  static initialiseCanvas(pad) {
    const WIDTH = window.innerWidth - pad * 2;
    const HEIGHT = window.innerHeight - pad * 2;

    const container = document.createElement("div");
    container.id = "container";
    container.style.padding = `${pad}px`;

    const canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    container.appendChild(canvas);
    document.body.appendChild(container);

    this.canvas = document.querySelector("canvas");
    this.context = canvas.getContext("2d");

    global = {
      canvas: this.canvas,
      context: this.context,
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
    // this.initialiseUnits(grid);
    this.initialisePlatoons(grid);

    return grid;
  }

  static initialiseUnits(grid) {
    const { unitTotals } = global;
    let colour;

    for (let i = 0; i < 24; i++) {
      const origin = new Vector(
        Math.random() * global.WIDTH,
        Math.random() * global.HEIGHT
      );

      if (i % 4 === 0) {
        colour = "RED";
      } else if (i % 4 === 1) {
        colour = "BLUE";
      } else if (i % 4 === 2) {
        colour = "GREEN";
      } else if (i % 4 === 3) {
        colour = "YELLOW";
      }

      //   colour = "RED";

      const unit = new Unit(origin.x, origin.y, colour);

      const cell = grid.getCellFromVector(origin);
      cell.units.append(unit);
    }
  }

  static initialisePlatoons(grid) {
    for (let i = 0; i < 5; i++) {
      const units = [];
      const origin = new Vector(
        MathUtils.random(50, global.WIDTH - 50),
        MathUtils.random(50, global.HEIGHT - 50)
      );

      const cell = grid.getCellFromVector(origin);
      cell.platoons.append(new Platoon(origin.x, origin.y, false, "RED"));
    }
  }
}
