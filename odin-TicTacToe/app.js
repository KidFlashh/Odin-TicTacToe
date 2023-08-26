//create gameboard inside an array
//create object to access array
//create a javascript to render(dynamically add) the contents of the gameboard
//which will hold X & O options
//create function that will allow players to click in designated spot and add X or O tie it with the DOM
//make function to keep players from accessing the same spot
//build logic for when the game is over
const startBtn = document.querySelector('#start-button');
const cellBtn = document.querySelectorAll('.cell');
const gameMsg = document.querySelector('.messgae');
const gameDis = document.querySelector('.display-result');



startBtn.addEventListener("click", () => {
    // Game.start();
    alert("Hello World");
 console.log(this);
})

//create gameboard object IIFE
// store game display and array withiin object
const gameBoard = (() => {

    //create a gameboard inside an array
    let gameboard = ['','','','','','','','',''];

    //create function to render or display gameboard from array dynamically
    const displayGame = () => {
        let boardHTML = '';
        gameboard.forEach((cell, index) => {
            boardHTML += `<div class="cell" id=cell-${index}>${cell}</div>` 
        });
        let gameChart = document.querySelector(".gameboard");
        gameChart.innerHTML = boardHTML;
    };

    cellBtn.forEach(cell => cell.addEventListener('click', handleCellClick));

    function handleCellClick (clickedCellEvent) {
        const clickedCellEvent = clickedCellEvent.target;
        console.log(this);
    };

    //return the output of displayed grid
    return {
        displayGame, 
    }
})();
console.log(gameBoard);


//iife for player controllers
//accept players name and assign X or O
//check winning combiniations 
const displayController = (() => {

    //create constructor for players and options
    let players = [];
    function Player(name, marker) {
        this.name = name
        this.marker = marker

    };

    //assign new 
    function addPlayers() {
        let player1 = document.getElementById('#player-1').value;
        let player2 = document.getElementById('#player-2').value;

        let Player1 = new Player(player1, X);
        let Player2 = new Player(player2, O);
        players.push(Player1, Player2);
        console.log(Player1);
    }

    return {
        addPlayers,
    }
})();
console.log(displayController);


//after game is initial
//verify players name and assign markers

//check for winning patterns 
const Game = (() => {
    let players = []
    let currentPlayerIndex = 0;
    let gameOver = false;

    const start = () => {

    }


})();

// const game = (() => {

//     //build the winning number pairs for the array
//     function winningPairs () {
//         let numPair =  [[0,1,2],[0,3,6],[0,4,8]
//                     ,[1,4,7],[2,5,8],[3,4,5],
//                     [6,7,8], [2, 4, 6]];

//     //grab the values of the second array to check against players
//         for (let i = 0; i < numPair.length; i++) {
//             let value = numPair[i];
//             for (let j = 0; j < numPair[i].length; j++) {
//                 let innerValue = numPair[i][j];
//                 if (innerValue === f)
//             }
//         };
//     };
//     return {
//         winningPairs,
//     }

// })();
// console.log(game);


// cellBtn.forEach(cell => cell.addEventListener('click', handleCellClick));


