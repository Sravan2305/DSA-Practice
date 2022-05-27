/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(n) {
    let c= 0
    while(n!=0){
        n=n&1?n-1:n/2
        c++
    }
    return c
};