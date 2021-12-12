// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//QUICK CODE//
document.onkeydown = checkKey;

function checkKey(e) {
  console.log(e);

  if (e.keyCode == "38") {
    changeUpDown(-1);
  } else if (e.keyCode == "40") {
    changeUpDown(1);
  } else if (e.keyCode == "37") {
    changeClownHead(-1);
  } else if (e.keyCode == "39") {
    changeClownHead(1);
  }
}

var indexes = [0, 0, 0];
let mainIndex = 0;

let head = document.getElementById("head");
let body = document.getElementById("body");
let shoes = document.getElementById("shoes");

let imgs = [head, body, shoes];
let strings = ["head", "body", "shoes"];

function changeClownHead(shift) {
  let index = indexes[mainIndex];
  let image = imgs[mainIndex];
  let str = strings[mainIndex];

  index += shift;

  if (index < 0) index = 5;

  if (index > 5) index = 0;

  indexes[mainIndex] = index;

  image.src = "./images/" + str + index + ".png";
}
function changeUpDown(shift) {
  mainIndex += shift;

  if (mainIndex < 0) mainIndex = 2;

  if (mainIndex > 2) mainIndex = 0;
}

console.log("Dress The Clown!");

//LONG WAY TO SOLVE IT//
// document.onkeydown = checkKey;

// function checkKey(e) {
//   console.log(e);

//   if (e.keyCode == "38") {
//     changeUpDown(-1);
//   } else if (e.keyCode == "40") {
//     changeUpDown(1);
//   } else if (e.keyCode == "37") {
//     changeClownHead(-1);
//   } else if (e.keyCode == "39") {
//     changeClownHead(1);
//   }
// }
// let headIndex = 0;
// let bodyIndex = 0;
// let shoesIndex = 0;

// let mainIndex = 0;

// let head = document.getElementById("head");
// let body = document.getElementById("body");
// let shoes = document.getElementById("shoes");

// function changeClownHead(shift) {
//   if (mainIndex == 0) {
//     headIndex += shift;

//     if (headIndex < 0) headIndex = 5;

//     if (headIndex > 5) headIndex = 0;

//     head.src = "./images/head" + headIndex + ".png";
//   }

//   if (mainIndex == 1) {
//     bodyIndex += shift;

//     if (bodyIndex < 0) bodyIndex = 5;

//     if (bodyIndex > 5) bodyIndex = 0;

//     body.src = "./images/body" + bodyIndex + ".png";
//   }

//   if (mainIndex == 2) {
//     shoesIndex += shift;

//     if (shoesIndex < 0) shoesIndex = 5;

//     if (shoesIndex > 5) shoesIndex = 0;

//     shoes.src = "./images/shoes" + shoesIndex + ".png";
//   }
// }

// function changeUpDown(shift) {
//   mainIndex += shift;

//   if (mainIndex < 0) mainIndex = 2;

//   if (mainIndex > 2) mainIndex = 0;
// }

// console.log("Dress The Clown!");
