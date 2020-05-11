
/**
 * TODO
 *      
*/

let searchInput = document.getElementById("send-ticker");
let searchValue = document.getElementById("input-asset");

searchInput.addEventListener("submit", getTickerResults);

function getTickerResults(e) {
    e.preventDefault();
    let searchQuery = searchValue.value;
    fetchSearchResults(searchQuery);

    searchValue.value = "";
}

async function fetchSearchResults(query) {
    let data = await fetch(`https://financialmodelingprep.com/api/v3/quote/${query}`);
    let response = await data.json();
    if (data.ok) {
        let objectResponse = response[0];
        appendResults_DOM(objectResponse);
    } else{
        console.log("Data wasn´t fetched correctly");
    }
}

let resultsDiv = document.querySelector(".ticker-information");

function appendResults_DOM(data) {
    for(let i = 1; i<=5; i++){
        let resultContainer = document.createElement("div");
        resultContainer.classList.add("results-container");

        let searchTitle = document.createElement("h2");
        let searchResult = document.createElement("h2");

        resultContainer.appendChild(searchTitle);
        resultContainer.appendChild(searchResult);
        console.log(resultContainer);
    }
}




