const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
const toggleBtn = document.getElementById("toggleBtn");

let currentPlayer = "X";
let gameActive = true;
let board = ["","","","","","","","",""];

// Toggle Mode 🌙☀️
toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("light");
if(document.body.classList.contains("light")){
toggleBtn.innerText = "☀️";
}else{
toggleBtn.innerText = "🌙";
}

});

// Win patterns
const winPatterns = [
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
];

// Click
cells.forEach(cell => {
cell.addEventListener("click", () => {
const index = cell.getAttribute("data-index");
if(board[index] !== "" || !gameActive) return;
board[index] = currentPlayer;
cell.innerText = currentPlayer;
checkWinner();
});
});

// Check winner
function checkWinner(){
let won = false;
winPatterns.forEach(pattern => {
const [a,b,c] = pattern;
if(board[a] && board[a] === board[b] && board[a] === board[c]){
won = true;
}

});

if(won){
statusText.innerText = `🎉 Player ${currentPlayer} Wins!`;
gameActive = false;
return;
}

if(!board.includes("")){
statusText.innerText = "🤝 Draw!";
gameActive = false;
return;
}

currentPlayer = currentPlayer === "X" ? "O" : "X";
statusText.innerText = `Player ${currentPlayer} Turn`;

}

// Reset
resetBtn.addEventListener("click", () => {

board = ["","","","","","","","",""];
cells.forEach(cell => cell.innerText = "");
currentPlayer = "X";
gameActive = true;
statusText.innerText = "Player X Turn";
});