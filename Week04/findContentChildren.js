/**
 * 分发饼干
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gi = 0, si = 0;
    function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
    }
    g = g.sort(compare);
    s = s.sort(compare);
    while (gi < g.length && si < s.length) {
        if (g[gi] <= s[si]) {
            gi++;
        }
        si++;
    }
    return gi;
};