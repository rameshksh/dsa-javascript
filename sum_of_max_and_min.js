/*
Given an unsorted array A of size N,
the task is to find the minimum and
maximum values that can be calculated by adding exactly N-1 elements.
Input: a[] = {13, 5, 11, 9, 7}
Output: 32 40
*/

function sumOfMaxMin() {
    let arr = [13, 5, 11, 9, 7];
    const n = arr.length;
    let minElement = 0
    let maxElement = 0;

    const result = arr.sort((a, b) => a - b);

    result.forEach((item, index) => {
        if (index < n - 1) {
            minElement = minElement + arr[index];
        }

        if (index > 0 && index < n) {
            maxElement = maxElement + arr[index];
        }
    })

    console.log(minElement, maxElement);
}

sumOfMaxMin();