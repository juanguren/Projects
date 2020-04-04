/**
 * TODO :
 * 1. Fetch content from text file inside folder
 *      - Grab data (x)
 *      - Append it to the DOM (x)
 * 2. Fetch content frm JSOn file inside folder
 *      - Grab data (x)
 *      - Append it (x)
 *      - Remove the "undefined" message
 *      - Use catch or "new Promise" for error handling.. (look for the best)
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
                textResultDiv.classList.toggle("inactive");
            }
        });
}

// SECTION JSON events

// Instantiate elements
let buttonJSON = document.querySelector("#getJSON");
let jsonSection = document.querySelector(".json-data");
let jsonUl = jsonSection.children;

let clickCount1 = 0;

// Event TODO Fix "undefined"
buttonJSON.addEventListener("click", fetchJSON);

function fetchJSON() {
    clickCount1++;
    return new Promise((res, rej) =>{
        fetch("JSON/content.json")
        .then(res => res.json())
        .then((data) =>{
            if (clickCount1 <= 1) {
                let output = "";
            data.forEach((user) =>{
                output +=
                `<ul>
                    <li>${user.name + " " + user.last_name}</li>
                    <li><a href = "">${user.website}</a></li>
                </ul>`;
            });
            jsonSection.innerHTML = output;
            } else{
                rej("More than one click detected");
                Array.from(jsonUl).forEach((item) =>{
                    item.classList.toggle("inactive");
                })
            }
        });
    }).catch((err) =>{
        console.log(err);
    });
}

// SECTION External API

// instantiate elements
let buttonAPI = document.getElementById("getAPI");

// Event
buttonAPI.addEventListener("click", fetchAPI);

function fetchAPI() {
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((search) => search.json())
            .then((data) => {
                let filter = data.filter(c =>
                    c.userId === 1)
            })
    }, 500);
}