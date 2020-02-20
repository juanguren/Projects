
// Instatiate elements
const btn = document.querySelector("#btn-js");
const h4 = document.querySelector("#confirm");

// Text node for the button clicked confirmation
let message = document.createTextNode("Confirmed!");

btn.addEventListener("click", clickRefresh);

function clickRefresh(a) {
    a.preventDefault();
    location.reload();
    h4.appendChild(message);
    h4.classList.add("msg-text");
}

