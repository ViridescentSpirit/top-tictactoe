function createGameboard() {
    const rows = 3;
    const columns = 3;
    const board =[];

    for(let i=0;i < rows; i++){
        board[i] = [];
        for(let j=0;j < columns; j++) {
            board[i].push(0);
        };
    };

    return board;
};

function createPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;

    return {playerName, playerMarker};
};

function gameControl() {
    gameBoard = createGameboard();
    let playerZeroTurn = true;
    console.log(gameBoard);

    const changeTurn = () => {
        playerZeroTurn = !playerZeroTurn;
    }
    
    const placeToken = (row, column) => {
        let marker = '';

        if(playerZeroTurn === true) {
            marker = 'X';
        } else {
            marker = 'O';
        }

        if(gameBoard[row][column] === 0) {
            gameBoard[row][column] = marker;
            changeTurn();
            console.log(gameBoard);
        } else {
            console.log("Spot already taken! Try again!");
        }

        gameState();
    }

    const gameState = () => {
        let state = '?';
        function openSpaces(arr, search) {
            return arr.some(row => row.includes(search));
        }
        const openSpace = openSpaces(gameBoard, 0);

        if (gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][0] === gameBoard[0][2] 
            && gameBoard[0][0] !== 0) {
                state = gameBoard[0][0];
        } else if (gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][0] === gameBoard[1][2] 
            && gameBoard[1][0] !== 0) {
                state = gameBoard[1][0];
        } else if (gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][0] === gameBoard[2][2] 
            && gameBoard[2][0] !== 0) {
                state = gameBoard[2][0];
        } else if (gameBoard[0][0] === gameBoard[1][0] && gameBoard[0][0] === gameBoard[2][0] 
            && gameBoard[0][0] !== 0) {
                state = gameBoard[0][0];
        } else if (gameBoard[0][1] === gameBoard[1][1] && gameBoard[0][1] === gameBoard[2][1]
            && gameBoard[0][1] !== 0) {
                state = gameBoard[0][1];
        } else if (gameBoard[0][2] === gameBoard[1][2] && gameBoard[0][2] === gameBoard[2][2] 
            && gameBoard[0][2] !== 0) {
                state = gameBoard[0][2];
        } else if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]
            && gameBoard[0][0] !== 0) {
                state = gameBoard[0][0];
        } else if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]
            && gameBoard[0][2] !== 0) {
                state = gameBoard[0][2];
        } else if (openSpace === true) {
            state = '?';
        } else {
            state = "T";
        }
    }

    return {changeTurn, placeToken, gameState};
}

const game = gameControl();
