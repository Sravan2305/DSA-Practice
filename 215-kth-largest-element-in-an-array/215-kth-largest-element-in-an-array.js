/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
      k = nums.length-k;

    function helper(start , end ){
        let  pivot= nums[end] , p = start
        
        for(  let i=start; i<end; i++ ){
            if( nums[i] < pivot ){
                [nums[i] , nums[p]] = [nums[p] , nums[i]]
                p++
            }
        }
        [nums[end] , nums[p]] = [nums[[p]] , nums[end]]
        if( p > k ) return helper( start , p-1)
        else if( p < k ) return helper(p+1 , end)
        return nums[p]
    }
    return helper( 0 , nums.length-1 )
};