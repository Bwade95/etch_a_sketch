let grid_div = document.getElementById('grid');
let selectedColor = 'none';

const paintButton = document.getElementById('paint');
paintButton.addEventListener('click', () => selectedColor = 'black');
paintButton.addEventListener('blur', unselectColorByBlur);

function unselectColorByBlur() {
  this.style.backgroundColor = "";
  selectedColor = 'none';
}

function createGrid(rowsAndColumns) {
  grid_div.style.gridTemplateColumns = `repeat(${rowsAndColumns}, 1fr)`;
  grid_div.style.gridTemplateRows = `repeat(${rowsAndColumns}, 1fr)`;

  for (let i = 0; i < rowsAndColumns; i++) {
    for (let k = 0; k < rowsAndColumns; k++) {
      let div = document.createElement('div');
      div.className = 'square';
      div.style.backgroundColor = 'hsl(0, 0%, 100%';
      div.style.border = '1px solid black';
      div.setAttribute('data-lightness', 100);
      grid_div.appendChild(div);
      div.addEventListener('mouseover', function () {
        if (selectedColor === 'black') {
          let lightness = parseInt(this.getAttribute('data-lightness'));
          if (lightness === 0) return;
          if (lightness >= 40) {
            lightness -= 10;
            this.setAttribute('data-lightness', lightness);
            this.style.backgroundColor = `hsl(0, 100%, ${lightness}%`;
          }
        }
      });
    }
  }
}

createGrid(10);