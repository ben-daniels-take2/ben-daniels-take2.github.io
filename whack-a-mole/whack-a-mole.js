// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//mole appears in random cell//
//mole img appears in random cell//
//click on the mole//
//mole respawns in random cell//

let cells = document.getElementsByTagName("TD");

let randomIndex = Math.floor(Math.random() * cells.length);

let randomCell = cells[randomIndex];

var mole = document.createElement("img");

mole.src = "./mole.PNG";
mole.id = "mole";

randomCell.appendChild(mole);

mole.onclick = whackedMole;

function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length);
  randomCell = cells[randomIndex];
  randomCell.appendChild(mole);

  let audio = new Audio("./whack-audio.wav");
  audio.play();
  // console.log("whacked the mole");
}

// console.log("Whack-a-Mole!");
