/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let moves = [[1,0],[-1,0] , [0,1] , [0,-1]]
    const rows = matrix.length , cols = matrix[0].length
    const dp = new Array(rows).fill(0).map(x=>new Array(cols).fill(-1))
    
    let max = 0
    
    for(let i=0; i<rows; i++)
        for(let j=0; j<cols; j++)
            max = Math.max( max , helper(i , j, -1) )
    
    return max
    
    function helper( x , y , prev ){
        
        if( x<0 || y<0 || x>=rows || y>= cols || matrix[x][y]<=prev ) return 0 
        if( dp[x][y] >-1  ) return dp[x][y]
        let nodeMax = 0  , currMax = 0
        for( let [dx , dy] of moves){
             currMax = 1+helper(x+dx , y+dy ,matrix[x][y])
             nodeMax = Math.max(nodeMax , currMax)
        }
        dp[x][y] = nodeMax
        return nodeMax
    }  
    
};