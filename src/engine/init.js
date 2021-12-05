import Map from "./map.js";
import MathUtils from "../utils/mathUtils.js";
import Platoon from "./platoon.js";
import Unit from "./unit.js";
import Vector from "../utils/vector.js";
import Grid from "./grid.js";

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
    };
  }

  static initialiseMap() {
    const map = new Map();

    return map;
  }

  static initialiseGrid() {
    const grid = new Grid(6, 4);
    this.initialiseUnits(grid);
    this.initialisePlatoons(grid);

    return grid;
  }

  static initialiseUnits(grid) {
    for (let i = 0; i < 50; i++) {
      const origin = new Vector(
        Math.random() * global.WIDTH,
        Math.random() * global.HEIGHT
      );

      const unit = new Unit(origin.x, origin.y, i % 4);

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

      for (let i = 0; i < Math.round(MathUtils.random(2, 9)); i++) {
        const unit = new Unit(
          origin.x + MathUtils.gaussian() * 10,
          origin.y + MathUtils.gaussian() * 10,
          0
        );
        units.push(unit);
      }

      const cell = grid.getCellFromVector(origin);
      cell.platoons.append(new Platoon(origin.x, origin.y, units));
    }
  }
}
