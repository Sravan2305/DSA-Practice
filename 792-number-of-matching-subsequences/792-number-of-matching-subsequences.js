/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */


var numMatchingSubseq = function(s, words) {
    let ans = 0 
        for( let word of words ){
            let ind = -1, found = true
            for( let char of word ){
                let curr = s.indexOf( char , ind+1 )
                if( curr <= ind ){
                    found = false
                    break
                }
                ind = curr
            }
            if(found) ans++
        }
    return ans
};