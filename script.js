"use ctrict";

// 3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type = range] необходимо заносить в свойства ширины и высоты
// кружка(который внутри квадрата)(height и width)(в процентах!!)

const button = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");
const inputRange = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const circle = document.getElementById("circle");

const displayEBtn = () => (eBtn.style.display = "none");

let inputRangeValue = (event) => {
  rangeSpan.innerHTML = event.target.value;
  circle.style.width = `${event.target.value}%`;
  circle.style.height = `${event.target.value}%`;
};

const funAddEventListener = () => {
  button.addEventListener("click", () => {
    square.style.backgroundColor = `${text.value}`;
  });

  inputRange.addEventListener("input", inputRangeValue);
};

const start = () => {
  funAddEventListener();
  displayEBtn();
};

start();
