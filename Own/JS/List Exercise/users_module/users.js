
/**
 * SECTION USERS MODULE
 */

// Instatiate elements
var userForm = document.querySelector("#userForm");
var success = document.querySelector("#successMessage");

//
var ul = document.querySelector("#showUserList");

class Users{
    constructor(firstName, lastName, email, phone, product = []){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.product = product;
    }
}

var users = [];

var userInput1;
var userInput2;
var userInput3;
var userInput4;

// Add event for capturing info
userForm.addEventListener("submit", addUsers);

function addUsers(e) {
    e.preventDefault();

    if (firstName.value === "" || lastName.value === "" || email.value === "" | phone.value === "") {
        success.innerHTML = "<h5>Unsuccessful</h5>" + `(`+e.message+`)`;
        throw new Error ("Fields are empty");
    } else{
        success.innerHTML = "<h4>Successful! <br> Please order at the PRODUCTS tab </h4>";
        success.classList.add("successMessage"); 

        console.log(users);

        users.push(new Users(firstName.value, lastName.value, email.value, phone.value, ""));

        localStorage.setItem("users", JSON.stringify(users));   
        //var find = JSON.parse(localStorage.getItem("users"));
    } 
} 

try {

} catch (error) {
    console.log(error);
}
    






