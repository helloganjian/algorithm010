/**
 * 数组的相对排序
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let count = {};
    for (let num of arr1) {
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    let index = 0;
    for (let num of arr2) {
        while (count[num] > 0) {
            count[num]--;
            arr1[index++] = num;
        }
    }
    for (let num in count) {
        while(count[num] > 0) {
            arr1[index++] = num;
            count[num]--;
        }
    }
    return arr1;
};
