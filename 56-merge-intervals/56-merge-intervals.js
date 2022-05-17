/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let start = intervals[0][0] , end = intervals[0][1]
    const res = []
    for( let i= 1 ; i<intervals.length; i++ ){
        if( intervals[i][0]<=end ){
            end = Math.max(intervals[i][1] , end)
            continue
        }
        else{
            res.push([start , end])
            start = intervals[i][0]
            end = intervals[i][1]
        }
    }
    res.push([start , end])
    return res 
    
};