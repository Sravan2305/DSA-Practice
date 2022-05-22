/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
     
    let n = s.length , res = 0
    
    for(let i = 0 ; i<n; i++){
        res+=checkPalindrome(s , i , i, n )+checkPalindrome(s , i , i+1, n )
    }
    return res
};

function checkPalindrome(s , start , end , len){
    let res = 0 ;
    while(start>=0 && end<len && s[start]==s[end]){
        res++
        start--,
        end++
    }
    return res
}