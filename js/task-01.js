const categoriesElem = document.querySelector("#categories");
let categoriesElemQuantity = categoriesElem.children.length;

console.log(`Number of categories:${categoriesElemQuantity}`);

const listOfItems = document.querySelectorAll(".item");


const foo=(obj)=> {
    const h2El = obj.querySelector("h2")
    console.log(`Category:${h2El.textContent}`);
    const quantityEl = obj.querySelectorAll("li");
    console.log(`Elements:${quantityEl.length}`);

    
}
foo(listOfItems[0]);
foo(listOfItems[1]);
foo(listOfItems[2]);