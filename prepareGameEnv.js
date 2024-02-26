let button = document.querySelector('[type="submit"]');
let player1Name = '';
let player2Name = '';
let mode = '';

button.addEventListener('submit', (event) => {
    event.preventDefault();
    player1Name = docuemnt.querySelector('#player-1').value;
    player2Name = docuemnt.querySelector('#player-2').value;
})