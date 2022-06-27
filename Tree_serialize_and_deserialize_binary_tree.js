// A binary tree Node has key, pointer to left and right
// * children
class TreeNode {
    val = 0;
    left = null;
    right = null;
    constructor(x) {
        this.val = x;
    }
}
// Encodes a tree to a single string.
function serialize(root) {
    if (root == null) {
        return null;
    }

    var l = [];
    var s = [];

    s.push(root);

    while (!(s.length == 0)) {
        var t = s.pop();
        // If current node is NULL, store marker
        if (t == null) {
            (l.push("#") > 0);
        }
        else {
            // Else, store current node and recur for
            // its children
            (l.push("" + t.val) > 0);
            s.push(t.right);
            s.push(t.left);
        }
    }
    return String.join(",", l);
}

t = 0;
// Decodes your encoded data to tree.
function deserialize(data) {
    if (data == null) {
        return null;
    }
    t = 0;
    var arr = data.split(",");
    return helper(arr);
}

function helper(arr) {
    if (arr[t] == "#") {
        return null;
    }
    // create node with this item and recur for children
    var root = new TreeNode(Integer.parseInt(arr[t]));
    t++;
    root.left = helper(arr);
    t++;
    root.right = helper(arr);
    return root;
}

// A simple inorder traversal used for testing the
// constructed tree
function inorder(root) {
    if (root != null) {
        inorder(root.left);
        console.log(root.val + " ");
        inorder(root.right);
    }
}
// Driver program to test above functions
function main(args) {
    // Let us construct a tree shown in the above figure

    root = new TreeNode(20);
    root.left = new TreeNode(8);
    root.right = new TreeNode(22);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(12);
    root.left.right.left = new TreeNode(10);
    root.left.right.right = new TreeNode(14);

    console.log("Serialized view of the tree:");
    var serialized = serialize(root);
    console.log(serialized);

    // Let us deserialize the stored tree into root1
    var t = deserialize(serialized);
    console.log("Inorder Traversal of the tree constructed from serialized String:");
    inorder(t);
}

main([]);