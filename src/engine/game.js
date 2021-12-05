import Init from "./init.js";

export default class Game {
  constructor() {
    Init.initialiseCanvas(20);
    this.map = Init.initialiseMap();
    this.grid = Init.initialiseGrid();
  }

  run() {
    this.draw();
    requestAnimationFrame(this.run.bind(this));
  }

  draw() {
    global.context.clearRect(0, 0, global.WIDTH, global.HEIGHT);
    this.map.render();

    for (let y_ = 0; y_ < this.grid.cellsY; y_++) {
      for (let x_ = 0; x_ < this.grid.cellsX; x_++) {
        const cell = this.grid.cells[y_][x_];
        let platoonNode = cell.platoons.head;
        let unitNode = cell.units.head;

        // while (platoonNode) {
        //   const platoon = platoonNode.value;
        //   platoon.update();
        //   platoon.checkEdges();
        //   platoon.render();

        //   platoonNode = platoonNode.next;
        //   this.grid.updateCell(platoon, cell);
        // }

        while (unitNode) {
          const unit = unitNode.value;
          unit.update();
          unit.checkEdges();
          unit.render();

          unitNode = unitNode.next;
          this.grid.updateCell(unit, cell);
        }
      }
    }
  }
}
