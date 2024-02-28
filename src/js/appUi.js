let winBoard = document.querySelector('.wining-player');
let gameboard = document.querySelector('.gameboard');

function makeEnv({ player1Name, player2Name, player1Color, player2Color, mode }) {
  let p1 = document.querySelector('.player-1-name');
  p1.textContent = player1Name;
  p1.style.color = player1Color;
  let p2 = document.querySelector('.player-2-name');
  p2.textContent = player2Name;
  p2.style.color = player2Color;

  if (mode === 'dark') {
    document.body.setAttribute('dark', '');
  } else {
    document.body.removeAttribute('dark');
  }
}

function createBoard() {
  let boxArray = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  boxArray.forEach(element => {
    let box = document.createElement('div');
    box.classList.add('box');
    gameboard.appendChild(box);
  });
};

function updateWins(player1Wins, player2Wins) {
  document.querySelector('.wins1').textContent = player1Wins;
  document.querySelector('.wins2').textContent = player2Wins;
}

function showWiningPlayer(lastWinner) {
  if (lastWinner === 'player-1') {
    winBoard.textContent = document.querySelector('.player-1-name').textContent + ' Won';
  } else winBoard.textContent = document.querySelector('.player-2-name').textContent + ' Won';
}

function freezBoard() {
  // alert(lostColor);
  let elements = document.querySelectorAll('.box');
  elements.forEach(element => {
    element.style.pointerEvents = 'none';
  });
  gameboard.style.transform = 'scale(80%)';
}

function makeBoxDull({ a, b, c }) {
  document.querySelectorAll('.box').forEach((e, i) => {
    e.style.opacity = '0.3';
    if(i === a || i === b || i === c){
      e.style.opacity = '1';
    }
  });
}


function resetBoard() {
  let board = document.querySelector('.gameboard');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  createBoard();
  gameboard.style.transform = 'scale(100%)';
  document.querySelector('.wining-player').textContent = 'Win For Life';
}

export { makeEnv, createBoard, updateWins, showWiningPlayer, resetBoard, freezBoard, makeBoxDull};