let steps = "";

/****
 *
 * Loop through words in array
 * each word -> split() -> sort() -> join()
 * add key to hashmap object
 * push all the words against key
 */

function groupedAnagrams(strs) {
    let grouped = {};

    for (let index = 0; index < strs.length; index++) {
        const word = strs[index];
        const key = word.split('').sort().join();

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(word);

        steps = steps + `<br>${JSON.stringify(grouped)}`
    }

    return Object.values(grouped);

}

document.getElementById("input").innerHTML = 'groupedAnagrams(["ate", "sd", "tea", "eta"]';
document.getElementById("output").innerHTML = groupedAnagrams(["ate", "sd", "tea", "eta"]);
document.getElementById("steps").innerHTML = steps;