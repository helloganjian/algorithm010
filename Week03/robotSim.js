/**
 * 模拟行走机器人
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let dx = [0,1,0,-1], dy = [1,0,-1,0];
    let di = 0, curX = 0, curY = 0, result = 0;
    let map = new Map();
    for (const obstacle of  obstacles) {
        map.set(obstacle[0] + '_' + obstacle[1], true);
    }
    for (const command of commands) {
        if (command == -2) {
            di = (di + 3) & 3;
        } else if (command == -1) {
            di = (di + 1) & 3;
        } else {
            // 每次走一步
            for (let i = 1; i <= command; ++i) {
                let nextX = curX + dx[di];
                let nextY = curY + dy[di];
                if (map.has(nextX + '_' + nextY)) break;
                curX = nextX;
                curY = nextY;
                result = Math.max(result, curX * curX + curY * curY);
            }
        }
    }
    return result;
};