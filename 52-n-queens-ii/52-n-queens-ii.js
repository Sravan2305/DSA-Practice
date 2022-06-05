/**
 * @param {number} n
 * @return {number}
 */
function isValid(row,col , arr , n ){
    for(let i = 0; i<row ; i++)
        if( arr[i][col] == "Q" ) return false
    
    for(let i = row-1 , j = col-1; i>=0 && j>=0; i-- , j--)
            if( arr[i][j] == "Q" ) return false
    
   for(let i = row-1 , j = col+1; i>=0 && j<n; i--, j++)
            if( arr[i][j] == "Q" ) return false
    
    return true
    
}

var totalNQueens = function(n) {
        let res = []
    helper(0 , [])
    return res.length
    function helper(ind ,acc){
    
            
        if(ind>=n) return res.push(acc)
        let arr = new Array(n).fill(".")
        for(let i = 0; i <n; i++){
            arr[i] = "Q"
            let newAcc = [...acc , [...arr]]
            if( isValid(ind , i , newAcc, n ) ) helper(ind+1 , newAcc )
            
            arr[i] = "."
        }
    }
};