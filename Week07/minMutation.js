/**
 * 最小基因变化
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    bank = new Set(bank);
    if (!bank.has(end)) return -1;
    let genes = ['A', 'C', 'G', 'T'];
    let queue = [{
        val: start,
        step: 0
    }];
    while (queue.length) {
        let node = queue.shift();
        if (node.val == end) return node.step;
        let curStr = node.val;
        for (let i = 0; i < curStr.length; ++i) {
            for (let j = 0; j < genes.length; ++j) {
                if (genes[j] != curStr[i]) {
                    let gene = curStr.slice(0, i) + genes[j] + curStr.slice(i + 1); 
                    if (bank.has(gene)) {
                        queue.push({
                            val: gene,
                            step: node.step + 1
                        });
                        bank.delete(gene);
                    }
                }
            }
        }
    }
    return -1;
};
