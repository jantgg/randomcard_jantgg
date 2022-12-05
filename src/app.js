/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let icons = ["♦", "♥", "♠", "♣"];

  let cardNumber = document.querySelector("#cardNumber");
  cardNumber.style.fontSize = "200px";
  let cardIcon = document.querySelectorAll("#cardIcon");

  cardNumber.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];

  let randomIconIndex = Math.floor(Math.random() * icons.length);

  for (let x = 0; x < cardIcon.length; x++) {
    if (randomIconIndex <= 1) {
      cardIcon[x].style.color = "red";
    }
    cardIcon[x].innerHTML = icons[randomIconIndex];
    cardIcon[x].style.fontSize = "100px";
  }
};
