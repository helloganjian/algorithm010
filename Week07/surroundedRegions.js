/**
 * 被围绕的区域
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || !board.length) return;
    let m = board.length, n = board[0].length;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            let isEdage = i == 0 || j == 0 || i == m - 1 || j == n - 1;
            if (isEdage && board[i][j] == 'O') {
                dfs(board, i, j);
            }
        }
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (board[i][j] == 'O') board[i][j] = 'X';
            if (board[i][j] == '#') board[i][j] = 'O';
        }
    }
    function dfs (board, i, j) {
        if (i < 0 
            || j < 0 
            || i >= board.length 
            || j >= board[0].length 
            || board[i][j] == 'X' 
            || board[i][j] == '#'
        ) return;
        board[i][j] = '#';
        dfs(board, i, j + 1);
        dfs(board, i + 1, j);
        dfs(board, i, j - 1);
        dfs(board, i - 1, j);
    }
};