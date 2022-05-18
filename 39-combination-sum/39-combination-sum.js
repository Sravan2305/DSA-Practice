/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    helper( 0 , [] , 0 )
    return res
    
    function helper( sum ,acc , ind){
        if(sum == target ) return res.push(acc)
        if(sum > target) return 
        for(let i=ind ; i<candidates.length; i++){
            helper( sum+candidates[i] , [...acc , candidates[i]] , i )
        }
    }
};