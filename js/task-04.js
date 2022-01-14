const counterValue = document.querySelector("#value");
counterValue.textContent = 0;
const decrementBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");
let quantity = parseInt(counterValue.textContent, 10);

const foo = (event) => {
  quantity += parseInt(event.currentTarget.textContent, 10)
  counterValue.textContent = quantity;
};
decrementBtn.addEventListener("click", foo);
incrementBtn.addEventListener("click", foo);
// const decrement = () => {
     
//     gg -= 1;
//     console.log(gg)
//     counterValue.textContent = gg;
//     return gg
    

// }
// const increment = () => {
//      gg += 1;
//     console.log(gg)
//     counterValue.textContent = gg;
//     return gg
//  }
// decrementBtn.addEventListener("click", decrement);
// incrementBtn.addEventListener("click", increment)
