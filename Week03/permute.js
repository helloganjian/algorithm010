/**
 * 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // let len = nums.length;
    // if (len == 0) return res;
    // let res = [];
    // let used = 0;
    // const dfs = (nums, len, depth, path, used, res) => {
    //     if (depth == len) {
    //         res.push([...path]);
    //         return;
    //     }
    //     for (let i = 0; i < len; i++) {
    //         if (((used >> i) & 1) == 0) {
    //             path.push(nums[i]);
    //             used ^= (1 << i);

    //             dfs(nums, len, depth + 1, path, used, res);
    //             used ^= (1 << i);
    //             path.pop();
    //         }
    //     }
    // }
    // dfs(nums, len, 0, [], used, res);
    // return res;
    // 
    let res = [];
    dfs([]);
    function dfs(path) {
        if (path.length === nums.length) {
            res.push([...path]);
        }
        
        for (const num of nums) {
            if (path.includes(num)) continue
            path.push(num)
            dfs(path)
            path.pop()
        }
    }
    return res
};
