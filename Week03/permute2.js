/**
 * 全排列II
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let len = nums.length;
    let res = [];
    if (len == 0) return res;

    // 排序
    nums.sort();

    let used = new Array(len).fill(false);
    dfs([]);
    function dfs(path) {
        if (path.length === nums.length) {
            res.push([...path]);
        }
        
        for (let i= 0; i < len; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] == nums[i-1] && !used[i-1]) continue;
            path.push(nums[i]);
            used[i] = true;
            dfs(path)
            used[i] = false;
            path.pop()
        }
    }
    return res;
}