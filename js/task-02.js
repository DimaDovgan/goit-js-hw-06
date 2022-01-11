const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 
const ul = document.querySelector("#ingredients");

const liArr = ingredients.map(ingrad => {
  let liEl = document.createElement("li");
  liEl.textContent = ingrad;
  liEl.classList.add("item");
  return liEl; 
});
console.log(liArr);
ul.prepend(...liArr);

