/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (!nums || nums.length <= 1) return nums;
    const reverse = (start, end) => {
        while (start < end) {
            let prev = nums[start];
            nums[start] = nums[end];
            nums[end] = prev;
            start++;
            end--;
        }
    }
    // 处理k大于数组长度的情况
    k = k % nums.length;
    // 反转数组
    reverse(0, nums.length - 1);
    // 反转前k个元素
    reverse(0, k - 1);
    // 反转第k个之后的元素
    reverse(k, nums.length - 1);
    return nums;
};