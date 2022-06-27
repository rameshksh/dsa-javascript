/*
Given a string, find the longest substring which is palindrome.

For example,

Input: Given string :"forgeeksskeegfor",
Output: "geeksskeeg"

Input: Given string :"Geeks",
Output: "ee"
 */

// This function prints the
// longest palindrome subString
// It also returns the length
// of the longest palindrome

function longestPalSubstr(str) {
    // get length of input String
    var n = str.length;
    // All subStrings of length 1
    // are palindromes
    var maxLength = 1;
    var start = 0;
    var result = "";

    // Nested loop to mark start and end index
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            var flag = 1;
            // Check palindrome
            for (let k = 0; k < parseInt((j - i + 1) / 2); k++) {
                if (str.charAt(i + k) != str.charAt(j - k)) {
                    flag = 0;
                }
            }

            // Palindrome
            if (flag != 0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
                result = str.substring(start, j + 1);
            }
        }
    }

    // return length of LPS
    return result;
}

let str = "Geeks";
console.log(longestPalSubstr(str));

