# 算法训练营总结

## 方法论

* 五毒神掌

* 自顶向下

* 熟记解题模板

* 不要死磕，看中英文精选评论，写简洁代码

## 掌握四种算法思想

* 分治

* 回溯

* 贪心

* 动态规划

## [算法与数据结构思维导图](https://note.youdao.com/web/#/file/WEBbdcb53f16e726debc02af4dfc624d50e/mindmap/WEBec155f49494b1031b649ce01de192962/)

## 最后

	70天的算法训练营眨眼就过去了，相较以前埋头苦思独自刷题，思维有了很大的转变。 就像转魔方一样，在你眼中炫酷不可思议的操作往往有迹可循，当你了解规律，掌握模板，理解算法思想，看待问题的角度随之也发生了改变，解决问题基本也变成了一种搜索匹配的过程。

	课程虽然结束，但是刷题不会停：

		* 按分类刷题

		* 重复刷题

		* 结合实际问题进行思考

		* 以思维导图为框架，填充内容

	加油~~~



## 前序 + 后续

```javascript

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    return helper(pre, post, 0, pre.length - 1, 0, post.length -1)
    function helper(
        preorder, postorder, preorder_start, preorder_end, postorder_start, postorder_end) {
        if (preorder_start > preorder_end || postorder_start > postorder_end) return null
        let root = new TreeNode(preorder[preorder_start])
        if (preorder_start == preorder_end) return root
        let index = postorder_start
        while (preorder[preorder_start+1] != postorder[index]) index++
        root.left = helper(preorder, postorder, preorder_start + 1, preorder_start+1 + index - postorder_start, postorder_start, index)
        root.right = helper(preorder, postorder, preorder_start+1 + 1 + index - postorder_start, preorder_end, index + 1, postorder_end - 1)
        return root
    }
};

```


## 前序 + 中序

```javascript

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return helper(preorder, inorder, 0, preorder.length - 1, 0, inorder.length -1)
    function helper(
        preorder, inorder, preorder_start, preorder_end, inorder_start, inorder_end) {
        if (preorder_start > preorder_end || inorder_start > inorder_end) return null
        let root = new TreeNode(preorder[preorder_start])
        if (pre_start == pre_end) return root
        let index = inorder_start
        while (preorder[preorder_start] != inorder[index]) index++
        root.left = helper(preorder, inorder, preorder_start + 1, preorder_start+1 + index-1 - inorder_start, inorder_start, index-1)
        root.right = helper(preorder, inorder, preorder_start+1 + 1 + index-1 - inorder_start, preorder_end, index + 1, inorder_end)
        return root
    }
};


```

## 中序 + 后序

```javascript

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return helper(inorder, postorder, 0, inorder.length - 1, 0, postorder.length -1)
    function helper(
        inorder, postorder, inorder_start, inorder_end, postorder_start, postorder_end) {
        if (inorder_start > inorder_end || postorder_start > postorder_end) return null
        let root = new TreeNode(postorder[postorder_end])
        if (postorder_start == postorder_end) return root
        let index = inorder_start
        while (postorder[postorder_end] != inorder[index]) index++
        root.left = helper(inorder, postorder, inorder_start, index - 1, postorder_start, postorder_start + (index-1 - inorder_start))
        root.right = helper(inorder, postorder, index + 1, inorder_end, postorder_end-1 - (inorder_end - (index+1)), postorder_end-1)
        return root
    }
};


```
