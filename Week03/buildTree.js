/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 从前序与中序遍历序列构造二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
    let pre = 0, index = 0;
    const buildTreeHelper = (preorder, inorder, stop) => {
        // 到达末尾返回null
        if (pre == preorder.length) {
            return null;
        }

        // 到达停止点返回null
        // 当前停止点用了， index后移
        if (inorder[index] == stop) {
            index++;
            return null;
        }

        let root_val = preorder[pre++];
        const root = new TreeNode(root_val);
        // 左子树的停止点是当前的根节点
        root.left = buildTreeHelper(preorder, inorder, root_val);
        // 右子树的停止点是当前树的的停止点
        root.right = buildTreeHelper(preorder, inorder, stop);
        return root;
    }
    return buildTreeHelper(preorder, inorder, Number.MAX_VALUE)
};