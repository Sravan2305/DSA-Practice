/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const memo = {}
    return topDown(text1 , text2 , 0 , 0 , memo)    
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