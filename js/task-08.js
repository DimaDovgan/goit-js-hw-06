const form = document.querySelector("form.login-form");
const email = document.querySelector("input[name=email]");
const password = document.querySelector("input[name=password]");

const validation = (Event) => {
    Event.preventDefault();
    if (email.value === "" || password.value === "") {
        alert("Ви не заповнили поля!")
        return;
    }
    let objectUser={
        email: email.value,
        password: password.value,
    }
    console.log(objectUser);
    form.reset();
}
form.addEventListener("submit",validation)
