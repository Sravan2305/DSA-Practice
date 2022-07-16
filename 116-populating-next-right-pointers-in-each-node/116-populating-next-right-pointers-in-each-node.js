/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let q = [ root ] 
    while(  q[0]  ){
        let len = q.length, row = []
        for( let i=0 ; i<len; i++ ){
            q[i].next = i+1<len ? q[i+1] : null
            if( q[i].left ) row.push(q[i].left)
            if( q[i].right ) row.push( q[i].right )
        }
        q = row
    }    
    return root
};