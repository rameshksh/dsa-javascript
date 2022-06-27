/*
Write a program that, given an array A[] of n numbers and another number x, determines whether or not there exist two elements in A[] whose sum is exactly x.

Examples:

Input: arr[] = {0, -1, 2, -3, 1}
        x= -2
Output: Pair with a given sum -2 is (-3, 1)
              Valid pair exists
Explanation:  If we calculate the sum of the output,1 + (-3) = -2

Input: arr[] = {1, -2, 1, 0, 5}
       x = 0
Output: No valid pair exists for 0

*/

// Function to find and print pair
// Time complexity: O(n^2)
function findTwoSum_BruteForce(nums, target) {
    for (let i; i < nums.length; i++) {
        for (let j; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Time complexity: O(n)
function findTwoSum(nums, target) {
    var numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        else {
            numMap.set(nums[i], i);
        }
    }
    return [];
}


// Function to check if array has 2 elements
// whose sum is equal to the given value
function hasArrayTwoCandidates(A, arr_size, sum) {
    var l, r;

    /* Sort the elements */
    A.sort();

    /* Now look for the two candidates in
    the sorted array*/
    l = 0;
    r = arr_size - 1;
    while (l < r) {
        if (A[l] + A[r] == sum)
            return 1;
        else if (A[l] + A[r] < sum)
            l++;
        else // A[i] + A[j] > sum
            r--;
    }
    return 0;
}

let A = [0, -1, 2, -3, 1];
let x = -2;

if (chkPair(A, x)) {
    document.write("<br/>Valid pair exists");
}
else {
    document.write("<br/>No valid pair exists for " + x);
}

if (hasArrayTwoCandidates(A, arr_size, n))
    document.write("Array has two elements" +
        " with the given sum");
else
    document.write("Array doesn't have two" +
        " elements with the given sum");