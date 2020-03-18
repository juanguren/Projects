
/**
 * SECTION Products Module
 **/ 

let find = JSON.parse(localStorage.getItem("users"));

// Event for registering product´s unique ID
var productCatalog = document.querySelector(".product-container");
productCatalog.addEventListener("click", orderProduct);

let products = [];
let prices = [];

function orderProduct(e) {
    if (e.target !== e.currentTarget) {
        var product = e.target.id;
        
        if (products.length >= 4) {
            throw new Error(alert("Remember you can only select 4!"));

        } else{  
            // prices  
            let price = Math.random()*(1,100);     
            prices.push(parseFloat(price.toFixed(2)));
            console.log(prices);
            localStorage.setItem("prices", JSON.stringify(prices));
            // products
            products.push(product);        
            find[0].product = products;        
            localStorage.setItem("users", JSON.stringify(find));
            console.log(products);  
            $.notify(product + " added", "success"); 
        }  
    }  e.stopPropagation();
}

try {
    
}

catch(e){
    console.log(e);
    
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





