// ********************************
// ***Variable Settings of Match***
// ********************************
const items = document.getElementsByClassName("item");

// ************************
// ***Horizontal Matches***
// ************************
const hMatch = (width) => {
    for (let i = 0; i < width; i++) {
        let rowItems = document.querySelectorAll(`[data-row="${i}"]`)
        for (let j = i; j < rowItems.length - 2; j++) {
            let matchOne = rowItems[j].textContent;
            let matchTwo = rowItems[j + 1].textContent;
            let matchThree = rowItems[j + 2].textContent;
            if (matchOne === matchTwo && matchOne === matchThree) {
                for (let k = j; k < rowItems.length; k++) {
                    if (matchOne === rowItems[k].textContent) {
                        // agregue de aca
                        // rowItems[j].textContent = "";
                        // rowItems[j + 1].textContent = "";
                        // rowItems[j + 2].textContent = "";
                        // hasta aca
                        rowItems[k].textContent = "";
                        scoreAdd();
                        break;
                    } else {
                        break
                    }
                }
            }
        }
    }
}

// **********************
// ***Vertical Matches***
// **********************
const vMatch = width => {
    for (let i = 0; i < width; i++) {
        let colItems = document.querySelectorAll(`[data-col="${i}"]`)
        for (let j = 0; j < colItems.length - 2; j++) {
            let matchOne = colItems[j].textContent;
            let matchTwo = colItems[j + 1].textContent;
            let matchThree = colItems[j + 2].textContent;
            if (matchOne === matchTwo && matchOne === matchThree) {
                for (let k = j; k < colItems.length; k++) {
                    if (matchOne === colItems[k].textContent) {
                        // agregue de aca
                        // colItems[j].textContent = "";
                        // colItems[j + 1].textContent = "";
                        // colItems[j + 2].textContent = "";
                        // hasta aca
                        colItems[k].textContent = "";
                        scoreAdd();
                        break;
                    } else {
                        break
                    }
                }
            }
        }
    }
}

// *****************************************
// ***Fill Empty Items and Download Items***
// *****************************************
const fill = width => {
    for (let i = width; i >= 0; i--) {
        let colItems = document.querySelectorAll(`[data-col="${i}"]`)
        for (let j = colItems.length - 1; j >= 0; j--) {
            if (colItems[j].textContent === "") {
                for (let k = j; k >= 0; k--) {
                    if (colItems[k].textContent !== "") {
                        colItems[j].textContent = colItems[k].textContent;
                        colItems[k].textContent = "";
                        break;
                    }
                    colItems[k].textContent = animals[Math.floor(Math.random() * animals.length)];
                }
            }
        }
    }
}