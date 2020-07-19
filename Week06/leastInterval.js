/**
 * 任务调度器
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (!tasks || tasks.length == 0) return 0;
    let map = new Array(26).fill(0);
    for (let task of tasks) {
        map[task.charCodeAt() - 65]++;
    }
    map.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
    });
    let max_val = map[25] - 1, idle_slots = max_val * n;
    for (let i = 24; i >= 0 && map[i] > 0 && idle_slots > 0; --i) {
        idle_slots -= Math.min(map[i], max_val); 
    }
    return idle_slots > 0 ? idle_slots + tasks.length : tasks.length; 
};