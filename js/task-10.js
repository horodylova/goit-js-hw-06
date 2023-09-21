const container = document.getElementById('boxes');

let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size +=10;
    boxes.push(box);

}
container.append(...boxes);
};


const controls = document.getElementById('controls');

const createButton = controls.querySelector('button[data-create]');
createButton.addEventListener('click', () => {
  const input = controls.querySelector('input[type="number"]');
  const amount = input.valueAsNumber;
  createBoxes(amount);

});
const destroyButton = controls.querySelector('button[data-destroy]');
destroyButton.addEventListener('click', () => {
  container.innerHTML = '';
  size = 30;
});



