/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res=[] , target = 0
    if(nums.length<3 ) return res
    nums.sort((a,b)=>a-b)
    
    for(let i=0; i<nums.length-2; i++){
        if(nums[i]>target) return res
        if(i>0 && nums[i]==nums[i-1]) continue
        
        let k = nums.length-1 , j = i+1
        
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k]
            if(sum==target) {
                res.push( [nums[i],nums[j],nums[k] ] )
                while(nums[j]==nums[j+1])j++
                while(nums[k]==nums[k-1])k--
                j++
                k--
            }
            else if(sum<target)
                j++
            else 
                k--
            
        }
    }
    return res
};