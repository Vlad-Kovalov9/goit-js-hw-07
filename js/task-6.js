'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxElements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = '10px';
    size += 10;
    boxElements.push(box);
  }

  boxesContainer.append(...boxElements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes(); 
      createBoxes(amount); 
      input.value = ""; 
    } else {
      alert("Please enter a number between 1 and 100.");
    }
});
  
destroyButton.addEventListener("click", destroyBoxes);