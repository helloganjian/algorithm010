/**
 * 单词搜索||
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }
    let res = [];
    let rows = board.length;
    if (rows == 0) return res;
    let cols = board[0].length;
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            dfs(board, i, j, trie.root, res);
        }
    }
    return res;
    function dfs(board, row, col, node, res) {
        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;
        let cur = board[row][col];
        if (cur == '$' || node.children[cur.charCodeAt() - 97] == null) return;
        node = node.children[cur.charCodeAt() - 97];
        if (node.word != null) {
            res.unshift(node.word);
            node.word = null;
        }
        board[row][col] = '$';
        dfs(board, row, col + 1, node, res);
        dfs(board, row + 1, col, node, res);
        dfs(board, row, col - 1, node, res);
        dfs(board, row - 1, col, node, res);
        board[row][col] = cur;
    }
};

/**
 * Initialize your data structure here.
 */
const TrieNode = function () {
    this.isEnd = false;
    this.word = null;
    this.children = [];
    for (let i = 0; i < 26; ++i) {
        this.children[i] = null;
    }
} 

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word) return false;
    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (!node.children[word[i].charCodeAt() - 97]) {
            node.children[word[i].charCodeAt() - 97] = new TrieNode();
        }
        node = node.children[word[i].charCodeAt() - 97];
    }
    node.isEnd = true;
    node.word = word;
    return true;
};
