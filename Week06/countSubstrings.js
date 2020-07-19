/**
 * 回文子串
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (s == null || s == '') return 0;
    let n = s.length, nums = s.length;
    const dp = Array.from({length: n}, () => new Array(n).fill(0));
    for (let i = n-1; i >= 0; --i) {
        dp[i][i] = 1;
        for (let j = i+1; j < n; ++j) {
            if (s.charAt(i) == s.charAt(j)) {
                if (j - i == 1) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i+1][j-1];
                }
            }
            if (dp[i][j] == 1) nums++;
        }
    }
    return nums;
};