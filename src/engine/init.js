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
    const { WIDTH, HEIGHT } = global;
    let x_, y_;

    if (WIDTH > HEIGHT) {
      x_ = 6;
      y_ = 4;
    } else if (WIDTH < HEIGHT) {
      x_ = 4;
      y_ = 6;
    } else if (WIDTH === HEIGHT) {
      x_ = 6;
      y_ = 6;
    }

    const grid = new Grid(x_, y_);
    return grid;
  }

  static initialiseUnits(grid) {
    let colour;
    const units = new LinkedList();

    for (let u = 0; u < 40; u++) {
      let origin;

      if (u % 4 === 0) {
        colour = "RED";
        origin = new Vector(
          MathUtils.random(0, global.WIDTH / 2),
          MathUtils.random(0, global.HEIGHT / 2)
        );
      } else if (u % 4 === 1) {
        colour = "BLUE";
        origin = new Vector(
          MathUtils.random(global.WIDTH / 2, global.WIDTH),
          MathUtils.random(0, global.HEIGHT / 2)
        );
      } else if (u % 4 === 2) {
        colour = "GREEN";
        origin = new Vector(
          MathUtils.random(0, global.WIDTH / 2),
          MathUtils.random(global.HEIGHT / 2, global.HEIGHT)
        );
      } else if (u % 4 === 3) {
        colour = "YELLOW";
        origin = new Vector(
          MathUtils.random(global.WIDTH / 2, global.WIDTH),
          MathUtils.random(global.HEIGHT / 2, global.HEIGHT)
        );
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

    for (let p = 0; p < 32; p++) {
      let colour;
      let origin;
      const platoonUnits = [];

      if (p % 4 === 0) {
        colour = "RED";
        origin = new Vector(
          MathUtils.random(50, global.WIDTH / 2),
          MathUtils.random(50, global.HEIGHT / 2)
        );
      } else if (p % 4 === 1) {
        colour = "BLUE";
        origin = new Vector(
          MathUtils.random(global.WIDTH / 2, global.WIDTH - 50),
          MathUtils.random(50, global.HEIGHT / 2)
        );
      } else if (p % 4 === 2) {
        colour = "GREEN";
        origin = new Vector(
          MathUtils.random(50, global.WIDTH / 2),
          MathUtils.random(global.HEIGHT / 2, global.HEIGHT - 50)
        );
      } else if (p % 4 === 3) {
        colour = "YELLOW";
        origin = new Vector(
          MathUtils.random(global.WIDTH / 2, global.WIDTH - 50),
          MathUtils.random(global.HEIGHT / 2, global.HEIGHT - 50)
        );
      }

      for (let u = 0; u < 9; u++) {
        const unit = new Unit(
          origin.x + MathUtils.random(-20, 20),
          origin.y + MathUtils.random(-20, 20),
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
