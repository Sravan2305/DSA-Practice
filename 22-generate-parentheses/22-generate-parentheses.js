/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res= [ ]
    const maxLen = n*2
    helper( "" ,  0 , 0)
    return res
    
    function helper( acc , open , close ){
        // console.log(acc)
        if(close > open || acc.length >maxLen ) return 
        if( close == open && acc.length == maxLen ) return res.push(acc)
        helper( acc+"(" , open+1 , close )
        helper( acc+")"  , open , close+1)
    }
};