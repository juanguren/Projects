/**
 * TODO :
 * 1. Fetch content from text file inside folder
 *      - Grab data (x)
 *      - Append it to the DOM (x)
 * 2. Fetch content frm JSOn file inside folder
 *      - Grab data (x)
 *      - Append it (x)
 *      - Remove the "undefined" message (x)
 *      - Use catch or "new Promise" for error handling.. (look for the best) (x)
 * 3. Fetch content from API
 *      - Grab it using async (x)
 *      - Append it on mulltiple grids (x)
 * 4. Post content from the DOM to an external source
 *      - Capture input values (x)
 *      - Send them via external JSON (x)
 *      - TODO find out errors when sending to local JSON...
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

// Event 
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
let apiSection = document.querySelector(".api-data");
let loading = document.getElementById("loading-message");

clickCount2 = 0;

// Event
buttonAPI.addEventListener("click", fetchAPI);

async function fetchAPI() {
    clickCount2++;
    loading.innerText = "Loading...";
    return await new Promise((res, rej) =>{
        if (clickCount2 <= 1) {
            setTimeout(() => {
                let output = "";
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then((search) => search.json())
                    .then((data) => {
                        let filter = data.filter(c =>
                            c.userId === 1)
                            for(i in filter){
                                output += 
                                `<ul>
                                    <li>${filter[i].id}</li>
                                    <li><h2>${filter[i].title}</h2></li>
                                    <li>${filter[i].body}</li>
                                </ul>`;
                                console.log(filter[i].userId);
                            }
                        apiSection.innerHTML = output; 
                        loading.style.display = "none"; 
                        res("Everything OK");  
                    });
            }, 1000);
        } else{
            rej("Two clicks recognized");
            apiSection.classList.toggle("inactive");
        }
    }).then((resolve) =>{
        console.log(resolve);
    }).catch((reject) =>{
        console.log(reject);
    });
}

// SECTION Post 

// Instantiate elements
let postBtn = document.getElementById("post");
let postSection = document.querySelector(".inputs");

let form = document.getElementById("formPost");
let clickCount3 = 0;

post.addEventListener("click", showPost);

function showPost() {
    clickCount3++;
    postSection.classList.toggle("inactive");
    if (clickCount3 > 1) {
        location.reload();
    }
}

form.addEventListener("submit", sendInfo);

function sendInfo(e) {
    e.preventDefault();
    let title = document.querySelector("#titleSubmit");
    let body = document.querySelector("#bodySubmit");
    let h3 = document.getElementById("post-message");

    h3.innerText = "Loading..."
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title.value, 
            body: body.value
        })
    }).then(res => res.json())
      .then((data) =>{
          h3.style.color = "silver";
          h3.innerText = "Success!";
          title.value = "";
          body.value = "";
          console.log(data);
      })
    }, 2000);
    
}

