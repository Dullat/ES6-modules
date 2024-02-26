let player1 = [];
let player2 = [];
let currentPlayer = 'player-1';
let lostPlayerColor;

function addToPlayerCombo(e, index){
    console.log(index);
    if(e=== 1){
        player1.push(index);
    }else player2.push(index);

    console.log(player1, player2);
}

function switchUser(e, index, player1color, player2color){
    if(currentPlayer === 'player-1'){
        e.style.background = player1color;
        lostPlayerColor = player2color;
        addToPlayerCombo(1,index);
        let lastPlayer = currentPlayer;
        console.log(lastPlayer);
        currentPlayer = 'player-2';
        return {player: player1, lastPlayer};
    }else {
        e.style.background = player2color;
        lostPlayerColor = player1color;
        addToPlayerCombo(2,index);
        let lastPlayer = currentPlayer;
        console.log(lastPlayer);
        currentPlayer = 'player-1';
        return {player: player2, lastPlayer};
    }
}

function clearPlayerArray() {
    player1 = [];
    player2 = [];
    currentPlayer = 'player-1';
}

function getLostPlayerColor(){
  return lostPlayerColor;
}

export {switchUser, clearPlayerArray, getLostPlayerColor};