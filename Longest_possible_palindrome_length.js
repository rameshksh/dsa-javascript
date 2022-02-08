
const longestPalindrome = (str) => {
    let start = 0;
    let maxLength = 0;

    function expandAtMiddle(left, right) {
        while (left >= 0
            && right < str.length
            && str[left] === str[right]) {
            const currPalLen = right - left + 1;

            if(currPalLen > maxLength){
                maxLength = currPalLen;
                start = left;
            }

            left -= 1;
            right += 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAtMiddle(i -1, i+1);
        expandAtMiddle(i, i-1);
    }

    return maxLength;
}

document.getElementById("input").innerHTML = 'longestPalindrome("aabbaa")';

document.getElementById("output").innerHTML = longestPalindrome("aabbaa");

//document.getElementById("steps").innerHTML = steps;