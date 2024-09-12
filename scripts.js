const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resultDisplay = document.getElementById("result");
const restartGame = document.getElementById("restartGame");
const bulb = document.getElementById("lightbulbIcon");

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  let guess = guessInput.value.trim();
  if (guess === "") {
    alert("please Enter a number");
  } else {
    let answer = Math.floor(Math.random() * 5 + 1);
    if (guess == answer) {
      resultDisplay.textContent = `You won! 😏Guessed Number is ${answer}`;
    } else {
      resultDisplay.textContent = `Your Big head 🤣🤣Try Again! Guessed Number is ${answer}`;
    }
  }
  restartGame.addEventListener("click", function () {
    resultDisplay.textContent = "";
    guessInput.value = "";
  });
});
