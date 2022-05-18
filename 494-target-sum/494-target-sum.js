/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0 
    helper( 0  , 0)
    return count 
    
    function helper( ind , sum ){
        if( ind == nums.length  && target == sum  ) return count++
        if(ind == nums.length && target !=sum ) return 
        let posNum  = nums[ind]
        helper(ind+1 , sum+posNum)
        let negNum = -posNum
        helper(ind+1 , sum+negNum )
    }
};