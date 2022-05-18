/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rows = matrix.length , cols = matrix[0].length
    for( let i=0; i<Math.floor(rows/2) ; i++ )
        for(let j = 0 ; j<cols; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[rows-i-1][j]
            matrix[rows-i-1][j] = temp 
        }
        for( let i=0; i<rows ; i++ )
        for(let j = 0 ; j< i ; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp 
        }
};