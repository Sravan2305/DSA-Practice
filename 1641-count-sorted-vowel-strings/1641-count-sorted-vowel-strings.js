/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let count = 0 
    const vowels= "aeiou"
    
    function helper(ind , acc){
        if( acc.length === n ){
            count++
            return 
        }
        for( let i=ind; i<vowels.length; i++ ){
            helper( i ,acc+vowels[i]  )
        }
    }
    helper( 0 , "")
    return count
};