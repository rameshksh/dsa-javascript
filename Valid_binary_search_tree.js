/****
 * Time - O(N)
 * Space - O(1)
 */

function isValidBST(root) {
    let isValid = false;

    function helper(node, min, max) {
        if (!node) return;

        if (
            (min != null) && (node.val <= min) ||
            (max != null) && (node.val >= max)
        ) {
            isValid = false;
            return;
        }

        helper(node.left, min, node.val);
        helper(node.right, node.val, max);

    }

    helper(node, null, null);
    return isValid;
}