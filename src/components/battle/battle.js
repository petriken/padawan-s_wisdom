import "./battle.scss";
import "bootstrap";
import $ from "jquery";
import arithmeticValue from "../common/math";
import { BattleDraw } from "./battleDraw";

import { setMonsterName } from "../common/setMonsterName";
import { setGamerName } from "../common/setGamerName";
import { wordsForTranslator } from "../common/wordsForTranslator";
import { playSound } from "./audio/playSound";
import { playerFire } from "../common/playerFire";
import { playerDamage } from "../common/playerDamage";
import { playerDraw } from "../common/playerDraw";
import { loadAllImage, getCrash } from "../common/canvas";
import { getAllMonsterParts } from "../common/canvas";
import { startAnimation } from "../common/canvas";
import { getDamage } from "../common/canvas";
import { flyFireball } from "../common/canvas";

$(document).ready(function () {
  $("#exampleModalCenter").modal("show");
});

$("#exampleModalCenter").modal({
  backdrop: "static",
  keyboard: false
});

$("#exampleModalCenter").on("shown.bs.modal", function () {
  $("#gamer-name").focus();
});

const choiceNameButton = document.querySelector(".btn-start");

choiceNameButton.addEventListener("click", BattleDraw.draw);
choiceNameButton.addEventListener("click", setGamerName);
choiceNameButton.addEventListener("click", setMonsterName);
choiceNameButton.addEventListener("click", playerDraw);
choiceNameButton.addEventListener("click", function () { setTimeout(startAnimation(false), 100) })

function keypress(e) {
  if (e.keyCode == "13") {
    setGamerName();
    setMonsterName();
  }
  window.removeEventListener("keydown", keypress);
}
window.addEventListener("keydown", keypress);

function goToVictoryModal() {
  $(document).ready(function () {
    $("#victory").modal("show");
  });
  playSound("applause");
  $("#victory").modal({
    backdrop: "static",
    keyboard: false
  });
}

function goToScore() {
  $(document).ready(function () {
    $("#gameOver").modal("show");
  });
  playSound("false");
  $("#gameOver").modal({
    backdrop: "static",
    keyboard: false
  });
}

// математика
let math = 0;

function setArithmeticTask() {
  math = arithmeticValue();
  let arithmeticTask = document.createElement("p");
  arithmeticTask.className = "modal-task";
  arithmeticTask.textContent = math[0];
  arithmeticTask.id = "arithmetic-task";
  let taskWrap = document.querySelector("#arithmetic-wrap");
  taskWrap.replaceChild(arithmeticTask, taskWrap.firstChild);
}

const arithmeticButton = document.querySelector(".btn-math");
arithmeticButton.addEventListener("click", setArithmeticTask);

$("#arithmetic").on("shown.bs.modal", function () {
  $("#arithmetic-answer").focus();
});

let monsterHealht = 100;
let playerHealth = 20;

function correctMath() {

  let answerMath = document.getElementById("arithmetic-answer").value;
  if (math[1] === +answerMath) {
    $(document).ready(function () {
      $("#correctAnswer").modal("toggle");
    });
    setTimeout(function () {
      $("#correctAnswer").modal("toggle");
    }, 1000);
    setTimeout((playerFire), 1000);
    if (monsterHealht > 20) {
      setTimeout((getDamage), 2200);
    }

    // уменьшаем прогресс
    let currentValueProgress = parseInt(
      document.querySelector(".progress-bar-value__right").style.width,
      10
    );
    let nextValueProgress = currentValueProgress - 20 + "%";
    $(".progress-bar-value__right").css("width", nextValueProgress);
    monsterHealht = parseInt(nextValueProgress, 10);
    if (monsterHealht <= 0) {
      setTimeout(getCrash, 2300);
      setTimeout(goToVictoryModal, 4200);
    }
  } else {
    $(document).ready(function () {
      $("#inCorrectAnswer").modal("show");
    });
    setTimeout(function () {
      $("#inCorrectAnswer").modal("toggle");
    }, 1000);
    setTimeout((flyFireball), 1000);
    setTimeout((playerDamage), 1500);

    // уменьшаем прогресс
    let currentValueProgress = parseInt(
      document.querySelector(".progress-bar-value__left").style.width,
      10
    );
    let nextValueProgress = currentValueProgress - 20 + "%";
    $(".progress-bar-value__left").css("width", nextValueProgress);
    playerHealth = parseInt(nextValueProgress, 10);
    if (playerHealth <= 0) {
      setTimeout(goToScore, 2000);
    }
  }
  document.getElementById("arithmetic-answer").value = "";
}

