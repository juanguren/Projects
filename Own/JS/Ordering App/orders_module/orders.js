
// bring data from local storage
let users = JSON.parse(localStorage.getItem("users"));
let prices = JSON.parse(localStorage.getItem("prices")); 

// instatiate html elements
let button = document.querySelector("#orders-display");
let table = document.querySelector("#order-table");
let loading = document.getElementById("loading"); // loading message

// NOTE initializing variables for capturing data
let productInfo = []; // captures product data
let fullName; // saves the users fullname
let clickCount = 0;

// this loop extracts product data from the "user" object, found in local storage
for(let i = 0; i<users.length; i++){
    for(key in users[i].product){
        productInfo.push(users[i].product[key])
    }
}

/* this loop finds, concatenates and saves the user full name
(it works on the assumption that there will be just 1 registered user, which is not very
    efficient.)  */
for(let i = 0; i<users.length; i++){
    fullName = users[i].firstName + " " + users[i].lastName;
}

// this event  
let showOrder = (e) =>{
    loading.innerText = "Loading...";
    setTimeout(() => {
        clickCount ++;
        if (users && prices) {
            if (clickCount <= 1) {
                // create the 4 elements for revealing user info
                const tr = document.createElement("tr");
                const tdUser = document.createElement("td");
                const tdProduct = document.createElement("td");
                const tdPrice = document.createElement("td"); 
                // sets user full name and appends it
                let userInfo = document.createTextNode(fullName);
                tdUser.appendChild(userInfo);
                tr.appendChild(tdUser);
                // sets ordered products and append them
                let orders = productInfo.join(", ");
                let productText = document.createTextNode(orders);
                tdProduct.appendChild(productText);
                tr.appendChild(tdProduct);
                console.log(tr);
                // sums total price and appends it
                const sum = prices.reduce((acc, cv) =>{
                    return acc + cv;
                }, 0);
                let totalPrice = document.createTextNode(sum.toFixed(2));
                tdPrice.appendChild(totalPrice);
                tr.appendChild(tdPrice);
        
                // appends everything to the table
                table.appendChild(tr);

                // removes loading text when information appears
                loading.classList.add("loading-close");
                
            } else{
                console.log("NO");
            }
        } else{
            throw new Error("A set of (local) data is missing!");
       }
    }, 2000);
}

try {

} catch (error) {
    console.log(error.message + " " + error);
}
    
console.log(users);

//event that captures button click
button.addEventListener("click", showOrder);
