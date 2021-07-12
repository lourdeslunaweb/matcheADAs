// ************************************
// ***Variable Settings Create Board***
// ************************************
const board = document.getElementById("board");
const animals = ['🐶', '🐱', '🐰', '🦊', '🐷', '🐸'];
let width;
let item;

// ******************
// ***Create Board***
// ******************
const createBoard = width => {
    let itemWidth = 504 / width;
    for (let row = 0; row < width; row++) {
        for (let col = 0; col < width; col++) {
            item = document.createElement("div");
            let animalRandom = animals[Math.floor(Math.random() * animals.length)]
            let inItem = document.createTextNode(animalRandom);
            board.appendChild(item);
            item.appendChild(inItem);
            board.classList.add("board")
            item.style.display = "flex";
            item.style.alignItems = "center";
            item.style.justifyContent = "center";
            item.style.width = `${itemWidth}px`;
            item.style.height = `${itemWidth}px`;
            item.style.fontSize = `${itemWidth / 1.5}px`;
            item.classList.add("item");
            item.style.position = 'absolute';
            item.style.left = `${col * itemWidth}px`;
            item.style.top = `${row * itemWidth}px`;
            item.dataset.col = col;
            item.dataset.row = row;
            item.addEventListener("click", select);
        }
    }
}
createBoard()


