
/**
 * SECTION Products Module
 **/ 

let find = JSON.parse(localStorage.getItem("users"));

// Event for registering product´s unique ID
var productCatalog = document.querySelector(".product-container");
productCatalog.addEventListener("click", orderProduct);

let products = [];

function orderProduct(e) {
    if (e.target !== e.currentTarget) {
        var product = e.target.id;
        console.log(product);
        
        if (products.length >= 3) {
            console.log("You just exceeded your limit");
        } else{
            products.push(product);        
            find[0].product = products;        
            localStorage.setItem("users", JSON.stringify(find));
            console.log(products);   
        }  
    }  e.stopPropagation();
}

// Show (greet) the registered user at the top of the section
let userGreet = document.querySelector("#greetUser");

let name;
let userProduct;

for(let i = 0; i<find.length; i++){
    for(key in find[i]){
        name = find[i].firstName;
    }
}

userGreet.innerText = "Hi" + " " + name + "!";





