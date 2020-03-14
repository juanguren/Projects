
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
let test = document.querySelector("#show-local");

console.log(find);




for(let i = 0; i<find.length; i++){
    for(key in find[i]){
        console.log(find[i][key]);
    }
    
}

// Show the registered user at the beginning

let userGreet = document.querySelector("#greetUser");
let name = find[0].firstName;

userGreet.innerText = "Hi" + " " + name + "!";



