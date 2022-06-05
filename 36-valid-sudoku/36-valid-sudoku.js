/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
            let memo = {}

    for( let i= 0 ; i<9; i++ ){

        for(let j = 0; j<9; j++){
            if(board[i][j] == ".") continue
            const num = board[i][j]
            let rowNo = num+"row"+i , colNo = num+"col"+j, cell= num+"in"+Math.floor(i/3)+"row"+Math.floor(j/3)+"col"
            
            let arg = rowNo + colNo + cell 
            
            if( memo[rowNo] || memo[colNo] || memo[cell] ) return false
            memo[rowNo] = true
            memo[colNo] = true
            memo[cell] = true
            // console.log(memo)
        }
           
    }

return true
};