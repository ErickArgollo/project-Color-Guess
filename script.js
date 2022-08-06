const secCircles = document.getElementById('circles');
const rgbColor = document.getElementById('rgb-color');
const inicio = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const placar = document.getElementById('score');
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');

function createCircles() {
  const circle = document.createElement('div');
  circle.classList.add('ball');
  secCircles.appendChild(circle);
}

function addCircles(quantidade) {
  for (let i = 0; i < quantidade; i += 1) {
    createCircles();
  }
}

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

function addColor() {
  const circles = document.querySelectorAll('.ball');
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].style.backgroundColor = `rgb${generateColor()}`;
  }
}
function arrayColor() {
  const circles = document.querySelectorAll('.ball');
  const newarr = [];

  for (let i = 0; i < circles.length; i += 1) {
    newarr.push(circles[i].style.backgroundColor);
  }

  return newarr;
}

addColor();

function dificuldade() {
  secCircles.innerHTML = '';
  if (easy.checked === true) {
    addCircles(3);
    addEventListenerCircles();
  } else if (medium.checked === true) {
    addCircles(5);
    addEventListenerCircles();
  } else {
    addCircles(7);
    addEventListenerCircles();
  }
}
function randomiza() {
  dificuldade();
  addColor();
  arrayColor();
  answer.innerHTML = 'Escolha uma cor';
  const randomIndex = Math.floor(Math.random() * arrayColor().length);
  const randomElement = arrayColor()[randomIndex];
  rgbColor.innerHTML = randomElement;
}

let contador = 0;

function play(event) {
  if (event.target.style.backgroundColor === rgbColor.innerHTML) {
    placar.innerHTML = `${contador += 3}`;
    randomiza();
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    if (answer.innerHTML === 'Errou! Tente novamente!') {
      placar.innerHTML = `${contador = 0}`;
    }
  }
}

function addEventListenerCircles() {
  const circles = document.querySelectorAll('.ball');
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].addEventListener('click', play);
  }
}
addEventListenerCircles();

window.onload = function () {
  randomiza();
};

inicio.addEventListener('click', randomiza);
