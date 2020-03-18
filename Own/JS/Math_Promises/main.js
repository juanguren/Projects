
/**
 * This program asks for a number via prompt.
Through a promise chain it shows the result of certain operations, in order:
● Sum by itself
● Squared by itself
● Square root
● Factorial
 */

let sum = 0;
let squared;
let root;

let mathCalculations = (number) =>{

    let promiseSum = new Promise((resolve, reject) =>{
        console.log("Loading..");
        setTimeout(() => {
            if(number){
                sum = number + number;
                console.log("Sum is: " + sum);
                resolve("Sum promise completed");
            } else{
                reject("Sum promise is not resolved");
                throw new Error("No number was entered");
            }
        }, 2000);
    });
    
    let promiseSquare = new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (sum) {
                squared = Math.pow(number, number);
                console.log(`${number } squared by itself is ${ squared}`);
                resolve("Square promise is resolved");
            } else if (isNaN(promiseSum)) {
                reject("Square number was not resolved");
                throw new Error(promiseSum.name + " was not fulfilled");   
            }
        }, 4000);
    });
    
    let promiseRoot = new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (squared) {
                root = Math.sqrt(number, 2);
                console.log(`The square root of ${number} is ${ root}`);
                resolve("Root promise is resolved");
            }  else{
                reject("Root promise was not resolved");
                throw new Error(promiseSquare.name + " was not fulfilled");
            }
        }, 7000);
    });
    
    let promiseFactorial = new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (root) {
                let factorial = (param) =>{
                    for (let i = param - 1; i >= 1; i--) {
                        param *= i;
                        if (i === 1) {
                            console.log(`The factorial of ${number} is ${ param}`);
                        }
                    }
                }
                factorial(number); // number is the prompt
                resolve("Factorial promise is resolved");
            } else{
                reject("Factorial promise was not resolved");
                throw new Error(promiseFactorial.name + " was not fulfilled");
            }
        }, 9000);
    });
    
    promiseSum.then((first) =>{
        console.log(first);
        return promiseSquare;
    }).then((second)=>{
        console.log(second);
        return promiseRoot;
    }).then((third) =>{
        console.log(third);
        return promiseFactorial;
    }).then((fourth)=>{
        console.log(fourth);
    }).catch((error)=>{
        console.log("Error: " + error);
    });

}

try{
    mathCalculations(parseInt(prompt("Enter your number")));
}
catch(e){
    console.log(e);
}