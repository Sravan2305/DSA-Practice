/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(0)
    let globalMax = 0
    for( let i = 0 ; i<nums.length; i++ ){
        let max = 0 
        for( let j = 0; j<i ; j++ ){
            if( nums[j] < nums[i] )
            max = Math.max( max , dp[j] )
        }
        dp[i] = max+1
        globalMax = Math.max(globalMax , dp[i])
    }
    // console.log(dp)
    return globalMax
};