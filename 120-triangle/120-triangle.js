/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function(triangle) {
//     let memo =  {}
//     return helper(0 , 0, 0)
//     function helper( curr , level , acc){
//         const arg = `${curr}.${level}.${acc}`
//         if(memo[arg]) return memo[arg]
//         if( level == triangle.length ) return memo[arg] = acc
//         return memo[arg] = Math.min( helper(curr , level+1 ,acc+triangle[level][curr]) , helper(curr+1 , level+1 ,acc+triangle[level][curr]) )
//     }
// };

var minimumTotal = function(triangle) {
    for (let i = triangle.length-2; i >= 0; i--)
        for (let j = 0; j < triangle[i].length; j++)
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
    return triangle[0][0]
}