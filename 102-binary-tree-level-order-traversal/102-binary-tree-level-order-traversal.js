/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    helper( root , 0 )
    return res
    
    function helper( node , level ){
        if( !node ) return
        if( !res[level] ) res[level] = [ node.val ]
        else res[level].push( node.val )
        helper( node.left , level+1 )
        helper( node.right, level+1 )
    }
};