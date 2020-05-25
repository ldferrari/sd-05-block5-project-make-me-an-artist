// Retira a classe 'selected' de todas as divs da paletta
function removeClassSelected() {
  const paletteColor = document.querySelectorAll('.color');
  for (let i = 0; i < paletteColor.length; i += 1) {
    paletteColor[i].classList.remove('selected');
  }
}

// Adiciona a classe 'selected' ao objeto clicado
let selectedColor = 'black';
let black = document.querySelector('.black');
function getBlackColor(e) {
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected');
  selectedColor = 'black';  
}
black.addEventListener('click', getBlackColor);

let green = document.querySelector('.green');
function getGreenColor(e) {
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected');
  selectedColor = 'green';
}
green.addEventListener('click', getGreenColor);

let blue = document.querySelector('.blue');
function getBlueColor(e) {
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected');
  selectedColor = 'blue';
}
blue.addEventListener('click', getBlueColor);

let yellow = document.querySelector('.yellow');
function getYellowColor(e) {
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected');
  selectedColor = 'yellow';
}
yellow.addEventListener('click', getYellowColor);

let pickPixel = document.querySelector('#pixel-board');
function changePixelColor(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = selectedColor;
}
pickPixel.addEventListener('click', changePixelColor);


