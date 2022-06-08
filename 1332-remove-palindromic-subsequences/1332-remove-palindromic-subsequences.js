/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
    const len = s.length-1
    for( let i = 0; i<len ; i++ )
        if( s[i] !== s[len-i] )
            return 2
    return 1
};