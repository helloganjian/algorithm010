/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let k = 1;
    for (let i = digits.length - 1; i >= 0; --i) {
        let temp = digits[i];
        digits[i] = (digits[i] + k) % 10;
        k = Math.floor((temp + k) / 10);        
    }
    if (k > 0) {
        digits.unshift(1);
    }
    return digits;
};