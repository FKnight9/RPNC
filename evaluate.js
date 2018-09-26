function evaluate(postfix)
{
    var curr = 0;
    var result = 0;
    var next = 0;
    var top = 0;

    while (postfix != "")
    {
        curr = postfix.Front();
        postfix.DeQueue();
        if (!isNaN(curr))
        {
            stack.Push(curr);
        }
        else
        {
            top = stack.Top();
            stack.Pop();
            next = stack.Top();
            stack.Pop();
        }

        switch (curr)
        {
            case '+':
                result = next + top;
                stack.Push(result);
                break;
            case '-':
                result = next - top;
                stack.Push(result);
                break;
            case '*':
                result = next * top;
                stack.Push(result);
                break;
            case '/':
                result = next / top;
                stack.Push(result);
                break;
            case '%':
                result = next % top;
                stack.Push(result);
                break;
            case 'POW':
                result = Math.pow(next, top);
                stack.Push(result);
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