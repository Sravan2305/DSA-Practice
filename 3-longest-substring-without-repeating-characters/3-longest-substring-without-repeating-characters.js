/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let memo = {} , left = 0 
    return [...s].reduce((max , char , ind)=>{
        
        // if( memo[char] )
        //     left = Math.max( memo[char]+1 , left )
        
        const lastSeenIndex = memo[char];
        const windowContainsCharacter = lastSeenIndex >= left;
        left = windowContainsCharacter ? lastSeenIndex + 1 : left;
        
        memo[char] = ind
        return Math.max(max , ind-left+1)
    },0)
};