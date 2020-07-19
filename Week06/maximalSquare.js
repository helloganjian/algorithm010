/**
 * 最大正方形
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let maxSide = 0;
    if (!matrix || matrix.length == 0 || matrix[0].length == 0) return maxSide;
    let row = matrix.length, column = matrix[0].length;
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < column; ++j) {
            if (matrix[i][j] == '1') {
                if (i == 0 || j == 0) {
                    matrix[i][j] = 1;
                } else {
                    matrix[i][j] = Math.min(Math.min(matrix[i-1][j], matrix[i-1][j-1]), matrix[i][j-1]) + 1;
                }
                maxSide = Math.max(maxSide, matrix[i][j]);
            }
        }
    } 
    return maxSide * maxSide;
};