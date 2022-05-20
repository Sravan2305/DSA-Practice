/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
 if( nums.length == 1 ) return nums[0]
 let first = nums[0] , second = Math.max(nums[0] , nums[1])
    
    for( let i=2; i<nums.length;i++ ){
        let temp = second 
        second = Math.max( second , first+nums[i] )
        first = temp
    }
 
    return second
    
};