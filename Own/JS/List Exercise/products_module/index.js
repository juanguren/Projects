
/**
 * SECTION Products Module
 **/ 


// Event for registering product´s unique ID
var productCatalog = document.querySelector(".product-container");
productCatalog.addEventListener("click", orderProduct);

function orderProduct(e) {
    if (e.target !== e.currentTarget) {
        var product = e.target.id;
        console.log(product);
        
    }  e.stopPropagation();
}

//

var find = JSON.parse(localStorage.getItem("users"));
let userGreet = document.querySelector("#greetUser");

let name;

for(let i = 0; i<find.length; i++){
    for(key in find[i]){
        name = find[i].firstName;
    }
}

// Show (greet) the registered user at the top of the section
userGreet.innerText = "Hi" + " " + name + "!";







