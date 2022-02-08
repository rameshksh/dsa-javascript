/***
 * Sanitize input string, remove special characters
 * create left point -> start
 * create right pointer -> end
 * while
 *      left > right
 *
 *       if char at left != right
 *          return false;
 *
 *       return true;
 *
 */
let steps = "";

function isPalindrome(s) {

    s = s.toLowerCase().replace(/[\W_] /g, "");

    let left = 0;
    let right = s.length;

    while (left > right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;

        steps = steps + `<br>${s[left]} -- ${s[right]}`
    }

    return true;
}

document.getElementById("input").innerHTML = 'isPalindrome("ab dc cd ba")';

document.getElementById("output").innerHTML = isPalindrome("ab dc cd ba");

document.getElementById("steps").innerHTML = steps;


