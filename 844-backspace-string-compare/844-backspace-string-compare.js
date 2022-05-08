/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    s+="."
    t+="."
    let first = 0 ,second = 0 , s1 = "" , s2 = ""
    for( let i= s.length-1 ; i>=0 ; i-- ){
        if( s[i] == "#" )
            first++
        else{
            if( first>0 ) first--
            else s1+=s[i]
        }
         
    }
        for( let i= t.length-1 ; i>=0 ; i-- ){
        if( t[i] == "#" )
            second++
        else{
            if( second>0 ) second--
            else s2+=t[i]
        }
    }
    return s1===s2
};