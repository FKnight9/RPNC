function isOperand(ch){
    return (ch >= '0' && ch <= '9');
}

function precedence(ch){
    switch(ch){
        case '+' :
        case '-' : 
            return 1;
        case '*' : 
        case '/' :
        case '%' :
            return 2;
        case '^' : 
            return 3;
        default :
            return 0;
    }
}

function convertPostfix(infix){
    var count = 0;
    var postfix = [];
    var stack = [];
    var par = false;

    while (count < infix.length) {
        ch = infix[count];
        if (isOperand(ch)) {
            let hold = ch;
            let innerCount = count + 1;
            while (count < infix.length) {
                if (isOperand(infix[innerCount])) {
                    hold += infix[innerCount];
                } else if (infix[innerCount] == ' ') {
                    innerCount++
                    continue;
                } else {
                    break;
                }
                innerCount++;
            }
            count = innerCount - 1;
            postfix.push(hold);
        } else if (ch == ' ') {
            count++;
            continue;
        } else {
            if (ch === '(' || ch === ')') {
                if(ch === '('){
                    par = true;
                    stack.push(ch);
                } else {
                    if (par === false) throw "Error in order of parentheses"
                    while(stack[stack.length - 1] !== '('){
                        postfix.push(stack.pop());
                    }
                    stack.pop();
                }
            } else {
                while(stack.length !== 0){
                    if(precedence(stack[stack.length - 1]) >= precedence(ch)){
                        postfix.push(stack.pop());
                    } else {
                        break;
                    }
                }
                stack.push(ch);
            }
        }
        count++;
    }

    while(stack.length !== 0){
        postfix.push(stack.pop());
    }

    return postfix;
}

module.exports = {
    convertPostfix,
    isOperand
}