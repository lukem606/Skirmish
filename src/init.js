export default () => {
  addCanvasToDOM();
  return getContextWithDims();
};

const addCanvasToDOM = () => {
  const PAD = 20;
  const WIDTH = window.innerWidth - PAD * 2;
  const HEIGHT = window.innerHeight - PAD * 2;

  const container = document.createElement("div");
  container.id = "container";
  container.style.padding = `${PAD}px`;

  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  container.appendChild(canvas);
  document.body.appendChild(container);
};

const getContextWithDims = () => {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  return {
    canvas: canvas,
    context: context,
    WIDTH: canvas.width,
    HEIGHT: canvas.height,
  };
};
