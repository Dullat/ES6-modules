import { player1Name, player2Name, player1Color, player2Color, mode } from "./getCookie.js";
import { makeEnv, createBoard, updateWins, showWiningPlayer, resetBoard, freezBoard} from "./appUi.js";
import { switchUser, clearPlayerArray, getLostPlayerColor } from "./playerSystem.js";
import '../css/gameBoard.css'
import '../css/reset.css'

let player1Wins = 0;
let player2Wins = 0;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// setMode(document.body);

function reset() {
  freezBoard(getLostPlayerColor());
    document.querySelector('.reset-icon').addEventListener('click', () => {
      clearPlayerArray();
    resetBoard();
    clickBox();
    })
}

function checkWinner({ player, lastPlayer }) {

    winningCombos.forEach(combo => {
        let [a, b, c] = combo;
        if (player.includes(a) && player.includes(b) && player.includes(c)) {
            if (lastPlayer === 'player-1') {
                console.log("p1 won");
                player1Wins++;
            } else player2Wins++;

            updateWins(player1Wins, player2Wins);

            showWiningPlayer(lastPlayer);
            reset();
        }
    })
}

function clickBox() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((e, index) => {
        e.addEventListener('click', () => {
            if (!e.hasAttribute('clicked')) {
                e.style.background = "red";
                e.setAttribute('clicked', '');

                checkWinner(switchUser(e, index, player1Color, player2Color));
            }
        });
    });
}

createBoard();
clickBox();
makeEnv({ player1Name, player2Name, player1Color, player2Color, mode });