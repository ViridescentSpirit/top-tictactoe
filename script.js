const gameBoard = (function createGameboard() {
    const rows = 3;
    const columns = 3;
    const board =[];

    for(let i=0;i < rows; i++){
        board[i] = [];
        for(let j=0;j < columns; j++) {
            board[i].push(Cell());
        };
    };

    return {board};
})();

function Cell() {
    let value = 0;

    const addMarker = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {addMarker, getValue}
}

function createPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;

    return {playerName, playerMarker};
};

function playTurn() {

}

const lane = createPlayer('Lane','X');
const sydney = createPlayer('Sydney','O');
