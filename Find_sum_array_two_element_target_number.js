/**** Find
 *
 * Time - O(N)
 * Space  O(N)
 */

function twoSum(arr, target) {
    const numsVisited = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;

        if (numsVisited[complement] !== undefined) {
            result.push(i);
            result.push(numsVisited[complement]);
        }

        numsVisited = i;
    }
    return result;
}