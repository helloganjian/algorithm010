/**
 * 仅仅反转字母
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let left = 0, right = S.length - 1;
    S = S.split('');
    while (left < right) {
        if (!check(S[left])) left++
        else if (!check(S[right])) right--;
        else if (check(S[left]) && check(S[left])) {
            let temp = S[left];
            S[left] = S[right];
            S[right] = temp;
            left++;
            right--;
        } 
    }
    return S.join('');
    function check(s) {
        return /[a-zA-Z]/.test(s);
    }
};
