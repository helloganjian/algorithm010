/**
 * 朋友圈
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let count = 0;
    let visited = new Array(M.length).fill(0);
    for (let i = 0; i < M.length; ++i) {
        if (visited[i] == 0) {
            dfs(M, visited, i);
            count++;
        }
    }
    function dfs(M, visited, i) {
        for (let j = 0; j < M[i].length; ++j) {
            if (M[i][j] == 1 && visited[j] == 0) {
                visited[j] = 1;
                dfs(M, visited, j);
            }
        }
    }
    return count;
};