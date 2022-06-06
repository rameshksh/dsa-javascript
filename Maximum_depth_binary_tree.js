/****
 *
 * Max Depth using recursion
 *
 *
 * Time - O(N)
 * Space - O(1) , recusion space - O(N)
 */

function maxDepthTree(root) {
    let maxDepth = 0;

    function dive(node, currentDepth) {

        if (!node) {
            maxDepth = Math.max(currentDepth - 1, maxDepth);
            return;
        }

        dive(node.left, currentDepth + 1);
        dive(node.right, currentDepth + 1);
    }

    dive(root, 1);

    return maxDepth;
}


