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

  unit.update();
  unit.checkEdges(canvas);
  unit.render(context);

  requestAnimationFrame(draw);
};

const { canvas, context, WIDTH, HEIGHT } = setup();

const units = [];

for (let i = 0; i < 5; i++) {}
const unit = new Unit(50, 50);
unit.velocity = new Vector(0.1, 0.2);

draw();
