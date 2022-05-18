/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
        let isFirstColIsZero = false, rows = matrix.length , cols = matrix[0].length

    for(let i=0; i<matrix.length; i++){
        if(matrix[i][0]==0) isFirstColIsZero = true
        for(let j = 1 ; j<matrix[0].length; j++)
            if(matrix[i][j]==0){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
    }
  

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 1; j--)
            if (matrix[i][0] == 0 || matrix[0][j] == 0)
                matrix[i][j] = 0;
        if (isFirstColIsZero) matrix[i][0] = 0;
    }
    
};