let form = document.querySelector('form');
let player1Name = '';
let player1Color = '';
let player2Name = '';
let player2Color = '';
let mode = '';

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const player1Name = document.querySelector('#player-1').value;
    const player2Name = document.querySelector('#player-2').value;
    const player1Color = document.querySelector('#player-color-1').value;
    const player2Color = document.querySelector('#player-color-2').value;
    const mode = document.querySelector('[type="radio"]:checked').value;

    document.cookie = `player1Name=${player1Name}`;
    document.cookie = `player2Name=${player2Name}`;
    document.cookie = `player1Color=${player1Color}`;
    document.cookie = `player2Color=${player2Color}`;
    document.cookie = `mode=${mode}`;

    window.location.href = 'game.html';
});

