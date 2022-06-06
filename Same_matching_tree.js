/****
 * O(p + q)
 * Space - O(1)
 * Space (p + q) due to recursive calls
 */

function isMatchingTree(p, q) {
    let isMatching = true;

    function checkSameNode(p, q) {
        if (!p && !q) {
            isMatching = false;
            return;
        } else if (!p || !q) {
            isMatching = false;
            return;
        } else if (p.val != q.val) {
            isMatching = false;
            return;
        }

        checkSameNode(p.left, q.left);
        checkSameNode(p.right, q.right);
    }

    checkSameNode(p, q);

    return isMatching;
}