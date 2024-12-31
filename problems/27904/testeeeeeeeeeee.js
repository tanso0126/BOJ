function generateTicTacToeBoards() {
    const boards = [];
    const initialState = Array(8).fill('O').concat(Array(8).fill('X'));

    // Helper function to convert a linear 16-element array to a 4x4 board format
    function formatBoard(state) {
        return state.map((_, idx) => state.slice(idx * 4, idx * 4 + 4).join("")).slice(0, 4).join("\n");
    }

    // Generate all combinations of 8 'O's in 16 slots
    function getCombinations(arr) {
        const results = [];
        const backtrack = (start, chosen) => {
            if (chosen.length === 8) {
                const board = Array(16).fill('X');
                chosen.forEach(index => board[index] = 'O');
                results.push(board);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                backtrack(i + 1, chosen.concat(i));
            }
        };
        backtrack(0, []);
        return results;
    }

    // Generate all boards and format them
    const combinations = getCombinations([...Array(16).keys()]);
    combinations.forEach(combination => {
        boards.push(formatBoard(combination));
    });

    // Print all boards, each separated by two newlines
    const fs = require('fs');
    fs.writeFileSync('getallttt.txt', boards.join('\n'),'utf-8');
}

generateTicTacToeBoards();

