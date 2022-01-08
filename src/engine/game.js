import Ballistic from "./ballistic";
import Init from "./init";
import MathUtils from "../utils/mathUtils";
import Platoon from "./platoon";
import Render from "./render";

export default class Game {
  constructor() {
    const { grid, map, platoons, units, ballistics } = Init.init(20);
    this.grid = grid;
    this.map = map;
    this.platoons = platoons;
    this.units = units;
    this.ballistics = ballistics;

    this.running = true;
    this.previous = performance.now();
  }

  run() {
    this.draw();

    if (this.running) {
      this.updateAI();
      this.updatePhysics();
      this.grid.updateCells();
      this.updatePlatoons();
    }

    requestAnimationFrame(this.run.bind(this));
  }

  draw() {
    Render.clear();
    Render.renderGrid(this.grid);
    Render.renderOverlay();
    Render.renderAllPlatoons(this.platoons.getAll());
    Render.renderAllUnits(this.units.getAll());
    Render.renderAllBallistics(this.ballistics.getAll());

    if (!this.running) {
      if ((performance.now() - this.previous) % 1600 < 800) {
        Render.renderPause();
      }
    }
  }

  updateAI() {
    for (const platoon of this.platoons.getAll()) {
      platoon.update();
    }

    for (const unit of this.units.getAll()) {
      const visibleUnits = this.grid.getVisibleUnits(unit);

      if (unit.state.behaviour !== "PLATOON") {
        unit.performBehaviour(visibleUnits);
      }
    }
  }

  updatePhysics() {
    const { WIDTH, HEIGHT } = global;

    for (const ballistic of this.ballistics.getAll()) {
      ballistic.checkCollisions(this.grid);

      if (ballistic.state.distanceTravelled <= ballistic.stats.limit) {
        ballistic.updateLocation();

        if (
          ballistic.location.x < 0 ||
          ballistic.location.x > WIDTH ||
          ballistic.location.y < 0 ||
          ballistic.location.y > HEIGHT
        ) {
          const ballisticCell = this.grid.getCellFromVector(ballistic.location);
          ballisticCell.ballistics.removeById(ballistic.state.id);
          this.ballistics.removeById(ballistic.state.id);
        }
      } else {
        const ballisticCell = this.grid.getCellFromVector(ballistic.location);
        ballisticCell.ballistics.removeById(ballistic.state.id);
        this.ballistics.removeById(ballistic.state.id);
      }
    }

    for (const unit of this.units.getAll()) {
      unit.checkEdges();

      if (unit.state.action === "FIRE") {
        const unitCell = this.grid.getCellFromVector(unit.location);
        const ballistic = new Ballistic(unit);

        unitCell.ballistics.append(ballistic);
        this.ballistics.append(ballistic);

        unit.state.action = "ATTACK";
      }
    }
  }

  updatePlatoons() {
    const platoonMap = {};
    const platoonIds = this.platoons
      .getAll()
      .map((platoon) => platoon.state.id);

    for (const unit of this.units.getAll()) {
      if (
        unit.state.behaviour === "PLATOON" &&
        unit.state.action === "JOINING"
      ) {
        if (platoonIds.includes(unit.state.platoon)) {
          for (const platoon of this.platoons.getAll()) {
            if (platoon.state.id === unit.state.platoon) {
              platoon.addUnit(unit);
            }
          }
        } else {
          if (platoonMap.hasOwnProperty(unit.state.platoon)) {
            platoonMap[unit.state.platoon].push(unit);
          } else {
            platoonMap[unit.state.platoon] = [unit];
          }
        }
      }
    }

    if (Object.entries(platoonMap).length >= 1) {
      for (let [id, units] of Object.entries(platoonMap)) {
        const unitLocations = units.map((unit) => unit.location);
        const origin = MathUtils.meanVector(unitLocations);
        const colour = units[0].stats.team;

        this.platoons.append(new Platoon(origin.x, origin.y, units, colour));
      }
    }

    for (const platoon of this.platoons.getAll()) {
      if (platoon.units.length >= 10) {
        let unitList = platoon.units.getAll();
        unitList = MathUtils.shuffle(unitList);
        const newUnits = [];
        const origin = platoon.location.copy();

        for (let i = 0; i < 5; i++) {
          platoon.units.removeById(unitList[i].state.id);
          newUnits.push(unitList[i]);
        }

        this.platoons.append(
          new Platoon(origin.x, origin.y, newUnits, platoon.stats.team)
        );
      }
    }
  }
}
