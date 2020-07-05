/**
 * 单词接龙
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set();
    for (let word of wordList) {
        wordSet.add(word);
    }
    if (wordSet.size == 0 || !wordSet.has(endWord)) return 0;
    let visited = new Set();
    let beginVisited = new Set();
    beginVisited.add(beginWord);
    let endVisited = new Set();
    endVisited.add(endWord);
    let len = beginWord.length;
    let step = 1;
    while (beginVisited.size && endVisited.size) {
        if (beginVisited.size > endVisited.size) {
            let temp = beginVisited;
            beginVisited = endVisited;
            endVisited = temp;
        }

        let nextLevelVisited = new Set();
        for (const word of [...beginVisited]) {
            let charArr = word.split('');
            for (let i = 0; i < len; i++) {
                let originChar = charArr[i];
                for (let c = 0; c < 26; c++) {
                    let char = String.fromCharCode((65+c)).toLowerCase();
                    if (originChar == char) {
                        continue;
                    }
                    charArr[i] = char;
                    let nextWord = charArr.join('');
                    if (wordSet.has(nextWord)) {
                        if (endVisited.has(nextWord)) {
                            return step + 1;
                        }
                        if (!visited.has(nextWord)) {
                            nextLevelVisited.add(nextWord);
                            visited.add(nextWord);
                        }
                    }
                }
                charArr[i] = originChar;
            }
        }
        beginVisited = nextLevelVisited;
        step++;
    }
    return 0;
};
