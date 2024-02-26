import exportedValues from "./prepareGameEnv.js";
import {makeEnv, createBoard, shouWiningPlayer} from "./appUi.js";
import { switchUser } from "./playerSystem.js";

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

function checkWinner({ player, lastPlayer }) {

    winningCombos.forEach(combo => {
        let [a, b, c] = combo;
        if(player.includes(a) && player.includes(b) && player.includes(c)){
            if (lastPlayer === 'player-1') {
                console.log("p1 won");
                player1Wins++;
            }else player2Wins++;

            shouWiningPlayer(player1Wins, player2Wins);
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

                checkWinner(switchUser(e, index));
            }
        });
    });
}

createBoard();
clickBox()