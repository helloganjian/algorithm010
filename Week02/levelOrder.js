/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * N叉树的层序遍历
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if (!root) return res;
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let arr = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let current = queue.shift();
            arr.push(current.val);
            if (current.children && current.children.length) {
                queue.push(...current.children);
            }
        }
        res.push(arr);
    }
    return res;
};
