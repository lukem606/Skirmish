import Vector from "../utils/vector.js";

export default class Input {
  constructor() {
    this.KEYCODE_MAP = {
      UP: 38,
      LEFT: 37,
      DOWN: 40,
      RIGHT: 39,
      W: 87,
      A: 65,
      S: 83,
      D: 68,
      ENTER: 13,
      ESC: 27,
    };

    this.KEY_STATES = {};
    this.MOUSE_STATES = {};
    this.MOUSE_POS = new Vector();
  }

  configureKeys() {
    for (key of this.KEYCODE_MAP.keys()) {
      this.KEY_STATES[KEYCODE_MAP] = 0;
    }
  }

  initialiseEventListeners() {
    global.canvas.addEventListener("mousemove", (e) => {
      this.MOUSE_POS.x = e.offsetX;
      this.MOUSE_POS.y = e.offsetY;
    });

    global.canvas.addEventListener("mousedown", (e) => {});
  }
}
