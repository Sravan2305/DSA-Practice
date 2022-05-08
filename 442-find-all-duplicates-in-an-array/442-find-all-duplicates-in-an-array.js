/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const res = [] 
    
    for( let i=0; i<nums.length; i++ ){
        if( nums[ Math.abs(nums[i])  -1 ] < 0  ) res.push( Math.abs(nums[i]) )
        else nums[ Math.abs(nums[i])  -1 ] *= -1
    }
    return res
};