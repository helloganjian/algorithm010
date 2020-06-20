/**
 * 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
// 时间复杂度O(NKlog(K)) 空间复杂度O(NK)
var groupAnagrams = function(strs) {
    if (!strs.length) return [];
    let map = new Map();
    for (let i = 0; i < strs.length; ++i) {
        let str = strs[i].split('').sort().join('');
        if (map.has(str)) {
            map.get(str).push(strs[i]);
        } else {
            map.set(str, [strs[i]]);
        }
    }
    return [...map.values()];
};

// 计数法
// 时间复杂度O(NK) 空间复杂度O(NK)
var groupAnagrams = function(strs) {
    if (!strs.length) return [];
    let map = new Map();
    for (let i = 0; i < strs.length; ++i) {
        let count = new Array(26).fill(0);
        let str = strs[i];
        for(let j = 0; j < str.length; ++j) {
            count[str.charCodeAt(j) - 97]++;
        }
        let sb = [];
        for (let k = 0; k < 26; k++) {
            sb.push('#', count[k]);
        }
        sb = sb.join('');
        map.has(sb) ? map.get(sb).push(strs[i]) : map.set(sb, [strs[i]]);
    }
    return [...map.values()];
};
