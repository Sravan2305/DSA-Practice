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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let max = 0 , maxDepth = 0
    
    helper(root, maxDepth)
    return max
    function helper( node, depth ){
        if( !node.right && !node.left ){
                    console.log(node.val , depth)
            if( depth>maxDepth ){
                maxDepth = depth
                max = node.val
            }
            else if(depth == maxDepth)
                max+=node.val
            return
        }
        if(node.left)  helper(node.left , depth+1)
        if(node.right)  helper(node.right , depth+1) 

    }
};