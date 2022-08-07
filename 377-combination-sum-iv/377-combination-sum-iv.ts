
// function combinationSum4(nums: number[], target: number): number {
//     const memo ={}
//     function helper( acc ){
//         if( memo[acc] ) return memo[acc]
//         if( acc === target  ) return 1
//         else if( acc > target  ) return 0 
//         let count = 0 
//         for( let i=0; i<nums.length; i++ ){
//             let res =helper( acc+nums[i] )
//             memo[acc+nums[i]] = res
//             count+=res
//             }
//         return count
//     }
//     return helper(0)
// };


function combinationSum4(nums: number[], target: number): number {
const dp = Array(target+1).fill(0)
dp[0] = 1
for( let i=1 ; i<= target ; i++  ){
    for(let val of nums){
        if( i-val >= 0 )
            dp[i] +=dp[i-val]
    }
}   
    return dp[target]
};