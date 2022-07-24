/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length,  cols = matrix[0].length;
    let  i= 0, j = cols-1 
    while( i<rows  && j >= 0 ){
        if( matrix[i][j]===target )return true 
        if( matrix[i][j]< target ) i++
        else j--
    }
    return false
};