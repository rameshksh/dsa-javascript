/****
 * Loop through both list until finished
 * Check for value of l1 and l2
 * if l1.val > l2 val
 *      currentNode -> v1
 * else
 *      currentNOde -> v2
 *
 * return dummyNode.next
 */

function mergetwoList(l1, l2) {
    let dummyHead = { next: null };
    let current = dummyHead;

    while (l1 && l2) {
        if (l1.val > l2.val) {
            current.next = l1;
            current = current.next;
            l1 = l1.next;
        } else {
            current.next = l2;
            tail = current.next;
            l2 = l2.next;

        }
    }

    current.next = l1 || l2;
    return dummyHead.next;
}