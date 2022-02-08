//Find the longest substring with k unique characters in a given string
let steps = "";

// sliding window approach
const findLongestString = (str) => {
    const charMap = {}
    let start = 0;
    let maxLength = 0;

    for(let i = 0; i < str.length; i++){
        const endChar = str[i];

        if(charMap[endChar] >= start){
            start = charMap[endChar] + 1;
        }

        charMap[endChar] = i;
        maxLength = Math.max(maxLength, i - start + 1 );

        steps = steps + `<br>${JSON.stringify(charMap)}`
    }

    return maxLength;
}

document.getElementById("input").innerHTML = 'findLongestString("gsdfgsdgf")';

document.getElementById("output").innerHTML = findLongestString("gsdfgsdgf");

document.getElementById("steps").innerHTML = steps;


