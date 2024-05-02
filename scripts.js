window.onload = () => {
  console.log("loaded");
};

let counter = 0;
let incrementValue = 5;
let limitValue = 40;

const counterDisplay = document.getElementById("counter");
const messageDisplay = document.getElementById("message");

document.getElementById("increment").addEventListener("click", () => {
  counter += incrementValue;
  updateCounter();
});

document.getElementById("decrement").addEventListener("click", () => {
  counter -= incrementValue;
  updateCounter();
});

document.getElementById("changeIncrement").addEventListener("click", () => {
  const newIncrementValue = parseInt(
    document.getElementById("incrementValue").value
  );
  if (!isNaN(newIncrementValue)) {
    incrementValue = newIncrementValue;
  }
});

document.getElementById("changeLimit").addEventListener("click", () => {
  const newLimitValue = parseInt(document.getElementById("limitValue").value);
  if (!isNaN(newLimitValue)) {
    limitValue = newLimitValue;
  }
});

function updateCounter() {
  counterDisplay.textContent = counter;
  if (counter > limitValue || counter < -limitValue) {
    messageDisplay.textContent = "!boOmM!";
    messageDisplay.classList.add("boom-message");
  } else {
    messageDisplay.textContent = "";
    messageDisplay.classList.remove("boom-message");
  }
}
