const input = document.querySelector("input#validation-input");

const foo = (Event) => {
    
    const passwordLength=input.value.length
    const validLength = parseInt(input.dataset.length, 10);
    
    if (passwordLength === validLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        return;
    }
    input.classList.remove("valid");
    input.classList.add("invalid");
}
input.addEventListener("blur",foo)