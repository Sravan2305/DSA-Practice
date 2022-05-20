/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let rows = obstacleGrid.length , cols = obstacleGrid[0].length
    let dp = new Array(rows).fill(0).map( x => new Array(cols).fill(-1) )
    let moves = [[0,1], [1,0]]
    
    return helper(0 , 0)
    
    function helper( x , y ){
        if( x<0 || y<0 || x>=rows || y>= cols ||obstacleGrid[x][y]==1 ) return 0
        if( x==rows-1 && y==cols-1 ) return 1
        if(dp[x][y]>-1) return dp[x][y]
        let paths = 0
        for(let [dx, dy] of moves){
            paths+=helper( x+dx , y+dy )
        }
        dp[x][y] = paths
        return paths
    }  
};