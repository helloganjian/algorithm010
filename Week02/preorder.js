/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * N叉数前序遍历
 * @param {Node} root
 * @return {number[]}
 */
// 迭代法
var preorder = function(root) {
    if (!root) return [];
    let result = [];
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let current = stack.pop();
        result.push(current.val);
        if (current.children && current.children.length) {
            for (let i = current.children.length - 1; i >= 0; --i) {
                stack.push(current.children[i])
            }
        }
    }
    return result;
};

// 递归法
var preorder = function(root) {
    if (!root) return [];
    let res = [];
    const getNode = (node) => {
        if (!node) return;
        res.push(node.val);
        if (node.children && node.children.length) {
            node.children.forEach(child => {
                getNode(child);
            })
        }
    }
    getNode(root);
    return res;
};
