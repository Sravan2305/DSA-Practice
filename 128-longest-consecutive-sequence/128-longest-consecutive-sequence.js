var longestConsecutive = function (nums) {
  let memo = {}
  for( let i = 0; i < nums.length; i++ ) {
    memo[nums[i]] = 1
  }
  let max = 0
  for( let i = 0; i < nums.length; i++ ) {
    let temp = nums[i]
      let count = memo[ temp ]
      if( count > 0 ){
          while( memo[ temp + 1 ] ) {
            temp++
            count+=memo[ temp ]
            memo[temp] = 0
          }
      }
      memo[nums[i]] = count 
      max = Math.max(max, count)
  }
  return max
};