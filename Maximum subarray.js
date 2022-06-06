/*** Maxium sub array
 *
 *
 */

function maximumSubArray(nums) {
    let dpArr = [nums[0]];
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // which is greater current num or previus index
        dpArr[i] = Math.max(num, num + dpArr[i - 1]);

        max = Math.max(max, dpArr[i]);
    }

    return max;
}

function maximumSubArray(nums) {
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // which is greater current num or previus index
        nums[i] = Math.max(num, num + nums[i - 1]);
        max = Math.max(max, nums[i]);
    }

    return max;
}