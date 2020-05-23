function criarQuadros() {
  const div1 = document.querySelector('.session1');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function criarQuadros2() {
  const div1 = document.querySelector('.session2');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function criarQuadros3() {
  const div1 = document.querySelector('.session3');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function criarQuadros4() {
  const div1 = document.querySelector('.session4');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function criarQuadros5() {
  const div1 = document.querySelector('.session5');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function renderizarPixels() {
  criarQuadros();
  criarQuadros2();
  criarQuadros3();
  criarQuadros4();
  criarQuadros5();
}
renderizarPixels();

//evento de click nas cores
const coresBlack = document.querySelector('.selected');
coresBlack.addEventListener('click', aplicarCorBlack);

let corAtual = document.querySelector('.selected').style.backgroundColor = 'black';

function aplicarCorBlack() {
  corAtual = 'black';
}

const coresYellow = document.querySelector('.color-yellow');
coresYellow.addEventListener('click', aplicarCorYellow);

function aplicarCorYellow() {
  corAtual = 'yellow';
}

const coresBlue = document.querySelector('.color-blue');
coresBlue.addEventListener('click', aplicarCorBlue);

function aplicarCorBlue() {
  corAtual = 'blue';
}

const coresGreen = document.querySelector('.color-green');
coresGreen.addEventListener('click', aplicarCorGreen);

function aplicarCorGreen() {
  corAtual = 'green';
}

//caixas de pixel em branco
const pixels = document.querySelectorAll('.pixel');
for(let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', identicarPixel);
}

function identicarPixel(evento) {
  evento.target.style.backgroundColor = corAtual;
}

//limpar cores
let botaoApagarCores = document.querySelector('#clear-board');
botaoApagarCores.addEventListener('click', apagarEstilos);

function apagarEstilos() {
  for(let i = 0; i < pixels.length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
}
// let divPai = document.getElementsByClassName('session1')[0].children;
// console.log(divPai);
