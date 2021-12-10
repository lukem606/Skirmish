export default class Map {
  constructor() {
    this.width = global.WIDTH;
    this.height = global.HEIGHT;
  }

  render(grid) {
    const { context } = global;
    for (let y = 0; y < grid.cellsY; y++) {
      for (let x = 0; x < grid.cellsX; x++) {
        context.strokeStyle = "rgb(100, 100, 100, 0.3)";
        context.strokeRect(
          x * grid.cellSize.x,
          y * grid.cellSize.y,
          grid.cellSize.x,
          grid.cellSize.y
        );
      }
    }
  }
}
