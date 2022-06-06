class Node {
    constructor(item) {
      this.data = item;
      this.left = this.right = this.nextRight = null;
    }
  }

  let root;

  function getValuesByLEvel(root) {
    let output = [];
    let q = [
      [root, 0]
    ]
    let i = 0;

    while (i < q.length) {
      let poppedNode = q[i][0];
      let level = q[i][1];
      i += 1;

      if (poppedNode == null) {
        continue;
      } else {
        if (output.length <= level) {
          output.push([]);
        }

        output[level].push(poppedNode.data);
        q.push([poppedNode.left, level + 1]);
        q.push([poppedNode.right, level + 1]);
      }
    }
    return output;
  }

  // Driver program to test above functions

  root = new Node(5);
  root.left = new Node(10);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(6);
  root.left.left.right = new Node(8);
  root.left.right.left = new Node(9);
  root.left.right.right = new Node(1);

  root.right.right = new Node(7);
  root.right.right.left = new Node(2);
  // Populates nextRight pointer in all nodes
  console.log(getValuesByLEvel(root));
