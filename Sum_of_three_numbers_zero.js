/*** Sum of triplets equal zero
 *  Given a array of non integer
 *
 *  sort array in asc
 *
 *  return array with sub array of triplets
 *
 *  Time - O(n*2) + O(nLogn)
 *  Space - O(1)
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    res = [];

    for (let i = 0; i < nums.length; i++) {
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                // this loops jumps to next pointer until equals
                while (nums[left] == nums[left - 1]) {
                    left++;
                }
            } else if (nums[left] + nums[right] < target) {
                left++
            } else {
                right--;
            }
        }
    }

    return res;
}

