/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n==0) return [0]
    const dp = new Array(n+1).fill(0)
    dp[0]=0
    dp[1]=1
    for( let i=2; i<=n;i++ ){
        dp[i] = dp[Math.floor(i/2)] + ( i%2 ? 1 : 0 )
    }
    return dp
};