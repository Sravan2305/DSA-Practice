/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length
    let dp = new Array(rows).fill(-1).map(()=>{
        return new Array(cols).fill(0)
    })
    let res = 0 
    
    for( let i =0 ; i<rows ; i++  ){
        let j = 0
        for(  ; j < cols ; j++)
            {
                if( matrix[i][j] == 0 ) continue
                if( j==0 || i==0 )
                    dp[i][j] = matrix[i][j] 
                else
                dp[i][j] = Math.min( dp[i-1][j-1] , dp[i-1][j] , dp[i][j-1] ) + 1
                res+=dp[i][j]
            }
    }
    console.log(dp)
    return res
};