/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const res = []
    
    for(let i=0; i<nums.length; i++)
        nums[ Math.abs( nums[i] ) - 1 ]  = Math.abs( nums[ Math.abs(nums[i])-1 ] ) * -1
    for( let i=0; i<nums.length; i++ )
        if( nums[i] > 0 ) res.push(i+1)
    

    
    return res
};