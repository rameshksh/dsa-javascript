function removeNthNodeFromLast(head, n) {
    const dummyHead = { next: head }
    let slow = dummyHead;
    let fast = dummyHead;

    // Move fast N node ahead of last node

    for (let index = 0; index <= n; index++) {
        fast = fast.next;
    }

    // Move slow  and fast up one node at a time until fast is last node

    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummyHead.next;
}