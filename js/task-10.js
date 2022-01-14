function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const input = document.querySelector("input[type=number]");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const div = document.querySelector("#boxes");



const createBoxes = (amount) => {
  const objArr = [];
  for (let i = 0; i < amount; i++){
    let obj=document.createElement("div");
    obj.style.width = `${30 + 10 * i}px`;
    obj.style.height = `${30 + 10 * i}px`;
    obj.style.backgroundColor = getRandomHexColor();
    objArr.push(obj);
  }

  div.append(...objArr);

}
const createObj = () => {
  createBoxes(input.value);
}

const destroyObj = () => {
  while (div.lastElementChild) {
    div.removeChild(div.lastElementChild);
  }
}

create.addEventListener("click", createObj);
destroy.addEventListener("click", destroyObj)