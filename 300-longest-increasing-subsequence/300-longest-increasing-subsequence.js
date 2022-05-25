/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(arr) {
//     const dp = new Array(nums.length).fill(0)
//     let globalMax = 0
//     for( let i = 0 ; i<nums.length; i++ ){
//         let max = 0 
//         for( let j = 0; j<i ; j++ ){
//             if( nums[j] < nums[i] )
//             max = Math.max( max , dp[j] )
//         }
//         dp[i] = max+1
//         globalMax = Math.max(globalMax , dp[i])
//     }
//     return globalMax
    
        let dp = new Array(arr.length).fill(0) , max = 0
    for(let i = 0; i<arr.length; i++){
        let res = 0
        for(let j = 0; j<i; j++){
            if(arr[j]<arr[i]){
                res = Math.max(res , dp[j])
            }
        }
        dp[i] = res+1
        max = Math.max(max ,dp[i])
    }
    console.log(dp)
    return max
};