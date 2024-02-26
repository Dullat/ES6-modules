let player1Name = '';
let player1Color = '';
let player2Name = '';
let player2Color = '';
let mode = '';

export default function exportedValues() {
    return { player1Name, player1Color, player2Name, player2Color, mode };
}

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        player1Name = document.querySelector('#player-1').value;
        player2Name = document.querySelector('#player-2').value;
        player1Color = document.querySelector('#player-color-1').value;
        player2Color = document.querySelector('#player-color-2').value;
        mode = document.querySelector('[type="radio"]:checked').value;
        console.log(mode);
        exportValues();
    });
});

