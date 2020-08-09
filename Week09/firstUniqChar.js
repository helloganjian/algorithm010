/**
 * 字符串中的第一个唯一字符
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; ++i) {
        let c = s.charAt(i);
        map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
    }
    for (let i = 0; i < s.length; ++i) {
        if (map.get(s.charAt(i)) == 1) return i;
    }
    return  -1;
};
