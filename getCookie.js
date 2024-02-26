function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const player1Name = getCookie('player1Name');
const player2Name = getCookie('player2Name');
const player1Color = getCookie('player1Color');
const player2Color = getCookie('player2Color');
const mode = getCookie('mode');

export {player1Name, player2Name, player1Color, player2Color, mode};
