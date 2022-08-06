function uniquePaths(m: number, n: number): number {
    const dp = Array( m+1 ).fill(null).map( x => Array(n+1).fill(0) )
    for( let i=1 ; i<=m; i++ ){
        for(let j=1; j<=n; j++){
            if(i==1 && j== 1) dp[i][j]=1
            else dp[i][j] = dp[i-1][j]+dp[i][j-1]
        }
    } 
    // console.log(dp)
    return dp[m][n]
};