/**
 * 反转字符串||
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let i = 0, j = k - 1;
    s = s.split('');
    for (let i = 0; i <= s.length; i += 2*k) {
        reverse(i, i + k - 1);
    }

    function reverse(left, right) {
        while (left < right) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
    return s.join('');
};
