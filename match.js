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
        for (let j = 0; j < rowItems.length - 2; j++) {
            let matchOne = rowItems[j].textContent;
            let matchTwo = rowItems[j + 1].textContent;
            let matchThree = rowItems[j + 2].textContent;
            if (matchOne === matchTwo && matchOne === matchThree) {
                for (let k = j; k < rowItems.length; k++) {
                    if (matchOne === rowItems[k].textContent) {
                        rowItems[k].textContent = "";
                    } 
                }
            }
        }
    }
}

// ********************
// **Vertical Matches**
// ********************
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
                        colItems[k].textContent = "";
                    } else {
                        break
                    }
                }
            }
        }
    }
}

// // *******************
// // ***Descend Items***
// // *******************
const descendItems = width => {
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
                }
            }
        }
    }
}

// // **********************
// // ***Fill Empty Items***
// // **********************
const fill = width => {
    for (let i = 0; i < width; i++) {
        let rowItems = document.querySelectorAll(`[data-row="${i}"]`)
        for (let j = 0; j < rowItems.length; j++) {
            if (rowItems[j].textContent === "") {
                rowItems[j].textContent = animals[Math.floor(Math.random() * animals.length)];
            }
        }
    }
}
