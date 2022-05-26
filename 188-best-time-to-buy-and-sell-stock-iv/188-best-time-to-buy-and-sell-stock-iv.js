/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(allowed, prices) {
  
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
};