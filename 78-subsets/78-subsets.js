/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     const res = []
//     function helper(ind , acc){
        
//         if(ind == nums.length) {res.push(acc); return }
//         helper(ind+1 , [...acc , nums[ind]])
//         helper(ind+1 , acc)
//     }
//     helper( 0 , [] )
//     return res
// };

//Iterative
var subsets = function(nums) {
    const res = [[]] 
    let helper = []
    for(let x of nums){
        helper= [ ]
        
        for(let arr of res){
            helper.push([ ...arr , x ])
        }
        res.push(...helper)
    }
    return res
};