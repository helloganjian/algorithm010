/**
 * 删除排序数组中的重复项 
 * 原地算法
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length <= 1) return nums;
    // 双指针法
    let head = 0;
    let tail = 1;
    while (tail < nums.length) {
        if (nums[head] != nums[tail]) {
        	// 优化无重复项情况
            if (tail - head > 1) {
                nums[head+1] = nums[tail];
            }
            head++;
        }
        tail++
    }
    return head + 1
};
