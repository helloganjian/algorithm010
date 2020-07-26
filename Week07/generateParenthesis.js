/**
 * 有效括号
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    if (!n) return res;
    dfs ('', 0, 0, n, res);
    return res;
    function dfs(curStr, left, right, n, res) {
        if (left == n && right == n) {
            res.push(curStr);
            return;
        }
        if (left < right) return;
        if (left < n) dfs(curStr + '(', left + 1, right, n, res);
        if (right < n) dfs(curStr + ')', left, right + 1, n, res);
    }
};
