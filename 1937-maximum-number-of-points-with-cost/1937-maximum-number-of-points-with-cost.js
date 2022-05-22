/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let i = 0, j = 0 , rows = points.length , cols = points[0].length
    const dp = new Array(rows).fill(0).map(x=>new Array(cols).fill(0))
    let global = 0
    for( ; i< rows; i++)
        {   
            for( j=0  ; j<cols; j++){
                if(i==0){
                    dp[i][j] = points[i][j]
                }else{
                     let temp = 0
                     for(let k =0 ; k<cols; k++){
                         temp = Math.max(temp , points[i][j]+dp[i-1][k]-Math.abs(j-k))
                     }
                    dp[i][j]=temp
                }   
            if(i==rows-1) global = Math.max(global , dp[i][j])
            }
        }
    console.log(dp)
    return global
};