let winBoard = document.querySelector('.wining-player');

function makeEnv({ player1Name, player2Name, player1Color, player2Color, mode }) {
    let p1 = document.querySelector('.player-1-name');
    p1.textContent = player1Name;
    p1.style.color = player1Color;
    let p2 = document.querySelector('.player-2-name');
    p2.textContent = player2Name;
    p2.style.color = player2Color;
    
    if(mode === 'dark'){
    document.body.setAttribute('dark', '');
  }else {
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
        document.querySelector('.gameboard').appendChild(box);
    });
};

function updateWins(player1Wins, player2Wins) {
    document.querySelector('.wins1').textContent = player1Wins;
    document.querySelector('.wins2').textContent = player2Wins;
}

function showWiningPlayer(player1Wins, player2Wins) {
    if (player1Wins === player2Wins) {
        winBoard.textContent = `EQUALS`;
    } else if (player1Wins > player2Wins){
        winBoard.textContent = document.querySelector('.player-1-name').textContent;
    } else winBoard.textContent = document.querySelector('.player-2-name').textContent;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  let bigint = parseInt(hex, 16);

  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
}


function freezBoard(lostColor) {
  // alert(lostColor);
  let elements = document.querySelectorAll('.box');
  elements.forEach(element => {
    element.style.pointerEvents = 'none';
    let computedStyle = window.getComputedStyle(element);
    if (computedStyle.getPropertyValue('background') === hexToRgb(lostColor)) {
      element.style.opacity = '0.5';
    }
  });
  document.querySelector('.gameboard').style.opacity = '.7';
}


function resetBoard() {
    let board = document.querySelector('.gameboard');
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
    createBoard();

}

export { makeEnv, createBoard, updateWins, showWiningPlayer, resetBoard, freezBoard };