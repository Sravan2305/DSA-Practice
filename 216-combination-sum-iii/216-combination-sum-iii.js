/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = []
    
    function combinator(sumLeft , index , numsUsed){
        console.log(numsUsed)
        if(sumLeft<0 || numsUsed.length > k) return 
        
        if( numsUsed.length == k && sumLeft == 0 ){
            return res.push(numsUsed)
        }
        
        for( let i= index ; i<=9; i++ ){
            const newNums = [i , ...numsUsed]
            combinator( sumLeft-i , i+1 , newNums  )    
        }
    }
    
    combinator( n , 1 , [])
    
    return res
};