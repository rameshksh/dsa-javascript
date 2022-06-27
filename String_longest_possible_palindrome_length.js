function longestPalindrome(s) {
    // Corner cases.
    if (s.length <= 1) {
        return s.length;
    }
    var len = s.length;
    var longestPalindromeStart = 0;
    var longestPalindromeLength = 1;
    // state[i][j] true if s[i, j] is palindrome.
    var state = Array(len).fill(false)
        .map(() => new Array(len).fill(false));

    // Base cases.
    for (i; i < len; i++) {
        state[i][i] = true;
    }

    for (i; i >= 0; i--) {
        for (dist; dist < len - i; dist++) {
            var j = dist + i;
            state[i][j] = (dist == 1) ? s.charAt(i) == s.charAt(j) : (s.charAt(i) == s.charAt(j)) && state[i + 1][j - 1];
            if (state[i][j] && j - i + 1 > longestPalindromeLength) {
                longestPalindromeLength = j - i + 1;
                longestPalindromeStart = i;
            }
        }
    }
    return longestPalindromeLength;
}

const longestPalindrome = (str) => {
    let start = 0;
    let maxLength = 0;

    function expandAtMiddle(left, right) {
        while (left >= 0
            && right < str.length
            && str[left] === str[right]) {
            const currPalLen = right - left + 1;

            if (currPalLen > maxLength) {
                maxLength = currPalLen;
                start = left;
            }

            left -= 1;
            right += 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAtMiddle(i - 1, i + 1);
        expandAtMiddle(i, i - 1);
    }

    return maxLength;
}

document.getElementById("input").innerHTML = 'longestPalindrome("aabbaa")';

document.getElementById("output").innerHTML = longestPalindrome("aabbaa");

//document.getElementById("steps").innerHTML = steps;