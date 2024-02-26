const player1 = [];
const player2 = [];
let currentPlayer = 'player-1';

function addToPlayerCombo(e, index){
    console.log(index);
    if(e=== 1){
        player1.push(index);
    }else player2.push(index);

    console.log(player1, player2);
}

export function switchUser(e, index){
    if(currentPlayer === 'player-1'){
        addToPlayerCombo(1,index);
        let lastPlayer = currentPlayer;
        console.log(lastPlayer);
        currentPlayer = 'player-2';
        return {player: player1, lastPlayer};
    }else {
        addToPlayerCombo(2,index);
        let lastPlayer = currentPlayer;
        console.log(lastPlayer);
        currentPlayer = 'player-1';
        return {player: player2, lastPlayer};
    }
};