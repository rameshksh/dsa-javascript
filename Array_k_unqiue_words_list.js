/*
ALGORITHM APPROACH:

1.) Create an "output" ary like this: []

2.) Create a "lookup" object like this: {}

3.) Iterate over the array of items.

    3a.)   If the item does not exist in our "lookup" object
           create the following object in the "lookup" object with {{item}} as key
           {id: item, count: 0}

           *** CRITICAL *** PUSH the object you just created into our "output" array
           by setting reference to the object in the "lookup" object

     3b.)  When you update the count-attribute of the object in the "lookup" object,
           it AUTOMAGICALLY updates in the "output" array!

4.) Sort the "output" array descending on its "count" attribute

5.) Slice to return the "k" top elements of the output array

*/

function mostFrequent(items, k) {
    var lookup = {};
    var output = [];

    for (var i = 0; i < items.length; i++) {
        // Have we seen this item before or not?
        if (!lookup[items[i]]) {
            // No? Ok, create an object in our lookup
            // and set reference to it in our output array
            lookup[items[i]] = {
                "count": 0,
                "id": items[i]
            };
            output.push(lookup[items[i]]);
        }

        // Add one to the "count" attribute in our lookup
        // which adds one to the count attribute in our "output" array
        lookup[items[i]].count++;
    }

    // Sort descending, Slice the top {{k}} results, and return it to the user
    return output.sort((a, b) => {
        return a.count > b.count ? -1 : 1
    }).slice(0, k)
}

console.log(mostFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
