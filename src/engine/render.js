import COLOURS from "../data/colours";
import ColourUtils from "../utils/colourUtils";
import MathUtils from "../utils/mathUtils";

export default class Render {
  static clear() {
    const { context, WIDTH, HEIGHT } = global;
    context.clearRect(0, 0, WIDTH, HEIGHT);
  }

  static renderOverlay() {
    const { context, platoonTotals, unitTotals } = global;
    context.font = "16px PressStart2P";
    context.textBaseline = "top";
    context.textAlign = "center";

    context.fillStyle = ColourUtils.getRGBA(COLOURS.teams["RED"], 0.5);
    context.fillText(unitTotals["RED"], 20, 20);
    context.fillText(platoonTotals["RED"], 20, 50);
    context.fillStyle = ColourUtils.getRGBA(COLOURS.teams["BLUE"], 0.5);
    context.fillText(unitTotals["BLUE"], 80, 20);
    context.fillText(platoonTotals["BLUE"], 80, 50);
    context.fillStyle = ColourUtils.getRGBA(COLOURS.teams["GREEN"], 0.5);
    context.fillText(unitTotals["GREEN"], 140, 20);
    context.fillText(platoonTotals["GREEN"], 140, 50);
    context.fillStyle = ColourUtils.getRGBA(COLOURS.teams["YELLOW"], 0.5);
    context.fillText(unitTotals["YELLOW"], 200, 20);
    context.fillText(platoonTotals["YELLOW"], 200, 50);
  }

  static renderGrid(grid) {
    const { context } = global;
    for (let y = 0; y < grid.cellsY; y++) {
      for (let x = 0; x < grid.cellsX; x++) {
        context.strokeStyle = ColourUtils.getRGBA(COLOURS.GREY, 0.3);
        context.strokeRect(
          x * grid.cellSize.x,
          y * grid.cellSize.y,
          grid.cellSize.x,
          grid.cellSize.y
        );
      }
    }
  }

  static renderAllPlatoons(platoons) {
    platoons.forEach((platoon) => {
      this.renderPlatoon(platoon);
    });
  }

  static renderAllUnits(units) {
    units.forEach((unit) => {
      this.renderUnit(unit);
    });
  }

  static renderAllBallistics(ballistics) {
    ballistics.forEach((ballistics) => {
      this.renderBallistic(ballistics);
    });
  }

  static renderPlatoon(platoon) {
    const { context } = global;
    context.save();
    context.translate(platoon.location.x, platoon.location.y);

    context.beginPath();
    context.fillStyle = ColourUtils.getRGBA(COLOURS.GREY, 0.3);
    context.arc(0, 0, 10, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.restore();
  }

  static renderUnit(unit) {
    const { context } = global;
    const visionCone = false;
    context.save();
    context.translate(unit.location.x, unit.location.y);
    context.rotate(unit.angle);

    if (visionCone) {
      context.beginPath();
      context.fillStyle = "rgba(255, 0, 0, 0.2)";
      context.lineTo(
        Math.cos(MathUtils.degreesToRadians((-1 * unit.stats.FOV) / 2)),
        Math.sin(MathUtils.degreesToRadians((-1 * unit.stats.FOV) / 2))
      );
      context.arc(
        0,
        0,
        unit.stats.acuity,
        MathUtils.degreesToRadians((-1 * unit.stats.FOV) / 2),
        MathUtils.degreesToRadians(unit.stats.FOV / 2)
      );
      context.lineTo(0, 0);
      context.fill();
      context.closePath();

      context.beginPath();
      context.fillStyle = "rgba(0, 0, 255, 0.4)";
      context.lineTo(
        Math.cos(MathUtils.degreesToRadians((-1 * unit.stats.FOV) / 2)),
        Math.sin(MathUtils.degreesToRadians((-1 * unit.stats.FOV) / 2))
      );
      context.arc(
        0,
        0,
        unit.stats.range,
        MathUtils.degreesToRadians((-1 * unit.stats.FOV) / 2),
        MathUtils.degreesToRadians(unit.stats.FOV / 2)
      );
      context.lineTo(0, 0);
      context.fill();
      context.closePath();
    }

    if (unit.stats.health > 0) {
      context.fillStyle = unit.state.colour;
    } else {
      context.fillStyle = ColourUtils.getRGB(COLOURS.GREY);
    }

    context.fillRect(
      -0.25 * unit.size.x,
      -0.5 * unit.size.y,
      0.5 * unit.size.x,
      0.25 * unit.size.y
    );
    context.fillRect(
      -0.25 * unit.size.x,
      0.25 * unit.size.y,
      0.5 * unit.size.x,
      0.25 * unit.size.y
    );
    context.fillRect(
      -0.5 * unit.size.x,
      -0.25 * unit.size.y,
      unit.size.x,
      0.5 * unit.size.y
    );

    context.restore();
  }

  static renderBallistic(ballistic) {
    const { context } = global;
    context.save();
    context.translate(ballistic.location.x, ballistic.location.y);
    context.rotate(ballistic.angle);

    context.fillStyle = ColourUtils.getRGB(COLOURS.WHITE);
    context.fillRect(0, 0, 2, 2);

    context.restore();
  }

  static renderPause() {
    const { context, WIDTH, HEIGHT } = global;

    context.font = "32px PressStart2P";
    context.textBaseline = "top";
    context.textAlign = "center";

    context.fillStyle = ColourUtils.getRGB(COLOURS.WHITE);
    context.fillText("PAUSED", WIDTH / 2, HEIGHT / 2 - 15);
  }
}
