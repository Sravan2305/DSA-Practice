/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0 , n = nums.length
    if(n==1) return true
    for(let i=0; i<n && max>=i ; i++)
        {
            max = Math.max(max,i+nums[i])
            if(max>=n-1) return true
        }
    return false
};