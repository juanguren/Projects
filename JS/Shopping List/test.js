/*
const item = document.querySelector("#item-submit");
const myform = document.querySelector("#my-form");


console.log(document.querySelector("#header-title").textContent);

let lists = document.getElementsByClassName("list-group-item");

for (let i = 0; i < lists.length; i++){
    lists[i].style.color = "crimson";
}
*/

// Create and append new <li> text to existing list
const itemList = document.querySelector("#items");
console.log(itemList.firstElementChild);


const node = document.createElement("li");
const textn = document.createTextNode("Item 5 (test for adding new items)");
node.classList.add("list-group-item");
node.appendChild(textn);
document.querySelector("#items").appendChild(node);

//item.addEventListener("keydown", runEvent); Logs keys being pressed

function runEvent(x) { // Logs specific value, selected from the list
    //console.log(x.target.value); outputs specific key values
    if (x.target.value == 1) {
        console.log("1 selected");
    } 
    else if(x.target.value == 2){
        console.log("2 selected");
    } 
    else if(x.target.value == 3){
        console.log("3 selected");
    } 
    else{
        console.log("other");
    } 
}

