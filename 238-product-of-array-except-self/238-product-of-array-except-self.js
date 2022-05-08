/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const pre = Array(nums.length).fill(1) , suf = Array(nums.length).fill(1) , n = nums.length
    const res = []
    for ( let i=0; i<n ; i++ ){
        pre[i] =   ( pre[i-1]??1) * nums[i]
        suf[n-i-1] = (suf[n-i]??1) * nums[n-i-1]
    }
    for( let i=0; i<n; i++ )
        res.push( (pre[i-1]??1) *( suf[i+1]??1) )
    console.log(pre,suf)
    return res
};