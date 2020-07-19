/**
 * 解码方法
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let len = s.length;
    if (len == 0) return 0;
    let dp = new Array(len).fill(0);
    let charArr = s.split('');
    if (charArr[0] == '0') return 0;
    dp[0] = 1;
    for (let i = 1; i < len; ++i) {
        if (charArr[i] != '0') {
            dp[i] = dp[i-1];
        }
        let num = 10 * (charArr[i-1] - '0') + (charArr[i] - '0');
        if (num >= 10 && num <= 26) {
            if (i == 1) {
                dp[i]++; 
            } else {
                dp[i] += dp[i-2];
            }
        }
    }
    return dp[len - 1];
};
