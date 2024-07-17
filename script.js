'use strict';
console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

function displayMessageAndScore(message) {
  document.querySelector('.message').textContent = message;
  let score = Number(document.querySelector('.score').textContent);
  score--;
  if (score >= 1) {
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '🔥 You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
}

function displayCorrectNumber() {
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
  let currentScore = document.querySelector('.score').textContent;
  let currentHighScore = document.querySelector('.highscore').textContent;
  if (currentScore > currentHighScore) {
    currentHighScore = currentScore;
    document.querySelector('.highscore').textContent = currentHighScore;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) document.querySelector('.message').textContent = '⛔️ No Number!';
  else if (guess === secretNumber) displayCorrectNumber();
  else if (guess > secretNumber) displayMessageAndScore('📈 Too High!');
  else if (guess < secretNumber) displayMessageAndScore('📉 Too Low!');
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
