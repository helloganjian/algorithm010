/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
	let res = [];
    const getNode = (node) => {
        if (node) {
            res.push(node.val);
            getNode(node.left);
            getNode(node.right);
        }
    }
    getNode(root);
    return res;
};
