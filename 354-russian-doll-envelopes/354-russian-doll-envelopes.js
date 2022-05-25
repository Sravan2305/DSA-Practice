/**
 * @param {number[][]} envelopes
 * @return {number}
 */

var maxEnvelopes = function(E) {
    E.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let len = E.length, dp = []
    for (let i = 0; i < len; i++) {
        let height = E[i][1], left = 0, right = dp.length   
        while (left < right) {
            let mid = (left + right) >> 1
            if (dp[mid] < height) left = mid + 1
            else right = mid
        }
        dp[left] = height
    }
    return dp.length
};

// var maxEnvelopes = function(envelopes) {
//     // envelopes.sort((a,b)=>b[1]-a[1])
//     // envelopes.sort((a,b)=>b[0]-a[0])
//      envelopes.sort((a,b)=>a[0] === b[0] ? b[1]-a[1] : b[0]-a[0]);
//     return lis(envelopes)
// };

// function lis(arr ){
//     let dp = new Array(arr.length).fill(0) , max = 0
//     for(let i = 0; i<arr.length; i++){
//         let res = 0
//         for(let j = 0; j<i; j++){
//             if(arr[j][1]>arr[i][1] && arr[j][0]>arr[i][0]){
//                 res = Math.max(res , dp[j])
//             }
//         }
//         dp[i] = res+1
//         max = Math.max(max ,dp[i])
//     }
//     return max
// }