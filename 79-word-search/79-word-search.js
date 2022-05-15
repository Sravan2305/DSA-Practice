/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    let moves = [ [-1, 0] , [1 , 0] , [0 , 1], [0, -1] ]
    for(let i=0; i<board.length; i++)
    for(let j=0;j<board[0].length;j++)
        if(helper(i,j,0)) return true
    return false
    
    function helper(x , y , ind){
        if( board[x][y] !== word[ind] ) return false
        if(ind === word.length-1) return true
        
        board[x][y] = "*"
        for(let [dx , dy] of moves){
            let i = x+dx
            let j = y+dy
            if(i>=0 && i<board.length && j>=0 && j<board[0].length && helper(i , j, ind+1) ) return true
        }
        board[x][y] = word[ind]
    }
};