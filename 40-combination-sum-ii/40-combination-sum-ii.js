/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    const res = []
    helper(0 ,0, [])
    return res 
    
    function helper(ind ,sum , acc){
        if(sum == target) return res.push(acc)
        if(sum > target )return 
        
        for( let i = ind ; i<candidates.length; i++ ){
            if (i != ind && candidates[i] == candidates[i-1]) continue;
            helper(i+1 , sum+candidates[i], [...acc , candidates[i]])
        }
    }
};