
/**
 * This program asks the user X ammount of numbers until a 0 is received. After, it stores everything in an array, deletes that last 0
 * and divides the original array into two separate ones, filtering the even from the odd values.
 * Finally it compares both arrays to find out its length and logs who is the winner, taking into account ties too.
 */

var ask;
let numbers = [];

compareNumbers = (a) =>{
    do{
        ask = parseInt(prompt("Enter your number"));
        numbers.push(ask);

    } while(ask != 0);
    numbers.pop();
}

let i = 0;
var evenNumbers = [];
var oddNumbers = [];

calcOddEven = () =>{
    for(i; i<numbers.length; i++){
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        } else if(numbers[i] % 2 !== 0){
            oddNumbers.push(numbers[i]);
        }
    }
}

try {
    compareNumbers(ask);
    calcOddEven();

    if (evenNumbers.length > oddNumbers.length) {
        alert("Evens win");
    } else if(evenNumbers.length < oddNumbers.length){
        alert("Odds win");
    } else if(evenNumbers.length === oddNumbers.length){
        alert("TIE");
    } else{
        throw new Error ("something wrong");
    }

} catch (error) {
    console.log(e.message + " " + error);
}

console.log("even numbers are: " + evenNumbers);
console.log("Odd numbers are: " + oddNumbers);
