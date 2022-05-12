/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  let res = []
  
  permutations(nums, [], res)
  return res
};

function permutations(nums, set, res) {
  
  let visited = {}
  
  for(let i = 0; i < nums.length; i++) {
      visited[nums[i]] = false
  }
  
  if(!nums.length) {
      res.push(set)
      return
  }
  
  for(let k = 0; k < nums.length; k++) {
      let numsCopy = [...nums]
      let num = numsCopy.splice(k, 1)[0]
      if(!visited[num]) {
          permutations(numsCopy, [...set, num],  res)
          visited[num] = true
      }
  }
  
}