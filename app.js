const convert = require("./convert");
const evaluate = require("./evaluate");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log("Welcome to the Reverse Polish Notation Calculator!");
console.log("This version supports multidigit numbers and all these operators: +, -, *, /, %, and ^ \n");

let waitForUserInput = function () {
    rl.question("Please enter an infix math problem or enter quit to exit the program\n", (input) => {
        if (input == "quit") {
            return rl.close();
        }
        let postfix = convert.convertPostfix(input);
        console.log("Postfix: " + postfix + "\n");
        console.log("Answer: " + evaluate.evaluate(postfix));
        waitForUserInput();
    });
}

waitForUserInput();