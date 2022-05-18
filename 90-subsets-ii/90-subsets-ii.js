/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b)
    const res = []
    
    helper(0 , [] ,false)
    return res
    function helper(ind , acc, include){
        if(ind >= nums.length) return res.push(acc)

        helper(ind+1 , [...acc] , false)
        
        if( ind>0 && nums[ind] == nums[ind-1] && !include ){
            return
        }
        
        helper(ind+1 , [...acc , nums[ind]] , true)
    }
};