/**
 * 剑指 Offer 49. 丑数
 * @param {number} n
 * @return {number}
 */

// 动态规划
// 时间复杂度O(N) 空间复杂度O(N)
var nthUglyNumber = function(n) {
    let a = 0,
        b = 0,
        c = 0;
    let dp = new Array(n);
    dp[0] = 1;
    for (let i = 1; i < n; ++i) {
        dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
        if (dp[i] === dp[a] * 2) ++a;
        if (dp[i] === dp[b] * 3) ++b;
        if (dp[i] === dp[c] * 5) ++c;
    }
    return dp[n - 1];
};
