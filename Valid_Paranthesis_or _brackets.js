let steps = "";

const isValid = (s) => {
    let stack = [];
    let pairHashMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (pairHashMap[char]) {
            stack.push(char);
        } else {
            const topOfStack = stack[stack.length - 1];
            char === pairHashMap[topOfStack]
                ? stack.pop() : stack.push(char);
        }

        steps = steps + `<br>${JSON.stringify(stack)}`
    }

    return stack.length === 0;
}

document.getElementById("input").innerHTML = 'isValid("([{}])")';
document.getElementById("output").innerHTML = isValid("([{}}])");
document.getElementById("steps").innerHTML = steps;