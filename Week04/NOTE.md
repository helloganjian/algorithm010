学习笔记

# 第四周学习笔记

## 贪心算法/回溯/动态规划比较
* 贪心算法：当下做局部最优判断 
* 回溯：能过回退
* 动态规划：最优判断 + 回退

## 贪心算法场景
	问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解，这种子问题最优解称为最优子结构

## 二分查找模板
```javascript
left, right = 0, len(array) - 1
while (left <= right) {
	let mid = Math.floor((left + right) / 2);
	if (array[mid] == target) {
		break or return result;
	} else if (array[mid] < target) {
		left = mid + 1;
	} else {
		right = mid + 1;
	}
}

```
## 使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方
```javascript
// 使用四个指针 left, midLeft, midRight, right
// left和right确定无序区域
// midLeft, midRight确定无序边界
// mid通过midLeft和midRight来确定
let solution = (arr) => {
    let left = 0, right = arr.length-1;
    let mid = 0, midLeft = midRight = Math.floor((left + right) / 2);
    while (left < right) {
        let mid = Math.floor((midLeft + midRight) / 2);
        if (checkOrder(arr.slice(left, midLeft + 1)) && checkOrder(arr.slice(midRight, right + 1))) {
            return arr.slice(midLeft, midRight + 1);
        } else if (!checkOrder(arr.slice(left, mid + 1)) && checkOrder(arr.slice(mid, right + 1))) {
            right = midRight;
            midLeft--;
        } else {
            left = midLeft;
            midRight++;
        }
    }
    function checkOrder(nums) {
        return nums.toString() == [...nums].sort().toString();
    }
}

let res = solution([1,2,3,4,7,6,5,8,9]);
console.log(res);
```