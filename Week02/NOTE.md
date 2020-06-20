学习笔记

# 第二周学习笔记

## 反复练习 + 记忆解题模板
```javascript
/*** 二叉树前序遍历 ***/
// 迭代法
const preOrder = (root) => {
	if (!root) return [];
    let result = [];
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let current = stack.pop();
        result.push(current.val);
        current.right && stack.push(current.right);
        current.left && stack.push(current.left);
    }
    return result;
}

// 递归法
const preOrder = (root) => {
	const res = [];
	if (root) {
		res.push(root.val);
		preOrder(res.left);
		preOrder(res.right);
	}
	return res;
}

/*** 二叉树中序遍历 ***/
const inOrder = (root) => {
	const res = [];
	if (root) {
		inOrder(res.left);
		res.push(root.val);
		inOrder(res.right);
	}
	return res;
}

/*** 二叉树后续遍历 ***/
const postOrder = (root) => {
	const res = [];
	if (root) {
		postOrder(res.left);
		postOrder(res.right);
		res.push(root.val);
	}
	return res;
}

/*** 二叉树层续遍历 ***/
var levelOrder = function(root) {
    if (!root) return [];
    let que = [],
        res = [];
    que.push(root);
    while(que.length) {
        let arr = [];
        let size = que.length;
        for (let i = 0; i < size; ++i) {
            let curr = que.shift();
            arr.push(curr.val);
            curr.left && que.push(curr.left);
            curr.right && que.push(curr.right);
        }
        res.push(arr);
    }
    return res;
};

/*** BFS ***/
// BFS + queue
// 遍历或找出最短路径
const BFS = (root, target) => {
	let que = [];
	que.push(root);
	let step = 0;
	while (que.length) {
		++step;
		let size = que.length;
		for (let i = 0; i < size; ++i) {
			let curr = que.shift();
			if (curr.val = target) return step;
			for (let neighbor of curr.neighbors) {
				que.push(neighbor);
			}
		}
	}
	return -1;
}

/*** DFS ***/
// DFS + stack
// 克隆图，岛屿数量，目标和等
const DFS = (root, target) => {
	let stack = [];
	let visited = new Map();
	stack.push(root);
	while (stack.length) {
		let curr = stack.pop();
		if (curr.val = target) return true;
		for (let neighbor of curr.neighbors) {
			if (!visited.has(neighbor)) {
				stack.push(neighbor);
				visited.set(neighbor, 1);
			}
		}
	}
	return false;
}

```

## 树的面试题解法一般都是递归，为什么？
* 设计的好的递归解法时间复杂度和循环一样
* 树是二维结构，通过栈+循环的方式描述树的遍历过程十分复杂
* 通过递归（分治）的思想，将原始问题拆解为更小的子问题，通过解决一个个的子问题从而解决原始问题
* 递归遍历树，每一步只需要关注子树的遍历，不需要同时考虑树的层级，将二维问题变为一维