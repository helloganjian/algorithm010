/**
 * 翻转字符串里头的单词
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right && s.charAt(left) == " ") ++left;
    while (left < right && s.charAt(right) == " ") --right;

    let deque = [], word = [];
    while (left <= right) {
        let c = s.charAt(left);
        if (word.length != 0 && c == " ") {
            deque.unshift(word.join(''));
            word = [];
        } else if (c != " "){
            word.push(c);
        }
        ++left;
    }
    deque.unshift(word.join(''));
    return deque.join(" ");
};
