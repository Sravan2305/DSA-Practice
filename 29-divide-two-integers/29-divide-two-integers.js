/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(A, B) {
    let ans = 0
    if (A === -2147483648)
     if (B === -1) return 2147483647

    ans += Math.floor(Math.exp(Math.log(Math.abs(A)) - Math.log(Math.abs(B))))
    return A > 0 === B > 0 ? ans : -ans
};