function missingNumber(nums: number[]): number {
const n = nums.length 
let sum = 0
for( let i=0; i<n; i++)
        sum+=nums[i]
return (n*(n+1))/2 - sum     

};