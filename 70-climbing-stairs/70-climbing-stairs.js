/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [ 1 , 2 ]
    if( n<=2 ) return dp[ n  - 1 ]
    while( n-- - 2 > 0 )
        {
            dp = [  dp[1] , dp[1]+dp[0]  ]
        }
    return dp[1]
};