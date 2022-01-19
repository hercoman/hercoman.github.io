"use strict";
document.getElementById("name").onblur = function () {
  if (document.getElementById("name").value !== "") {
    document.getElementById("message-name").innerText = "Nice name. By the way, you don't need this field to find the secret."
  }
};
const hint = document.querySelector(".puzzle-hint a");
console.log(hint);
document.querySelector(".puzzle-hint a").onclick = function () {
  document.getElementById("message-hint").innerText =
  "Try literally entering the secret into the field, and see what happens once you click the button..."
};
document.getElementById("button-secret").onclick = function () {
  const guess = document.getElementById("useful").value;
  if (guess.toLowerCase() === "a secret" || guess.toLowerCase() === "the secret" || guess.toLowerCase() === "secret") {
    document.querySelector(".puzzle-second-button-text").hidden = false;
    document.getElementById("message-useful").innerText = "You found a part of the secret! You're not done yet though. You should double cl... I mean, double check what you can do with the new button."
  }
}
document.querySelector(".puzzle-second-button-text").ondblclick = function () {
  const guess = document.getElementById("useful").value;
  if (guess.toLowerCase() === "a secret" || guess.toLowerCase() === "the secret" || guess.toLowerCase() === "secret") {
    for (const span of document.querySelectorAll("span")) {
      span.innerText = "";
    }
    document.querySelector(".puzzle-solution").hidden = false;
  } else {
    document.getElementById("message-useful").innerText = "Don't remove or edit the first part of the secret. You need it to unlock the secret."
  }
};
