学习笔记

# 第三周学习笔记

## 泛型递归模板
```javascript
function recursion (int: level, param) {
	// terminator
	if (level > MAX_LEVEL) {
		// process result
		return result;
	}
	// process current logic
	process(level, param);
	// drill down
	recursion(level + 1, newParam);
	// restore current status
}
```


## 分治模板
```javascript
function divide_conquer(problem, param1, param2, ...) {
	// recursion terminator
	if (problem is None) {
		return result;
	}
	// prepare data
	const data = prepare_data(problem);
	subProblems = split_problem(problem, data);
	// conquer subProblems
	subResult1 = divide_conquer(subProblems[0], p1, ...);
	subResult2 = divide_conquer(subProblems[1], p1, ...);
	subResult3 = divide_conquer(subProblems[2], p1, ...);
	...
	// process and generate the final result
	result = process_result(subResult1, subResult2, subResult3, ...);

	// revert the current level states
}

```

## 回溯模板
```javascript
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择

```

## to do
1. 位运算的使用场景研究
2. 五毒神掌练习