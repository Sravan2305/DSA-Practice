/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let nmap = new Int8Array(10001), total = 0, best = 0
    for (let left = 0, right = 0; right < nums.length; right++) {
        nmap[nums[right]]++, total += nums[right]
        while (nmap[nums[right]] > 1)
            nmap[nums[left]]--, total -= nums[left++]
        best = Math.max(best, total)
    }
    return best
};
// var maximumUniqueSubarray = function(nums) {
//     if(nums.length == 1 ) return nums[0] 

//     let sums = [nums[0]] , max = 0, j = 0
//     for(let i =1 ; i<nums.length; i++)
//         sums[i] = sums[i-1]+nums[i]
//     const memo = { }
//     for( let i = 0; i<nums.length; i++ ){
//         const latest = memo[nums[i]]
//         if( latest >= j ){
//             j = latest
//         }
//         memo[nums[i]] = i 
//         max = Math.max(max , sums[i] - sums[j]  )
//     }
//     return max + (j==0&&nums.length==[...new Set(nums)].length ? sums[0] : 0  ) 
// };