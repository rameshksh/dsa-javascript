//Input: arr[]   = {3, 0, 2, 0, 4}
//Output: 7
/*
Method 1 : This is a simple solution to the above problem.

Approach: The idea is to traverse every array element and find the highest bars on the left and right sides. Take the smaller of two heights. The difference between the smaller height and height of the current element is the amount of water that can be stored in this array element.
Algorithm:
Traverse the array from start to end.
For every element, traverse the array from start to that index and find the maximum height (a) and traverse the array from the current index to end, and find the maximum height (b).
The amount of water that will be stored in this column is min(a,b) – array[i], add this value to the total amount of water stored
Print the total amount of water stored.
*/
// Function to return the maximum
// water that can be stored
function maxWater(arr, n) {

    // To store the maximum water that can be stored
    let res = 0;

    // For every element of the array except first and last element
    for (let i = 1; i < n - 1; i++) {

        // Find maximum element on its left
        let left = arr[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }

        // Find maximum element on its right
        let right = arr[i];
        for (let j = i + 1; j < n; j++) {
            right = Math.max(right, arr[j]);
        }

        // Update maximum water value
        res += Math.min(left, right) - arr[i];
    }

    return res;
}

let arr = [0, 1, 0, 2, 1, 0,
    1, 3, 2, 1, 2, 1];
let n = arr.length;

console.log(maxWater(arr, n));


/*
Method 2: This is an efficient solution to the above problem.

Create two arrays left and right of size n. create a variable max_ = INT_MIN.
Run one loop from start to end. In each iteration update max_ as max_ = max(max_, arr[i]) and also assign left[i] = max_
Update max_ = INT_MIN.
Run another loop from end to start. In each iteration update max_ as max_ = max(max_, arr[i]) and also assign right[i] = max_
Traverse the array from start to end.
The amount of water that will be stored in this column is min(a,b) – array[i],(where a = left[i] and b = right[i]) add this value to total amount of water stored
Print the total amount of water stored.
*/



// Method for maximum amount of water
function findWater(arr, n) {
    // initialize output
    let result = 0;

    // maximum element on left and right
    let left_max = 0, right_max = 0;

    // indices to traverse the array
    let lo = 0, hi = n - 1;

    while (lo <= hi) {
        if (arr[lo] < arr[hi]) {
            if (arr[lo] > left_max) {
                // update max in left
                left_max = arr[lo];
            } else {
                // water on curr element =
                // max - curr
                result += left_max - arr[lo];
                lo++;
            }
        } else {
            if (arr[hi] > right_max) {
                // update right maximum
                right_max = arr[hi];
            } else
                result += right_max - arr[hi];
            hi--;
        }
    }

    return result;
}

let arr1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// Driver method to test the above function
document.write("Maximum water that can be accumulated is " + findWater(arr1.length));

function maxWater(height){
    // Stores the indices of the bars
    let stack = []
    // size of the array
    let n = height.length
    // Stores the final result
    let ans = 0

    // Loop through the each bar
    for(let i=0;i<n;i++){
        // Remove bars from the stack
        // until the condition holds
        while(stack.length != 0 && (height[stack[stack.length-1]] < height[i]) ){

            // store the height of the top
            // and pop it.
            let pop_height = height[stack.pop()]

            // If the stack does not have any
            // bars or the popped bar
            // has no left boundary
            if(stack.length == 0)
                break

            // Get the distance between the
            // left and right boundary of
            // popped bar
            let distance = i - stack[stack.length - 1] - 1

            // Calculate the min. height
            let min_height =Math.min(height[stack[stack.length - 1]],height[i])-pop_height

            ans += distance * min_height
        }

        // If the stack is either empty or
        // height of the current bar is less than
        // or equal to the top bar of stack
        stack.push(i)
    }

    return ans
}

// Driver code
let arr3 = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
document.write(maxWater(arr3))
