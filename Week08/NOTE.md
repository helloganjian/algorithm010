学习笔记

# 第八周学习笔记

## 常见排序算法
```javascript

// 冒泡排序
function bubbleSort(nums) {
	for (let i = 0; i < nums.length - 1; ++i) {
		for (let j = i + 1; j < nums.length; ++j) {
			if (nums[i] > nums[j]) {
				let temp = nums[i];
				nums[i] = nums[j];
				nums[j] = temp;
			}
		}
	}
}

// 快速排序
function quickSort(nums, left, right) {
	if (left < right) {
		let i = left, j = right, temp = nums[left];
		while(i < j) {
			while(i < j && nums[j] > temp) j--;
			if (i < j) nums[i++] = nums[j];
			while(i < j && nums[i] < temp) i++;
			if (i < j) nums[j--] = nums[i];
		}
		nums[i] = temp;
		quickSort(nums, left, i - 1);
		quickSort(nums, i + 1, right);
	}
}

// 归并排序
const mergeSort = (nums) => {
  if (nums.length <= 1) return nums
  let mid = Math.floor(nums.length/2), 
      left = nums.slice(0, mid), 
      right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

const merge(left, right) => {
  let result = []
  while(left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift()
  }
  while(left.length) result.push(left.shift())
  while(right.length) result.push(right.shift())
  return result
}

```

## LRU缓存算法
	LRU 缓存算法的核心数据结构就是哈希链表，双向链表和哈希表的结合体

```javascript
/**
 * 使用 哈希表 + 双端链表 实现
 */
class LinkedNode {
  constructor(key = 0, val = 0) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = new LinkedNode()
    this.tail = new LinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }


  insertFirst(node) {
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
  }


  remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }


  removeLast() {
    if (this.tail.prev === this.head) return null
    let last = this.tail.prev
    this.remove(last)
    return last
  }
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.keyNodeMap = new Map()
  this.cacheLink = new LinkedList()
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.keyNodeMap.has(key)) return -1
  let val = this.keyNodeMap.get(key).val
  this.put(key, val)
  return val
};


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let size = this.keyNodeMap.size
  if (this.keyNodeMap.has(key)) {
    this.cacheLink.remove(this.keyNodeMap.get(key)); 
    --size 
  }
  if (size >= this.capacity) {
    this.keyNodeMap.delete(this.cacheLink.removeLast().key)
  }
  let node = new LinkedNode(key, value)
  this.keyNodeMap.set(key, node)
  this.cacheLink.insertFirst(node)
};

```