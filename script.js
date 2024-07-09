"use strict";

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  diceEl.classList.remove("hidden");
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.src = `dice-${dice}.png`;
});
