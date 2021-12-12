// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//how to target the id img in html// Long Way
// let uni0 = document.getElementById("uni0");
// let uni1 = document.getElementById("uni1");
// let uni2 = document.getElementById("uni2");

//to inflate unicorn baloon// Long Way
// let inflateLevel0 = 0;
// let inflateLevel1 = 1;
// let inflateLevel2 = 2;

//how to make onclick function// Long Way
// uni0.onclick = click;
// uni1.onclick = click;
// uni2.onclick = click;

//how to create onclick function//
// function click(event) {
//   let unicorn = event.target;
//   let id = unicorn.id[3];

//how to do if statement// long way to code//
// if (unicorn.id == "uni0") {
//   inflateLevel0++;

//   if (inflateLevel0 == 4) inflateLevel0 = 0;

//   unicorn.src = "./images/unicorn-" + inflateLevel0 + ".png";
// }

// if (unicorn.id == "uni1") {
//   inflateLevel1++;

//   if (inflateLevel1 == 4) inflateLevel1 = 0;

//   unicorn.src = "./images/unicorn-" + inflateLevel1 + ".png";
// }

// if (unicorn.id == "uni2") {
//   inflateLevel2++;

//   if (inflateLevel2 == 4) inflateLevel2 = 0;

//   unicorn.src = "./images/unicorn-" + inflateLevel2 + ".png";
// }
// }

//shorter way to code this//
document.getElementById("uni0").onclick = click;
document.getElementById("uni1").onclick = click;
document.getElementById("uni2").onclick = click;

let inflate = [0, 0, 0];

function click(event) {
  let unicorn = event.target;
  let id = unicorn.id[3];

  inflate[id]++;

  if (inflate[id] == 4) inflate[id] = 0;

  unicorn.src = "./images/unicorn-" + inflate[id] + ".png";
}
