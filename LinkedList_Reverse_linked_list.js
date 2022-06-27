/****
 * time O(N)
 * Space O(1)
 */

function reverseLinkedList(head){
    let current = head;
    let prev = null;

    while(current){
        let temp = current.next;

        //change direction
        current.next = prev;

        //move prev and current by 1
        prev = current;
        current = temp;

    }

    return prev;

}