/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res= [ ]
    let firstRow = 0 , lastRow = matrix.length-1
    let firstCol = 0 , lastCol = matrix[0].length-1
    let direction = 0
    // console.log(firstRow , lastRow , firstCol, lastCol)
    while(firstRow <= lastRow && firstCol<=lastCol){


        switch (direction){
            case 0 : //right
            for(let i = firstCol; i<=lastCol; i++)
                res.push(matrix[firstRow][i])
            firstRow++
            break
            case 1 : //down
            for(let i = firstRow; i<=lastRow; i++)
            res.push(matrix[i][lastCol])
            lastCol--
            break        
                
            case 2 : //left
            for(let i = lastCol; i>=firstCol; i--)
            res.push(matrix[lastRow][i])
            lastRow--
            break       
                
            case 3 : //up
            for(let i = lastRow; i>=firstRow; i--)
            res.push(matrix[i][firstCol])
            firstCol++
            break
                
        }
        
        direction = (direction+1)%4
        
    }
    return res
};