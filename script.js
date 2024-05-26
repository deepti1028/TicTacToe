let valueX = false;
let i;
let j;

let col = document.getElementsByClassName("col");

Array.from(col).forEach((event) => {
  event.addEventListener("click", (e) => {
    if (e.target.innerHTML !== "X" && e.target.innerHTML !== "O")
      e.target.innerHTML = valueX == true ? "X" : "O";
    valueX = !valueX;
    i = e.target.className[7];
    j = e.target.className[8];
    console.log(i, j);
    checkWinner(i, j);
  });
});

// let checkWinner = (i,j)=>{

// }
