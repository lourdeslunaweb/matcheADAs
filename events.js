// *********************************
// ***Variable Settings of Events***
// *********************************
let itemClicked = [];  // lista de text-content capturados al hacer click
let targetsArray = []; // lista de target capturados al hacer click (div item)

// ****************
// ***Items Swap***
// ****************
const swap = () => {
    targetsArray[0].innerHTML = itemClicked[1];
    targetsArray[1].innerHTML = itemClicked[0];

    // const auxTop = targetsArray[1].style.top;
    // const auxLeft = targetsArray[1].style.left;

    // targetsArray[1].style.top = targetsArray[0].style.top;
    // targetsArray[1].style.left = targetsArray[0].style.left;

    // targetsArray[0].style.top = auxTop;
    // targetsArray[0].style.left = auxLeft;

    // targetsArray[0].classList.remove("selected");
    // targetsArray[1].classList.remove("selected");

    // // *** Actualizar el board ***
    // let aux0Row = targetsArray[0].getAttribute('data-row');
    // let aux0Col = targetsArray[0].getAttribute('data-col');
    // let aux1Row = targetsArray[1].getAttribute('data-row');
    // let aux1Col = targetsArray[1].getAttribute('data-col');
    // targetsArray[0].setAttribute('data-row', aux1Row)
    // targetsArray[1].setAttribute('data-row', aux0Row)
    // targetsArray[0].setAttribute('data-col', aux1Col)
    // targetsArray[1].setAttribute('data-col', aux0Col)

    // for (let row = 0; row < width; row++) {
    //     for (let col = 0; col < width; col++) {
    //         item.style.left = `${col * (504/width)}px`;
    //         item.style.top = `${row * (504/width)}px`;
    //         item.dataset.col = col;
    //         item.dataset.row = row;
    //     }
    // }
}

// ***************************
// ***Select Items Function***
// ***************************
const select = e => {
    let targetContent = e.target.textContent;
    // allowed movements
    let movAllow = () => {
        const dataXOne = parseInt(targetsArray[0].dataset.row);
        const dataYOne = parseInt(targetsArray[0].dataset.col);
        const dataXTwo = parseInt(targetsArray[1].dataset.row);
        const dataYTwo = parseInt(targetsArray[1].dataset.col);
        if (dataXOne === dataXTwo) {
            return (dataYOne === dataYTwo - 1) || (dataYOne === dataYTwo + 1);
        } else if (dataYOne === dataYTwo) {
            return (dataXOne === dataXTwo - 1) || (dataXOne === dataXTwo + 1);
        } else {
            return false
        }
    }
    // first click
    if (itemClicked.length === 0) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
    }
    // second click
    else if (itemClicked.length === 1) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
        if (movAllow()) {
            swap();
            hMatch(width);
            vMatch(width);
            descendItems(width);
            fill(width);
        }
        else {
            targetsArray[0].classList.remove("selected");
        }
    }
    // third click      
    else if (itemClicked.length === 2) {
        for (let i = 0; i < itemClicked.length; i++) {
            targetsArray[i].classList.remove("selected");
        }
        e.target.classList.add("selected");
        itemClicked = [];
        targetsArray = [];
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
    }
}

