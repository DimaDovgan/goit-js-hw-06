const input = document.querySelector("input#name-input");
console.log(input);
const nameUser = document.querySelector("span#name-output");
console.log(nameUser);
const record = (Event) => {
    if(input.value!=="")nameUser.textContent = input.value;
    
    else { nameUser.textContent = "Anonymous" };
}
input.addEventListener("input", record);
