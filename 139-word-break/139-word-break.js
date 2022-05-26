/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for(let i=0; i<s.length; i++){
        if( dp[i] == true ) {
            for( let word of wordDict ){
                if( s.slice(i,i+word.length) == word )
                    dp[i+word.length] = true
            }
        }
    }
    return dp[s.length]
}
// var wordBreak = function(s, wordDict) {
    
//     const memo  = {} , dp = {}
//     wordDict.forEach(word=>memo[word] = true)
    
//     function helper(ind , acc){
//         const arg = acc
//         if( dp[arg] ) return dp[arg]
//         if(ind==s.length && acc == s){
//             dp[arg] = true
//             return true
//         }
//         if(ind>=s.length){
//             dp[arg] = false
//             return false
//         }
//         let temp ="", bool=false
//         for(let i = ind ; i<s.length; i++){
//             temp+=s[i]
//             if(memo[temp]) bool=helper(i+1,acc+temp)

//             if(bool){
//                 dp[arg+temp] = bool
//                 return bool
//             }
//             // else bool = false
//         }
//         dp[arg] = bool
//         return bool
//     }
//     return helper(0,"")
// };