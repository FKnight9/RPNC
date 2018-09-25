function isOperand(ch){
    return (ch >= '1' && ch <= '9');
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
    var postfix = "";
    var stack = [];
    var par = false;

    while (count < infix.length) {
        ch = infix[count];
        if (isOperand(ch)) {
            postfix += ch;
        } else {
            if (ch === '(' || ch === ')') {
                if(ch === '('){
                    par = true;
                    stack.push(ch);
                } else {
                    if (par === false) throw "Error in order of parentheses"
                    while(stack[stack.length - 1] !== '('){
                        postfix += stack.pop();
                    }
                    stack.pop();
                }
            } else {
                while(stack.length !== 0){
                    if(precedence(stack[stack.length - 1]) >= precedence(ch)){
                        postfix += stack.pop();
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
        postfix += stack.pop();
    }

    return postfix;
}

module.exports = {
    convertPostfix
}