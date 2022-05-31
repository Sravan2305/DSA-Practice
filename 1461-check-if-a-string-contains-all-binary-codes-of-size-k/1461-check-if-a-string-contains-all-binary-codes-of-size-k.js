/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let temp = [] , memo= new Set()
    for(let char of s){
        temp.push(char)
        if(temp.length == k){
            memo.add(temp.join(""))
            temp.shift(0)
        }
    }
    return memo.size == Math.pow(2 , k)
};