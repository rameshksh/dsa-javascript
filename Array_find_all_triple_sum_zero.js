//Find all triplets with zero sum

/*
Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

Examples :

Input : arr[] = {0, -1, 2, -3, 1}
Output : (0 -1 1), (2 -3 1)
*/

// function to print triplets with 0 sum
function findTriplets(arr, n) {
    var found = false;

    for (var i = 0; i < n - 1; i++) {
        // Find all pairs with sum equals to
        // "-arr[i]"
        var s = new Set();
        for (var j = i + 1; j < n; j++) {
            var x = -(arr[i] + arr[j]);
            if (s.has(x)) {
                document.write(x + " " + arr[i] + " " + arr[j] + "<br>");
                found = true;
            }
            else
                s.add(arr[j]);
        }
    }

    if (found == false)
        document.write(" No Triplet Found");
}

// Driver code
var arr = [0, -1, 2, -3, 1];
var n = arr.length;
findTriplets(arr, n);
