import initialise from "./init.js";
import Unit from "./engine/unit.js";
import Utils from "./utils/mathUtils.js";
import "./style.css";
import Vector from "./utils/vector.js";

const setup = () => {
  return initialise();
};

const draw = () => {
  context.clearRect(0, 0, WIDTH, HEIGHT);

  units.forEach((unit) => {
    unit.update();
    unit.checkEdges(canvas);
    unit.render(context);
  });

  requestAnimationFrame(draw);
};

global = setup();
const { canvas, context, WIDTH, HEIGHT } = global;

const units = [];

for (let i = 0; i < 5; i++) {
  const unit = new Unit(50 + i * 15, 50);

  const velocity = new Vector(1, 2);
  velocity.normalise();
  velocity.mult(unit.stats.speed);

  unit.velocity = velocity;
  units.push(unit);
}

draw();
