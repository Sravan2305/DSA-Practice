/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const memo={}
    function helper(zeroes , ones ,ind){
        const arg = `${zeroes}.${ones}.${ind}`
        
        if( zeroes>m || ones>n || ind == strs.length ) return memo[arg] = 0 
        
        if(memo[arg]) return memo[arg]
        
        const counts = getCounts(strs[ind])
        
        let op1 = zeroes+counts[0] <= m && ones+counts[1] <= n  ? 1+helper(zeroes+counts[0] , ones+counts[1] , ind+1) : 0 
        
        
        let op2 = helper(zeroes,ones,ind+1)
        
        return memo[arg] =  Math.max( op1 , op2 )
    }
    return helper(0 , 0, 0 )
};

function getCounts(s){
    let res = [0 , 0]
    for(let i=0; i<s.length; i++)
        if(s[i] == "0")
            res=[res[0]+1 , res[1]]
        else 
            res= [res[0] , res[1]+1]
    return res
}