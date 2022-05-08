/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 let maxP = 0 ,currMin = Number.POSITIVE_INFINITY , currMax =0;

    for( let i=0; i<prices.length; i++ ){
        if( prices[i] < currMin ){
            currMin = prices[i]
            currMax = 0
        }
        currMax = Math.max(currMax  ,prices[i])
        maxP = Math.max( currMax - currMin , maxP )
    }
    return maxP
};