/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let res = 0
    for(let i = 1 ; i<prices.length; i++){
        res += Math.max( 0 , prices[i]-prices[i-1])
    }
    return res
}
// var maxProfit = function(prices) {
//     const n = prices.length , dp = {}
    
//     return helper( 0 , true )

//     function helper(ind , canBuy){
//         let arg = `${ind}.${canBuy}`
        
//         if(dp[arg]>=0) return dp[arg]
        
//         if( ind>=n ){
//             dp[arg] = 0
//             return 0
//         }
//         let ans = 0
//         if(canBuy)
//             ans =  Math.max( -prices[ind]+helper(ind+1,false) , helper(ind+1 , true) )
//         else
//             ans = Math.max( prices[ind]+helper(ind+1, true) , helper(ind+1 , false) )
//         dp[arg] = ans
//         return ans
//     }
// };