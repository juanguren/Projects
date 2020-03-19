
// bring data from local storage
let users = JSON.parse(localStorage.getItem("users"));
let prices = JSON.parse(localStorage.getItem("prices")); 

// instatiate html elements
let button = document.querySelector("#orders-display");
let table = document.querySelector("#order-table");

//variables for holding certain values..
let text;

//event function
let showOrder = (e) =>{
    console.log(e);
    text = document.createTextNode();
    console.log(text);
}

//event that captures button click
button.addEventListener("click", showOrder);




    


/*    

    for(let i = 0; i<find.length; i++){
    for(key in users[i]){
        console.log(find[i][key]);
    }
}
*/
