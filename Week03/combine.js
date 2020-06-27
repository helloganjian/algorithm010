/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    if (n <= 0 || k <= 0 || n < k) return result;
    const findCombinenations = (n, k, index, stack) => {
        if (stack.length == k) {
            result.push([...stack]);
            return;
        }
        for (let i = index; i <= n - (k - stack.length) + 1; i++) {
            stack.push(i);
            findCombinenations(n, k, i + 1, stack);
            stack.pop();
        }
    }
    findCombinenations(n, k, 1, []);
    return result;
};