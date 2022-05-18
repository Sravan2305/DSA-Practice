/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [ ]
    helper( 1 , [] )
    return res 
    
    function helper( ind , acc ){
        if(acc.length == k) return res.push(acc)
        
        for(let i = ind ; i<=n; i++){
            helper( i+1 , [...acc , i] )
        }
            
    }
};