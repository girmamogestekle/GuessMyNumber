'use strict';
console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let displayMessage = message =>
  (document.querySelector('.message').textContent = message);
let displayNumber = number =>
  (document.querySelector('.number').textContent = number);
let displayScore = score =>
  (document.querySelector('.score').textContent = score);
let styleNumber = width =>
  (document.querySelector('.number').style.width = width);
let styleBody = color =>
  (document.querySelector('body').style.backgroundColor = color);

function displayMessageAndScore(guess) {
  displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
  let score = Number(document.querySelector('.score').textContent);
  score--;
  if (score >= 1) {
    displayScore(score);
  } else {
    displayMessage('🔥 You lost the game!');
    displayScore(0);
  }
}

function displayCorrectNumber() {
  displayMessage('🎉 Correct Number!');
  styleBody('#60b347');
  styleNumber('30rem');
  displayNumber(secretNumber);
  let currentScore = document.querySelector('.score').textContent;
  let currentHighScore = document.querySelector('.highscore').textContent;
  if (currentScore > currentHighScore) {
    currentHighScore = currentScore;
    document.querySelector('.highscore').textContent = currentHighScore;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) displayMessage('⛔️ No Number!');
  else if (guess === secretNumber) displayCorrectNumber();
  else displayMessageAndScore(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  displayNumber('?');
  styleNumber('15rem');
  styleBody('#222');
  displayMessage('Start guessing...');
  displayScore(20);
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