const arithmeticButtonAnswer = document.getElementById("btn-math-answer");
$(document).ready(function () {
  $(arithmeticButtonAnswer.addEventListener("click", correctMath));
});

// Translator
let word = "";
let translationArray = "";

function setTranslatorTask() {
  let InputField = document.getElementById("translator-answer");
  InputField.value = "";
  let index = Math.floor(Math.random() * wordsForTranslator.length);
  word = wordsForTranslator[index].word;
  translationArray = wordsForTranslator[index].translation;
  let translatorTask = document.createElement("p");
  translatorTask.className = "modal-task";
  translatorTask.textContent = word;
  translatorTask.id = "translator-task";
  let taskWrap = document.querySelector("#translator-wrap");
  taskWrap.replaceChild(translatorTask, taskWrap.firstChild);
}

const translatorButton = document.querySelector(".btn-translator");
translatorButton.addEventListener("click", setTranslatorTask);

$("#translator").on("shown.bs.modal", function () {
  $("#translator-answer").focus();
});

function correctTranslator() {
  let answerTranslator = document
    .getElementById("translator-answer")
    .value.toLowerCase();
  if (translationArray.indexOf(answerTranslator) !== -1) {
    $(document).ready(function () {
      $("#correctAnswer").modal("toggle");
    });
    // playSound("fight");
    setTimeout(function () {
      $("#correctAnswer").modal("toggle");
    }, 1000);
    setTimeout((playerFire), 1000);
    if (monsterHealht > 20) {
      setTimeout((getDamage), 2200);
    }

    // уменьшаем прогресс
    let currentValueProgress = parseInt(
      document.querySelector(".progress-bar-value__right").style.width,
      10
    );
    let nextValueProgress = currentValueProgress - 20 + "%";
    $(".progress-bar-value__right").css("width", nextValueProgress);
    monsterHealht = parseInt(nextValueProgress, 10);
    if (monsterHealht <= 0) {
      setTimeout(getCrash, 2300);
      setTimeout(goToVictoryModal, 4200);
    }
  } else {
    $(document).ready(function () {
      $("#inCorrectAnswer").modal("show");
    });
    // playSound("glass");
    setTimeout(function () {
      $("#inCorrectAnswer").modal("toggle");
    }, 1000);
    setTimeout((flyFireball), 1000);
    setTimeout((playerDamage), 1500);

    // уменьшаем прогресс
    let currentValueProgress = parseInt(
      document.querySelector(".progress-bar-value__left").style.width,
      10
    );
    let nextValueProgress = currentValueProgress - 20 + "%";
    $(".progress-bar-value__left").css("width", nextValueProgress);
    playerHealth = parseInt(nextValueProgress, 10);
    if (playerHealth <= 0) {

      setTimeout(goToScore, 2300);
    }
  }
  document.getElementById("translator-answer").value = "";
}

const translatorButtonAnswer = document.getElementById("btn-translator-answer");
$(document).ready(function () {
  $(translatorButtonAnswer.addEventListener("click", correctTranslator));
});

function healthRecoveryMonster() {
  return (document.querySelector(".progress-bar-value__right").style.width =
    "100%");
}

$("#moveToNextMonster")
  .click(function () {
    $(".progress-bar-wrapper__name.monster").detach();
  }).click(setMonsterName)
  .click(healthRecoveryMonster)
  .click(getAllMonsterParts)
  .click(loadAllImage)
  .click(startAnimation);