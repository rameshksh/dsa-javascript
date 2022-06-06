/*** Container with most water
 *
 *  Solved using two pointers
 *  calulating area for given start end height
 *  storing maxArea
 *
 *   redcing start and end until equal
 *
 */

function containerWithMostWater(heights) {
    let maxArea = 0;
    let start = 0;
    let end = heights.length - 1;

    // loop through array until height of contain equals
    while (start < end) {
        // calcualte area take min height * diff of array index
        const currentArea = Math.min(heights[start], heights[end]) *
            (end - start);

        maxArea = Math.max(currentArea, maxArea);

        if (heights[start] < heights[end]) {
            start++;
        } else {
            end--;
        }
    }

    return maxArea;
}