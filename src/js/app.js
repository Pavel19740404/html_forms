import controlCard from "./validator.js";

const cardInput = document.querySelector(".input-field");
const checkBtn = document.querySelector(".btn");
const successField = document.querySelector(".success");
const failureField = document.querySelector(".failure");

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const cardNumber = cardInput.value.split("").map(Number);
  if (controlCard(cardNumber)) {
    successField.classList.add("show_answer");
    cardInput.value = "";
    applyBlackWhite();
  } else {
    failureField.classList.add("show_answer");
    cardInput.value = "";
    applyBlackWhite();
  }
});

cardInput.addEventListener("input", (e) => {
  e.preventDefault();
  hideAnswer();
  const value = cardInput.value.split("").map(Number);

  if (value.length > 1) {
    chooseCard(value);
  } else {
    applyBlackWhite();
  }
});

function chooseCard(value) {
  if (value[0] === 4) {
    showCard(".visa");
  } else if (value[0] === 5) {
    showCard(".master-card");
  } else if (value[0] === 6) {
    showCard(".discover");
  } else if (value[0] === 2) {
    showCard(".mir");
  } else if (value[0] === 3) {
    if (value[1] === 5) {
      showCard(".jcb");
    } else if (value[1] === 6) {
      showCard(".diners");
    } else {
      showCard(".american");
    }
  } else {
    return;
  }
}

function showCard(selector) {
  const image = document.querySelector(selector);
  image.classList.add("active");
}

function applyBlackWhite() {
  const allImages = document.querySelectorAll(".card");
  Array.from(allImages).forEach((element) => {
    element.classList.remove("active");
  });
}

function hideAnswer() {
  successField.classList.remove("show_answer");
  failureField.classList.remove("show_answer");
}
