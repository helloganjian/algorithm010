学习笔记

# 第六周学习笔记

## 四种算法思想
* 贪心
* 回溯
* 动态规划
* 分治

## 使用场景
	贪心，回溯，动态规划归为一类，分治为另一类。 回溯算法算是“万金油”。 基本上能用动态规划和贪心解决的问题都能够用回溯算法解决。 回溯算法相当于穷举搜索。
	能用动态规划的问题满足三个特征：最优子结构，无后效性和重复子问题。
	贪心算法是动态规划算法的一种特殊情况，解决问题更加高效，代码更加简洁，可以解决的问题也更加有限。 贪心算法满足三个条件：最优子结构，无后效性和贪心选择性，其中“贪心选择性”的意思是通过局部最优的选择，能产生全局最优的选择。
	分治算法解决的问题尽管大部分也是最优解问题，不过大部分都不能抽象成多阶段决策模型。

## 两种动态规划的解题思路
	它们分别是状态转移表法和状态转移方程法。其中，状态转移表法解题思路大致可以概括为，回溯算法实现- 定义状态 - 画递归树 - 找重复子问题 - 画状态转移表 - 根据递推关系填表 - 将填表过程翻译成代码。状态转移方程法的大致思路可以概括为，找最优子结构 - 写状态转移方程 - 将状态转移方程翻译成代码

## 动态规划模板
```javascript
// 递归代码模板
function recur(level, param) { 
  // terminator 
  if (level > MAX_LEVEL) { 
    // process result 
    return; 
  }
  // process current logic 
  process(level, param); 
  // drill down 
  recur( level: level + 1, newParam); 
  // restore current status 
 
}

// 分治代码模板
function divide_conquer(problem, param1, param2, ...) { 
  // recursion terminator 
  if (problem is None) { 
	print_result 
	return 
  }

  # prepare data 
  let data = prepare_data(problem) 
  let subproblems = split_problem(problem, data) 

  # conquer subproblems 
  let subresult1 = this.divide_conquer(subproblems[0], p1, ...) 
  let subresult2 = this.divide_conquer(subproblems[1], p1, ...) 
  let subresult3 = this.divide_conquer(subproblems[2], p1, ...) 
  …

  # process and generate the final result 
  const result = process_result(subresult1, subresult2, subresult3, …)
	
  # revert the current level states
}

```