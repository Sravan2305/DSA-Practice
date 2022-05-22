/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let res= null;
    if(lists.length<=1) return lists[0]??res
    res = merge(lists[0] , lists[1])
    for(let i =2 ; i<lists.length; i++){
        res = merge(res , lists[i])
    }
    return res
};

function merge( l1 , l2 ){
    if(!l1 || !l2) return l1 || l2 
    let temp = l1 
    let prev = null
    
    while( l1 && l2 ){
       if(l1.val <= l2.val){
           prev = l1
           l1 = l1.next
           continue
       }
       if(prev)
       prev.next = l2
        else{
        let node = l1 
        l1 = l2 
        l2 = node
        temp = l1
        continue
        } 
          
        l2 = l2.next
        prev = prev.next
        
        let node = l1 
        l1 = l2 
        l2 = node
    }
    prev.next = l1 || l2
    return temp
}