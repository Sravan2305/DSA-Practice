/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const memo = {}
    // return topDown(text1 , text2 , 0 , 0 , memo)    
    return bottomUp(text1 , text2)
};

function topDown(s1 , s2 , i , j, memo){
    const arg = ""+i+j
    if(memo[arg]) return memo[arg]
    if( !s1[i] || !s2[j]){
        memo[arg] =   0 
    return memo[arg]

    }
    
    if( s1[i] == s2[j] ){
        memo[arg] =  1+topDown(s1,s2,i+1,j+1,memo)
        return memo[arg]
    }
    memo[arg] = Math.max(topDown(s1,s2,i+1,j,memo) ,topDown(s1,s2,i,j+1,memo))
    
    return memo[arg]
}

function bottomUp(s1 , s2){
        let dp = new Array(s1.length+1).fill(0).map(x=> new Array(s2.length+1).fill(0))
    for(let i = 1 ; i<=s1.length; i++){
        for(let j =1 ; j<=s2.length; j++){
            if(s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1]+1
            else dp[i][j] = Math.max( dp[i][j-1], dp[i-1][j] )
        }
    }
    return dp[s1.length][s2.length]
}