function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector("button.change-color");
const colorText = document.querySelector("span.color");
const body = document.querySelector("body");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
}

const writeColor = () => {
  colorText.textContent = body.style.backgroundColor;
}

changeBtn.addEventListener("click", changeColor);
changeBtn.addEventListener("click", writeColor);