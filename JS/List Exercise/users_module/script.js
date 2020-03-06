
// Instatiate elements
var userForm = document.querySelector("#userForm");
var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var success = document.querySelector("#successMessage");

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
        success.innerHTML = "<h4>Successful!</h4>";
        success.classList.add("successMessage");
    // text nodes for every user input
        userInput1 = document.createTextNode(firstName.value);
        userInput2 = document.createTextNode(lastName.value);
        userInput3 = document.createTextNode(email.value);
        userInput4 = document.createTextNode(phone.value);
        // <li> tag for every input field
        newLi1 = document.createElement("li");
        newLi2 = document.createElement("li");
        newLi3 = document.createElement("li");
        newLi4 = document.createElement("li");
        // append text to every <li>
        newLi1.appendChild(userInput1);
        newLi2.appendChild(userInput2);
        newLi3.appendChild(userInput3);
        newLi4.appendChild(userInput4);
        /*ul.appendChild(newLi1); 
        ul.appendChild(newLi2); 
        ul.appendChild(newLi3); 
        ul.appendChild(newLi4); */

        console.log(users);

        users.push(new Users(firstName.value, lastName.value, email.value, phone.value));

        localStorage.setItem("users", JSON.stringify(users));   
        //var find = JSON.parse(localStorage.getItem("users"));
    }
    
} 

try {

} catch (error) {
    console.log(error);
    
}
    
    
    






