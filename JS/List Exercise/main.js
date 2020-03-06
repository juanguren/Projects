
// Instatiate elements
var userForm = document.querySelector("#userForm");
var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");

//
var ul = document.querySelector("#showUserList");

class Users{
    constructor(firstName, lastName, email, phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}

var users = [];

// Add event for capturing info

userForm.addEventListener("submit", addUsers);

function addUsers(e) {
    e.preventDefault();
    // text nodes for every user input
    var userInput1 = document.createTextNode(firstName.value);
    var userInput2 = document.createTextNode(lastName.value);
    var userInput3 = document.createTextNode(email.value);
    var userInput4 = document.createTextNode(phone.value);

    newLi1 = document.createElement("li");
    newLi2 = document.createElement("li");
    newLi3 = document.createElement("li");
    newLi4 = document.createElement("li");
    
    newLi1.appendChild(userInput1);
    newLi2.appendChild(userInput2);
    newLi3.appendChild(userInput3);
    newLi4.appendChild(userInput4);

    ul.appendChild(newLi1); 
    ul.appendChild(newLi2); 
    ul.appendChild(newLi3); 
    ul.appendChild(newLi4); 

    console.log(users);

    users.push(new Users(firstName.value, lastName.value, email.value, phone.value));

    localStorage.setItem("users", JSON.stringify(users));   
    //var find = JSON.parse(localStorage.getItem("users"));
    
} 
    
    
    






