function pivotIndex(nums: number[]): number {
    let memo = [nums[0]]
        for( let i= 1 ; i<nums.length ; i++ )
            memo[i]= memo[i-1] + nums[i]
    for( let i = 0 ; i<nums.length ; i++  ){
        const left = memo[i] - nums[i]
        const right = memo[ nums.length-1 ] - memo[i]
        if( left === right ) return i
    }
    return -1
};