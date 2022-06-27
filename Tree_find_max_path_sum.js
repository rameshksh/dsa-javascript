/*
•	"Given a non-empty binary tree, find the maximum path sum.
    For this problem, a path is defined as any sequence of nodes from some
    starting node to any node in the tree along the parent-child connections.
     The path must contain at least one node and does not need to go through
      the root."

      Logic

For each node there can be four ways that the max path goes through the node:
1. Node only
2. Max path through Left Child + Node
3. Max path through Right Child + Node
4. Max path through Left Child + Node + Max path through Right Child

Time Complexity: O(n) where n is number of nodes in Binary Tree.

*/

class Node {
    constructor(item) {
        this.left = null;
        this.right = null;
        this.data = item;
    }
}

let val;

// Root of the Binary Tree
let root;

// This function returns overall maximum path sum in 'res'
// And returns max path sum going through root.
function findMaxUtil(node) {

    // Base Case
    if (node == null)
        return 0;

    // l and r store maximum path sum going through left and
    // right child of root respectively
    let l = findMaxUtil(node.left);
    let r = findMaxUtil(node.right);

    // Max path for parent call of root. This path must
    // include at-most one child of root
    let max_single = Math.max(Math.max(l, r) + node.data, node.data);

    // Max Top represents the sum when the Node under
    // consideration is the root of the maxsum path and no
    // ancestors of root are there in max sum path
    let max_top = Math.max(max_single, l + r + node.data);

    // Store the Maximum Result.
    val = Math.max(val, max_top);

    return max_single;
}

// Returns maximum path sum in tree with given root
function findMaxSum(node) {

    // Initialize result
    // int res2 = Integer.MIN_VALUE;
    val = Number.MIN_VALUE;

    // Compute and return result
    findMaxUtil(node);

    return val;
}

root = new Node(10);
root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);

console.log("Max path sum is : " + findMaxSum(root));