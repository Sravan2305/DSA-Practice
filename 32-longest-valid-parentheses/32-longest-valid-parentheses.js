/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let dp = new Array(s.length).fill(0)
    let max = 0
    for(let i =1; i<s.length; i++){
        if(s[i]==")"){
            if(s[i-1]=="(")
                dp[i] = (i-2) >= 0 ? (dp[i-2] + 2) : 2
            else if( i-dp[i-1]-1 >= 0 && s[i-dp[i-1]-1] == '(' )
                dp[i] =dp[i-1] + 2 + ((i-dp[i-1]-2 >= 0)?dp[i-dp[i-1]-2]:0);
                
        }
        max  = Math.max(max , dp[i])
    }
    console.log(dp)
    return max
};