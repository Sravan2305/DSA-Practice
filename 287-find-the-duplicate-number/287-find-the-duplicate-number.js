/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i=0 ;
    for( ; i<nums.length; i++ ){
       if( nums[ Math.abs(nums[i])-1 ] < 0  ) return Math.abs(nums[i])
        else nums[Math.abs(nums[i]) -1 ] *= -1 
    }
    return i 
};