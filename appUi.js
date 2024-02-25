function createBoard() {
    let boxArray = [
        "","","",
        "","","",
        "","",""
    ];

    boxArray.forEach(element => {
        let box = document.createElement('div');
        box.classList.add('box');
        document.querySelector('.gameboard').appendChild(box);
    });
}

createBoard();