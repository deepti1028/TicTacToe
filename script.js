let valueX = false;

let col = document.getElementsByClassName("col");
let row = document.getElementsByClassName("row");

Array.from(col).forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.innerHTML !== "X" && e.target.innerHTML !== "O")
      e.target.innerHTML = valueX == true ? "X" : "O";
    valueX = !valueX;
    checkWinner(row, col);
  });
});

// function checkWinner(row,col) {
//     winner="";

//     for( )
// }
