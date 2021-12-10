export default class Colours {
  static getRGB(colour) {
    return `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
  }

  static getRGBA(colour, alpha) {
    return `rgba(${colour[0]}, ${colour[1]}, ${colour[2]}, ${alpha})`;
  }
}
