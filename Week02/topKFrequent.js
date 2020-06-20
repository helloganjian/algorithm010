/**
 * 前 K 个高频元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 桶排序
// 时间复杂度O(N) 空间复杂度O(N)
var topKFrequent = function(nums, k) {
    let map = new Map();
    nums.map(num => {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    });
    if (map.size <= k) {
        return [...map.keys()];
    }
    const bucketSort = (map, k) => {
        let res = [], arr = [];
        map.forEach((value, key) => {
            arr[value] ? arr[value].push(key) : arr[value] = [key];

        });
        for (let i = arr.length - 1; i >= 0 && res.length < k; --i) {
            if (arr[i]) {
                res.push(...arr[i])
            } 
        }
        return res;
    }
    return bucketSort(map, k);
};