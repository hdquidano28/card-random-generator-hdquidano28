/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const randomLetterNumber = ["K", "Q", "J", "1", "2", "3", "4", "5"];
  const randomSuite = ["heart", "spade"];

  function randomNumberChar() {
    for (let i = 0; i < randomSuite.length; i++) {
      for (let j = 0; i < randomLetterNumber.length; j++) {}
      loopRandom = Math.random(randomSuite);
      document.getElementById("randomSuite");
    }
  }
};
