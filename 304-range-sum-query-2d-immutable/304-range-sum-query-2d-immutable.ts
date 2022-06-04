class NumMatrix {
    mat=[]
    constructor(matrix: number[][]) {
    this.mat = matrix
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let ans = 0 
        for(let i =row1 ; i<=row2; i++)
            for(let  j =col1 ; j<=col2; j++)
                ans+=this.mat[i][j]
        return ans
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */