/*
A starting point would never be on ‘to’ side of a ticket.
Once we find the starting point, we can simply traverse the given map to print itinerary in order.
 Following are steps.

1) Create a HashMap of given pair of tickets.  Let the created
   HashMap be 'dataset'. Every entry of 'dataset' is of the form
   "from->to" like "Chennai" -> "Banglore"

2) Find the starting point of itinerary.
     a) Create a reverse HashMap.
        Let the reverse be 'reverseMap'
        Entries of 'reverseMap' are of the form "to->form".
        Following is 'reverseMap' for above example.
        "Banglore"-> "Chennai"
        "Delhi"   -> "Bombay"
        "Chennai" -> "Goa"
        "Goa"     ->  "Delhi"

     b) Traverse 'dataset'.  For every key of dataset, check if it
        is there in 'reverseMap'.  If a key is not present, then we
        found the starting point. In the above example, "Bombay" is
        starting point.

3) Start from above found starting point and traverse the 'dataset'
   to print itinerary.

All of the above steps require O(n) time so overall time complexity is O(n).

*/

function printItinerary(dataSet) {
    // To store reverse of given map
    let reversemap = new Map();

    // To fill reverse map, iterate through the given map
    for (const [key, value] of dataSet)
        reversemap.set(value, key);

    // Find the starting point of itinerary
    let start = "";

    for (const key of dataSet.keys()) {
        if (!reversemap.has(key)) {
            start = key;
            break;
        }
    }

    // If we could not find a starting point, then something wrong with input
    if (start.length == 0) {
        console.log("Invalid Input");
        return;
    }

    // Once we have starting point, we simple need to go next,
    //next of next using given hash map
    let it = start;
    while (dataSet.has(it)) {
        console.log(it + "->" + dataSet.get(it));
        it = dataSet.get(it);
    }
}

// driver code

let dataSet = new Map();
dataSet.set("Chennai", "Banglore");
dataSet.set("Bombay", "Delhi");
dataSet.set("Goa", "Chennai");
dataSet.set("Delhi", "Goa");

printItinerary(dataSet);