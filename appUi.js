

export default function createBoard() {
    let boxArray = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    boxArray.forEach(element => {
        let box = document.createElement('div');
        box.classList.add('box');
        document.querySelector('.gameboard').appendChild(box);
    });
};

export function shouWiningPlayer(player1Wins, player2Wins) {
    let winBoard = document.querySelector('.wining-player');
    if (player1Wins === player2Wins) {
        winBoard.textContent = `EQUALS`;
    } else if (player1Wins > player2Wins) {
        winBoard.textContent = `EQUALS`;
    }
}