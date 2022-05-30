/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let rows = board.length, cols = board[0].length
    for(let i = 0 ; i<rows ; i++){
        for(let j = 0 ; j< cols ; j++){
            let ones = 0
            for( let x = Math.max(0,i-1) ; x<=Math.min(i+1,rows-1) ; x++ )
            for( let y = Math.max(0,j-1) ; y<=Math.min(j+1,cols-1) ; y++ )   
                ones += board[x][y]&1
            if(!board[i][j] && ones == 3 ) board[i][j] = 2
            else if(board[i][j] && (ones >= 3 && ones <= 4 ) ) board[i][j] = 3
        }
    }
       for (let i=0; i<rows; ++i)
        for (let j=0; j<cols; ++j)
            board[i][j] >>= 1;
};