/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min=Infinity
    let curr = nums[0]
    let l=0
    let r=0

    while(l<nums.length && r<nums.length && l<=r) {
        if(curr<target) {
            r++
            curr+=nums[r]
        }

        if(curr>=target){
            min=Math.min(min,(r-l+1))
            curr-=nums[l]
            l++
        }
    }

    if(min===Infinity) {
        return 0
    }else{
        return min
    }
    
};