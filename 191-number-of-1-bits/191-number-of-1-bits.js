/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
        let c = 0 , mask = 1
    for(let i=0; i<32; i++){
        if( mask & n ) c++
        mask<<=1
        // console.log(mask)
    }
    return c
};