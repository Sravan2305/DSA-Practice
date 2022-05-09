/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const words = ["","" ,"abc" , "def" , "ghi" , "jkl" , "mno" , "pqrs", "tuv" , "wxyz" ]
    
    const res =[ ] , n = digits.length
    
    function getWords(s , index , acc =""){
        if( index >= s.length  ) return + ""
        
        const word = words[ +s[index] ]
        
        for( let i=0; i<word.length ; i++ )
        {
            let newWord = acc+word[i]
            if(newWord.length === n) res.push(newWord)
            getWords(s , index+1 , newWord)
        }
        
    }
    getWords(digits , 0)
    return res
};