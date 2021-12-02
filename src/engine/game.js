import Vector from "../utils/vector.js";
import Map from "./map.js";
import MathUtils from "../utils/mathUtils.js";
import Platoon from "./platoon.js";
import Unit from "./unit.js";

export default class Game {
  constructor() {
    this.initialiseCanvas(20);
    this.initialiseMap();
    // this.initialiseUnits();
    this.initialisePlatoons();
  }

  run() {
    this.draw();
    requestAnimationFrame(this.run.bind(this));
  }

  initialiseCanvas(pad) {
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

  initialiseMap() {
    this.map = new Map();
  }

  initialiseUnits() {
    const units = [];

    for (let i = 0; i < 5; i++) {
      const unit = new Unit(
        Math.random() * global.WIDTH,
        Math.random() * global.HEIGHT
      );
      units.push(unit);
    }

    this.units = units;
  }

  initialisePlatoons() {
    const platoons = [];

    for (let i = 0; i < 5; i++) {
      const origin = new Vector(
        MathUtils.random(50, global.WIDTH - 50),
        MathUtils.random(50, global.HEIGHT - 50)
      );

      const units = [];
      for (let i = 0; i < Math.round(MathUtils.random(2, 9)); i++) {
        units.push(
          new Unit(
            origin.x + MathUtils.gaussian() * 10,
            origin.y + MathUtils.gaussian() * 10
          )
        );
      }

      platoons.push(new Platoon(origin.x, origin.y, units));
    }

    this.platoons = platoons;
  }

  draw() {
    this.context.clearRect(0, 0, global.WIDTH, global.HEIGHT);

    this.platoons.forEach((platoon) => {
      platoon.update();
      platoon.checkEdges();
      platoon.render();
    });
  }
}
