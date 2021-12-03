import Init from "./init.js";

export default class Game {
  constructor() {
    this.map = Init.initialise();
  }

  run() {
    this.draw();
    requestAnimationFrame(this.run.bind(this));
  }

  draw() {
    global.context.clearRect(0, 0, global.WIDTH, global.HEIGHT);

    for (const row of this.map.cells) {
      for (const cell of row) {
        cell.platoons.forEach((platoon) => {
          platoon.update();
          platoon.checkEdges();
          platoon.render();
        });

        cell.units.forEach((unit) => {
          unit.update();
          unit.checkEdges();
          unit.render();

          this.map.updateCell(unit);
        });
      }
    }

    this.map.cleanupCells();
  }
}
