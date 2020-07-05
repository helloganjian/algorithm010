/**
 * 跳跃游戏
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let endReachable = nums.length - 1;
    for (let i = endReachable; i >= 0; --i) {
        if (nums[i] + i >= endReachable) { // 逆推 找到能到到末尾的最下i值
            endReachable = i;
        }
    }
    return endReachable == 0;
};