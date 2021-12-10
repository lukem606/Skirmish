import COLOURS from "./data/colours";
import Colours from "./utils/colours";
import Game from "./engine/game";
import "./style.css";

const game = new Game();

document.addEventListener("keyup", (e) => {
  if (e.key === "p") {
    game.running = !game.running;
    game.pauseVisible = true;
    game.previous = performance.now();
  }
});

game.run();
