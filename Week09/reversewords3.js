/**
 * 反转字符串中的单词 III
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let left = 0, right = s.length - 1;
    
    let res = [], word = [];
    while (left <= right) {
        if (s.charAt(left) != " ") {
            word.unshift(s.charAt(left));
        }
        if (s.charAt(left) == " " && word.length) {
            res.push(word.join(''));
            word = [];
            res.push (" ");
        } else if (s.charAt(left) == " ") {
            res.push(" ");
        }
        left++;
    }
    res.push(word.join(''));
    return res.join('');
};
