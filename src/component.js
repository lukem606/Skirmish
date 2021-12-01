export default (text = "Nu fone hu dis?") => {
  const element = document.createElement("h1");

  element.textContent = text;

  return element;
};
