import createBoard from "./appUi";

let winingCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
];

function clickBox() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(e => {
        e.addEventListener('click', () => {
            e.style.background = "red";
        });
    });
}

createBoard();