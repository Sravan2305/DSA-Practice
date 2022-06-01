/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.reduce((acc , num, ind , arr)=>{
        arr[ind] = acc+num
        return arr[ind]
    })
    return nums
};