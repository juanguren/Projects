
var userLink = document.querySelector("#usersClick");
userLink.addEventListener("click", userClick);

function userClick (e) {
    userLink.style.color = "crimson";
}

var productCatalog = document.querySelector(".product-container");
productCatalog.addEventListener("click", orderProduct);

function orderProduct(e) {
    if (e.target !== e.currentTarget) {
        var product = e.target.id;
        console.log(product);
        
    }  e.stopPropagation();
}