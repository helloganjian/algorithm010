/**
 * 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let map = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
        map[s.charCodeAt(i) - 97]++;
        map[t.charCodeAt(i) - 97]--;
    }
    for (let num of map) {
        if (num != 0) return false;
    }
    return true;
};
