import { v4 as v4uuid } from "uuid";
import Vector from "../utils/vector";

export default class Ballistic {
  constructor(unit) {
    const velocity = this.getVelocity(unit);

    this.location = unit.location.copy();
    this.velocity = velocity;
    this.angle = velocity.heading();

    this.stats = {
      speed: 10,
      limit: 100,
      damage: unit.stats.attack,
    };

    this.state = {
      origin: unit.state.id,
      id: v4uuid(),
      distanceTravelled: 0,
    };
  }

  checkCollisions(grid) {
    let closestUnit = null;
    const hits = [];

    const future = this.getFutureLocation(grid);
    const futureDir = Vector.sub(future, this.location);
    const futureMag = futureDir.magnitude();
    futureDir.normalise();

    const units = grid.getBulletUnits(this.location, future);

    units.forEach((unit) => {
      if (unit.state.id !== this.state.origin) {
        const unitDir = Vector.sub(unit.location, this.location);
        const unitMag = unitDir.magnitude();
        unitDir.normalise();

        if (
          unitMag <= this.stats.speed &&
          future.dist(unit.location) <= this.stats.speed
        ) {
          const theta = Math.acos(
            futureDir.dot(unitDir) / (futureMag * unitMag)
          );
          const distanceFromBulletPath = Math.sin(theta) * unitMag;

          if (distanceFromBulletPath < unit.size.x * 1.5) {
            hits.push({ unit: unit, distance: unitMag });
          }
        }
      }
    });

    if (hits.length) {
      hits.forEach((unit) => {
        if (!closestUnit) {
          closestUnit = unit;
        } else {
          if (unit.distance < closestUnit.distance) {
            closestUnit = unit;
          }
        }
      });

      closestUnit.unit.applyDamage(this.stats.damage);
      this.state.distanceTravelled = this.limit * 2;
    }
  }

  getVelocity(unit) {
    const dir = Vector.sub(unit.state.target.location, unit.location);
    dir.normalise();
    dir.mult(10);
    return dir;
  }

  getFutureLocation(grid) {
    const future = Vector.add(this.location, this.velocity);

    if (future.x < 0) {
      future.x = 0;
    } else if (future.x > grid.width) {
      future.x = grid.width - 1;
    } else if (future.y < 0) {
      future.y = 0;
    } else if (future.y > grid.height) {
      future.y = grid.height - 1;
    }

    return future;
  }

  updateLocation() {
    this.location.add(this.velocity);
    this.state.distanceTravelled += this.stats.speed;
  }
}
