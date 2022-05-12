/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    function helper(ind , acc){  
        if( ind >= nums.length ){
           return  res.push( [...acc] )
        }
        for( let i=ind; i<nums.length; i++ ){
            swap(i ,ind ,acc )
            helper( ind+1 , [...acc] )
            swap(i ,ind ,acc )
        }
    }
    helper(0 , nums)
    return res
};

function swap( i , j , arr ){
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t 
}