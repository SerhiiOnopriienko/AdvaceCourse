function getRandomColor() {
  const rndByte = () => Math.floor(Math.random() * 256);
  return `rgb(${rndByte()},${rndByte()},${rndByte()})`;
}

let coloredArea = document.getElementsByClassName('wrap');

document.coloredArea.style.backgroundColor = red;

var colorText = document.getElementsByClassName('text');


colorText.innerText = getRandomColor();

function ChangeColor(event) {
  console.dir(event.target);
  document.body.style.backgroundColor = getRandomColor(); 
  colorText.innerText = getRandomColor();
}