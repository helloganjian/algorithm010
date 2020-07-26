/**
 * 有效的数独
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {}, columns = {}, boxes = {};
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++ j) {
            let num = board[i][j];
            if (num != '.') {
                let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
                if (rows[i + '_' + num] || columns[j + '_' + num] || boxes[boxIndex + '_' + num]) return false;
                rows[i + '_' + num] = true;
                columns[j + '_' + num] = true;
                boxes[boxIndex + '_' + num] = true;
            }
        }
    }
    return true;
};
