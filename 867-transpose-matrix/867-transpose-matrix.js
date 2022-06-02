/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let res=  []
  
      for( let j = 0 ; j < matrix[0].length ; j++ )
          {
              let temp = []
          for(let i =0; i <matrix.length; i++){
              temp.push(matrix[i][j])
          }
              res.push(temp)
          }
    return res
};