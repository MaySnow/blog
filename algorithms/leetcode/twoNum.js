
// 注意：forEach 是不能跳出循环的 return break 都不可以
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        let item = nums[i]
        if (i === len - 1) {
            return []
        }
        let lastIdx = i + 1
        while(lastIdx < len) {
            if (item + nums[lastIdx] === target) {
                return [i, lastIdx]
            }
            lastIdx++
        }
    }
    return []
};

console.log(twoSum([2,7,11,15], 9))