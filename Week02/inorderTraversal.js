/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    const getNode = (node) => {
        if (node) {
            getNode(node.left);
            res.push(node.val);
            getNode(node.right);
        }
    }
    getNode(root);
    return res;
};
