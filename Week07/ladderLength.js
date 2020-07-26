/**
 * 单词接龙
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.size || !wordSet.has(endWord)) return 0;
    let beginVisited = new Set(), endVisited = new Set(), visited = new Set();
    beginVisited.add(beginWord);
    endVisited.add(endWord);
    let step = 1;
    let len = beginWord.length;
    while (beginVisited.size && endVisited.size) {
        if (beginVisited.size > endVisited.size) {
            let temp = beginVisited;
            beginVisited = endVisited;
            endVisited = temp;
        }
        let nextLevelVisted = new Set();
        for (const word of [...beginVisited]) {
            let charArr = word.split('');
            for (let i = 0; i < len; ++i) {
                let originChar = charArr[i];
                for (let c = 0; c < 26; ++c) {
                    let char = String.fromCharCode(65+c).toLowerCase();
                    if (charArr[i] == char) continue;
                    charArr[i] = char;
                    let nextWord = charArr.join('');
                    if (wordSet.has(nextWord)) {
                        if (endVisited.has(nextWord)) return step + 1;
                        if (!visited.has(nextWord)) {
                            nextLevelVisted.add(nextWord);
                            visited.add(nextWord);
                        }
                    }
                }
                charArr[i] = originChar;
            }
        }
        beginVisited = nextLevelVisted;
        step++;
    }
    return 0;
};