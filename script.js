'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  displayMessage('🎉 Correct Number!');
};
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
  displayMessage('');
  styleBody('#60b347');
  styleNumber('30rem');
  displayNumber(secretNumber);
  let currentScore = document.querySelector('.score').textContent;
  let currentHighScore = document.querySelector('.highscore').textContent;
  if (currentScore > currentHighScore) {
    currentHighScore = currentScore;
    document.querySelector('.highscore').textContent = currentHighScore;
  }
  openModal();
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

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
