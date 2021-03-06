const convert = require("./convert");

function evaluate(postfix)
{
    let curr = 0;
    let result = 0;
    let next = 0;
    let top = 0;
    let stack = [];

    // The basis of some of the following code was taken from the RPN.pdf file
    // that was in the modules section of Canvas. It was modified and added
    // to in order to make it properly work.

    for (let i = 0; i < postfix.length; i++) {
        curr = postfix[i];
        if (convert.isOperand(curr)) {
            curr = parseFloat(curr);
        }
        if (!isNaN(curr))
        {
            stack.push(curr);
        }
        else
        {
            top = stack[stack.length - 1];
            stack.pop();
            next = stack[stack.length - 1];
            stack.pop();
        }
        
        switch (curr)
        {
            case '+':
                result = next + top;
                stack.push(result);
                break;
            case '-':
                result = next - top;
                stack.push(result);
                break;
            case '*':
                result = next * top;
                stack.push(result);
                break;
            case '/':
                if(top == 0) {
                    return "You cannot divide by zero!";
                }
                result = next / top;
                stack.push(result);
                break;
            case '%':
                result = next % top;
                stack.push(result);
                break;
            case "POW":
                result = Math.pow(next, top);
                stack.push(result);
                break;
            default:
                break;
        }
    }

    return stack[0];
}

module.exports = {
    evaluate
}