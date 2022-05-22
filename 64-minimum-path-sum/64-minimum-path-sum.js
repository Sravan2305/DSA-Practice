/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let i=0 , j = 0;
    for(  ; i<grid.length; i++ ){
        for( j=0 ;j<grid[0].length; j++){
            if(i==0 && j==0 )continue
            else if(i==0) grid[i][j]+=grid[i][j-1]
            else if(j==0) grid[i][j]+=grid[i-1][j]
            else grid[i][j] += Math.min(grid[i][j-1] , grid[i-1][j])
        }
    }
    // console.log(grid)
    return grid[i-1][j-1]
};