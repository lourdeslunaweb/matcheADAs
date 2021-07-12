// ********************************
// ***Variable Settings of Score***
// ********************************
let score = 0;
let comboSearch;
let scoreSpan = document.getElementById("score");
let comboSpan = document.getElementById("combo");

// ************************
// ***Score Add Function***
// ************************
const scoreAdd = () => {
    score += 100
    scoreSpan.innerHTML = `${score}`;
}

// ***************************
// ***Combo Detect Function***
// ***************************
// const comboDetect = () => {
//     comboSearch = setInterval(() => {
//         hMatch();
//         vMatch();
//         comboSpan.innerHTML = "x3";
//         // score = score + 300;
//     }, 1000);
// }