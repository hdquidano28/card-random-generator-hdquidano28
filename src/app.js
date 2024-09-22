/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const randomLetterNumber = [
    "K",
    "Q",
    "J",
    "A",
    "10",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  const randomSuite = ["♦", "♥", "♠", "♣"];

  function randomNumberChar() {
    let loopRandom = Math.floor(Math.random() * randomLetterNumber.length);
    let loopRandomSuite = Math.floor(Math.random() * randomSuite.length);
    return {
      numberLetter: randomLetterNumber[loopRandom],
      suite: randomSuite[loopRandomSuite]
    };
  }
  let randomCard = randomNumberChar();

  document.getElementById("suite1").innerText = randomCard.suite;
  document.getElementById("randomLetter").innerText = randomCard.numberLetter;
  document.getElementById("suite2").innerText = randomCard.suite;

  if (randomCard.suite === "♦" || randomCard.suite === "♥") {
    document.getElementById("suite1").style.color = "red";
    document.getElementById("suite2").style.color = "red";
  } else {
    document.getElementById("suite1").style.color = "black";
    document.getElementById("suite2").style.color = "black";
  }
};
