let valueX = false;
let row;
let col;

let cols = document.getElementsByClassName("col");

Array.from(cols).forEach((event) => {
  event.addEventListener("click", (e) => {
    if (e.target.innerHTML !== "X" && e.target.innerHTML !== "O")
      e.target.innerHTML = valueX == true ? "X" : "O";
    row = e.target.className[7];
    col = e.target.className[8];
    console.log(row, col);
    checkWinner(row, col);
    valueX = !valueX;
  });
});

let maze = [
  [".", ".", "."],
  [".", ".", "."],
  [".", ".", "."],
];
let checkWinner = (row, col) => {
  maze[row][col] = valueX == true ? "X" : "O";
  let str = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      str += maze[i][j];
    }
    if (str == "XXX" || str == "OOO") {
      alert("winner is " + str[0]);
    }
  }
  str = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      str += maze[j][i];
    }
    if (str == "XXX" || str == "OOO") {
      alert("winner is " + str[0]);
    }
  }
  str = "";
  for (let i = 0; i < 3; i++) {
    str += maze[i][i];
  }
  if (str == "XXX" || str == "OOO") {
    alert("winner is " + str[0]);
  }
  str = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 2; j >= 0; j--) {
      str += maze[i][j];
    }
  }
  if (str == "XXX" || str == "OOO") {
    alert("winner is " + str[0]);
  }
};
