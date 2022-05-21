/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let prev = cost[0] , curr = cost[1]
    
    for( let i =2; i<cost.length; i++ ){
        let temp = curr
        curr = Math.min( curr , prev )+cost[i]
        prev = temp
        // console.log(curr , prev)
    }
    return Math.min(curr , prev)
};