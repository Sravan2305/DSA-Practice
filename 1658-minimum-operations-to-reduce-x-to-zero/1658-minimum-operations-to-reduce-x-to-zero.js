var minOperations = function(nums, x) {
    let map = {}, sum = 0
    let l = nums.length
    let min = Infinity
    let found = false
    for(let i = 0; i < l; i++) {
        sum = sum + nums[i]
        if(sum === x) {
            min = Math.min(min, i + 1)
            found = true
        } else if(x - sum > 0) {
            map[x - sum] = i + 1
        } 
    }
    
    if(sum < x) return -1
    sum = 0
    
    for(let i = 0; i < l; i++) {
        sum = sum + nums[l - 1 - i]
        if(sum === x) {
            min = Math.min(min, i + 1)
            found = true
        } else if(map[sum]) {
            min = Math.min(min, i + 1 + map[sum])
            found = true
        }
    }
    return found ? min : -1
};