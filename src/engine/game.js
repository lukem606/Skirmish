import COLOURS from "../data/colours";
import Colours from "../utils/colours";
import Init from "./init";

export default class Game {
  constructor() {
    Init.initialiseCanvas(20);
    this.grid = Init.initialiseGrid();
    this.map = Init.initialiseMap();
    this.running = true;
    this.previous = performance.now();
  }

  run() {
    const { context, WIDTH, HEIGHT } = global;

    this.draw();

    if (this.running) {
      this.update();
    } else {
      if ((performance.now() - this.previous) % 1600 < 800) {
        context.font = "32px PressStart2P";
        context.textBaseline = "top";
        context.textAlign = "center";

        context.fillStyle = Colours.getRGB(COLOURS.WHITE);
        context.fillText("PAUSED", WIDTH / 2, HEIGHT / 2);
      }
    }

    requestAnimationFrame(this.run.bind(this));
  }

  update() {
    for (let y_ = 0; y_ < this.grid.cellsY; y_++) {
      for (let x_ = 0; x_ < this.grid.cellsX; x_++) {
        const cell = this.grid.cells[y_][x_];
        let platoonNode = cell.platoons.head;
        let unitNode = cell.units.head;

        while (platoonNode && platoonNode.active) {
          const platoon = platoonNode.value;
          platoonNode = platoonNode.next;

          platoon.update();
          platoon.checkEdges();
          this.grid.updateCell(platoon, cell);
        }

        while (unitNode && unitNode.active) {
          const unit = unitNode.value;
          unitNode = unitNode.next;

          if (unit.state.behaviour === "PLATOON") {
            if (unit.stats.platoon.constructor === Array) {
              this.grid.createPlatoon(unit.stats.platoon);
            } else if (unit.stats.platoon instanceof Platoon) {
              this.grid.addUnitToPlatoon(unit, unit.stats.platoon);
            }
          } else {
            const visibleEntities = this.grid.getVisibleEntities(unit);
            unit.performBehaviour(visibleEntities);
            unit.checkEdges();
            this.grid.updateCell(unit, cell);
          }
        }
      }
    }
  }

  draw() {
    const { context, platoonTotals, unitTotals } = global;
    context.clearRect(0, 0, global.WIDTH, global.HEIGHT);
    this.map.render(this.grid);

    for (let y_ = 0; y_ < this.grid.cellsY; y_++) {
      for (let x_ = 0; x_ < this.grid.cellsX; x_++) {
        const cell = this.grid.cells[y_][x_];
        let platoonNode = cell.platoons.head;
        let unitNode = cell.units.head;

        while (platoonNode && platoonNode.active) {
          const platoon = platoonNode.value;

          // platoon.render();
          for (const unit of platoon.units.getAll()) {
            unit.render();
          }

          platoonNode = platoonNode.next;
        }

        while (unitNode && unitNode.active) {
          const unit = unitNode.value;

          unit.render();

          unitNode = unitNode.next;
        }
      }
    }

    context.font = "16px PressStart2P";
    context.textBaseline = "top";
    context.textAlign = "center";

    context.fillStyle = Colours.getRGBA(COLOURS.teams["RED"], 0.5);
    context.fillText(unitTotals["RED"], 20, 20);
    context.fillText(platoonTotals["RED"], 20, 50);
    context.fillStyle = Colours.getRGBA(COLOURS.teams["BLUE"], 0.5);
    context.fillText(unitTotals["BLUE"], 80, 20);
    context.fillText(platoonTotals["BLUE"], 80, 50);
    context.fillStyle = Colours.getRGBA(COLOURS.teams["GREEN"], 0.5);
    context.fillText(unitTotals["GREEN"], 140, 20);
    context.fillText(platoonTotals["GREEN"], 140, 50);
    context.fillStyle = Colours.getRGBA(COLOURS.teams["YELLOW"], 0.5);
    context.fillText(unitTotals["YELLOW"], 200, 20);
    context.fillText(platoonTotals["YELLOW"], 200, 50);
  }
}
