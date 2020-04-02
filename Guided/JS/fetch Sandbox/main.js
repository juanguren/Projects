/**
 * TODO :
 * 1. Fetch content from text file inside folder
 *      - Grab data (x)
 *      - Append it to the DOM (x)
 * 2. Fetch content frm JSOn file inside folder
 *      - Grab data (x)
 *      - Append it
 * 3. Fetch content from API
 *      - Grab it using async
 *      - Append it on mulltiple grids
 */


// SECTION Text events

// Instantiate elements
let buttonText = document.querySelector("#getText");
let textResult = document.getElementById("textResult");
let textResultDiv = textResult.parentElement;

// Create event for clicking
buttonText.addEventListener("click", fetchText);

let clickCount = 0; // hehe :)
// Main text event function
function fetchText() {
    clickCount++;
    fetch("text/content.txt")
        .then((res) => res.text())
        .then((data) =>{
            if (clickCount <= 1) {
                console.log(data);
                textResult.innerText = data;
                textResultDiv.classList.add("inputs");
            } else{
                textResultDiv.classList.toggle("not-active");
            }
        });
}

// SECTION JSON events

// Instantiate elements
let buttonJSON = document.querySelector("#getJSON");

// Event
buttonJSON.addEventListener("click", fetchJSON);

function fetchJSON() {
    fetch("JSON/content.json")
        .then(res => res.json())
        .then((data) =>{
            console.log(data);
            for(i in data){
                console.log(data[i].name + " " + data[i].last_name);  
            }
    });
}