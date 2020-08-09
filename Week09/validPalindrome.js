/**
 * 验证回文字符串II
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right && s.charAt(left) == s.charAt(right)) {
        left++, right--;
    }
    return palindrome(left + 1, right) || palindrome(left, right - 1);
    
    function palindrome(left, right) {
        while (left < right && s.charAt(left) == s.charAt(right)) {
            left++, right--;
        }
        return left >= right;
    }
};
