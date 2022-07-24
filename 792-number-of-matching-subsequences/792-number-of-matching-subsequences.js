/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
// var numMatchingSubseq = function(s, words) {
//     let matches = 0;
//     for (const word of words) {
//         let lastIndex = -1;
//         let match = 0;
//         for (let i = 0; i < word.length; i++) {
//             const char = word.charAt(i);
//             const currentIndex = s.indexOf(char, lastIndex + 1);
//             if (currentIndex > lastIndex) {
//                 match++;
//                 lastIndex = currentIndex;
//             } else {
//                 break;
//             }
//         }
//         if (match == word.length) {
//             matches++;
//         }
//     }
//     return matches;
// };

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