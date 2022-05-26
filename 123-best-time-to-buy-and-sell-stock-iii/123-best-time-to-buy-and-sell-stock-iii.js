/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let allowed = 2
    let moves = [1 , 0] , k = 2*allowed
    let dp = new Array(prices.length+1).fill(0).map(x=>new Array(k+1).fill(0))
    for( let i = prices.length-1; i >=0 ; i--  ){
        for( let trans = k-1 ; trans>=0; trans-- ){
            if(trans%2==0)
                dp[i][trans] = Math.max(-prices[i]+dp[i+1][trans+1] , dp[i+1][trans])
            else
                dp[i][trans]= Math.max( prices[i]+dp[i+1][trans+1] , dp[i+1][trans] )
        }
    }
    return dp[0][0]
}
// var maxProfit = function(prices) {
//     const dp = new Array(prices.length).fill(0).map(x=>new Array(2).fill(0).map(x=>new Array(2).fill(0)) )
    
//     return helper( 0 , true , 2)
    
//     function helper( ind, canBuy , k ){
//         // let arg = `${ind}.${canBuy?1:0}.${k}`
//             if( ind >= prices.length || k ==0  ){
//             // dp[ind][canBuy?1:0][k] = 0 
//             return 0
//         }
        
//         if(dp[ind][canBuy?1:0][k]) return dp[ind][canBuy?1:0][k]
    
//         if(canBuy)
//            dp[ind][canBuy?1:0][k] = Math.max( -prices[ind]+helper(ind+1,false,k) , helper(ind+1,true,k) )
//         else
//             dp[ind][canBuy?1:0][k]=Math.max(prices[ind]+helper(ind+1,true,k-1),helper(ind+1,false,k))
//         return dp[ind][canBuy?1:0][k]
//     }  
// };