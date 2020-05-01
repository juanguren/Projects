

/**
 * TODO
 *      First Iteration: Display financial info of 3 given assets (two stocks, one crypto). Click event on image
 *      Second Iteration: Test out charts.js for integrating it into the first
 *      Third Iteration: Search queries
        
        
        Tools: 
                1. Use Postman to check both APIs.
                (optional) Integrate https://animejs.com/ (Animation)
 * 
 * @param {string} url 
 */

async function testStock(url) {
    let data = await fetch(url);
    let find = await data.json();
    if (find.status == 404) {
        throw new Error("Something might be wrong with the URL");
    } else{
        let quoteAAPL = find[0];
        console.log(quoteAAPL.symbol + " | " + quoteAAPL.price);
    }
}

try {
    testStock("https://financialmodelingprep.com/api/v3/quote/AAPL");
} catch (error) {
    console.log(error);
}


