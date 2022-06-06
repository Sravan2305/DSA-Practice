/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    
    let first = headA , second = headB
    while( first !== second ){
        first = first === null ? headB : first.next
        second = second===null ? headA :  second.next
    
    }
    // console.log(first , second )
    return first
};
