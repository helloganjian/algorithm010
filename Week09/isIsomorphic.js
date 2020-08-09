/**
 * 同构字符串
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();
    for (let i = 0; i < s.length; ++i) {
        let c1 = s.charAt(i);
        let c2 = t.charAt(i);
        if (mapS.get(c1) != mapT.get(c2)) return false;
        if (!mapS.has(c1)) {
            mapS.set(c1, i + 1);
            mapT.set(c2, i + 1);
        }
    }
    return true;
};
