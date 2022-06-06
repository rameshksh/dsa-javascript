/***
 *
 *  Using recurstion
 *
 * T O(N)
 *
 * Space O(1)
 *
 */

function inverseTree(root){

    function helper(node){

        if(!node) return;

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        helper(node.left);
        helper(node.right);
    }

    helper(root);

    return root;
}