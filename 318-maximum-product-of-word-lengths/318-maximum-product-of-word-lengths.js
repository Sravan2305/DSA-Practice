/**
 * @param {string[]} words
 * @return {number}
 */

var maxProduct = function(words) {
    let max = 0 
    let dp = new Array(words.length).fill(0)
    for(let i = 0 ; i<words.length; i++){
        for(let ch of words[i])
        dp[i] |= 1<<(ch.charCodeAt(0)-"a".charCodeAt(0))
        
        for(let j = 0 ;j <i; j++)
            if( !(dp[i]&dp[j])  )
            max = Math.max( max , words[i].length * words[j].length  )
    }
    // console.log(dp)
    return max
}

// var maxProduct = function(words) {
//     let max = 0
//     for(let i=0; i<words.length;i++){
//         for(let j=0; j<i; j++){
//             let curr = words[i].length* words[j].length 
//             if(max<curr){
//                 if(!lcs(words[i] , words[j]))
//                     max = curr
//             }
//         }
//     }
//     return max
// };
// function lcs(s1 , s2){
//         let dp = new Array(s1.length+1).fill(0).map(x=> new Array(s2.length+1).fill(0))
//     for(let i = 1 ; i<=s1.length; i++){
//         for(let j =1 ; j<=s2.length; j++){
//             if(s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1]+1
//             else dp[i][j] = Math.max( dp[i][j-1], dp[i-1][j] )
//         }
//     }
//     return dp[s1.length][s2.length]
// }