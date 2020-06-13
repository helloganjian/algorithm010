/**
 * 移动0
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 双指针
    // 与删除排序数组中的重复项原地算法类似
    let j = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            if (i != j) {
                nums[i] = 0;
            }
            j++;
        }
    }
};