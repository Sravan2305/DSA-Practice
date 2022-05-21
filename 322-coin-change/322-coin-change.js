/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    // const memo={}
    // let res= topDown(coins , amount , memo)
    // return res === Infinity ? -1 : res
    
    return bottomUp(coins,amount)
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

function bottomUp(coins, amount){
    let dp = new Array(amount+1).fill(Infinity)
    dp[0]=0
    for(let i = 1; i<=amount; i++){
        for(let coin of coins){
            if( dp[i-coin] >=0 )
                dp[i] = Math.min(dp[i] , dp[i-coin]+1)
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount]
}