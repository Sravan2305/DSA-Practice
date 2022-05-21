/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    const memo={}
    let res= topDown(coins , amount , memo)
    return res === Infinity ? -1 : res
};

function topDown(coins , amount,  memo){
    if(amount == 0 ) return 0
    if(amount < 0 ) return Infinity
    if( memo[amount] ) return memo[amount]
    
    let min = Infinity ;
    for( let i=0 ; i<coins.length; i++ ){
        min = Math.min( min , topDown(coins , amount-coins[i], memo)+1 )
    }
    memo[amount] = min
    return min
}