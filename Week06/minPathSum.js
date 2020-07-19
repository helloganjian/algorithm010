/**
 * 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    if (!m) return 0;
    let n = grid[0].length;
    if (!n) return 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i == 0 && j == 0) continue;
            if (i == 0) grid[i][j] = grid[i][j-1] + grid[i][j];
            else if (j == 0)  grid[i][j] = grid[i-1][j] + grid[i][j];
            else  grid[i][j] = Math.min(grid[i][j-1], grid[i-1][j]) + grid[i][j];
        }
    }
    return grid[m-1][n-1];
};