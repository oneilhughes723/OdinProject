

let activeSelection = 'darken';
//initializes rows array to accessing cells more easily in other funcitons
let rows = [];



//function that prompts user for grid dimensions
function promptGrid() {
    let grid = prompt('Enter a number between 1 and 100 for your grid size');
    //if invalid response, promptGrid called again
    if (grid > 100 || grid < 1 || !grid) {
      promptGrid();
    }
    else { return grid; }
  }

  //builds the cells of the grid used for mousing over
  function buildGrid (grid) {
      //reset the rows array to empty
      rows = [];
    //container div that all other cells are inside
    let mainDiv = document.getElementById('etch-grid');
    for (let i = 0; i < grid; i++) {
      for (let j = 0; j < grid; j++) {
        //variable that defines each cells x/y coordinates on the grid
        let gridNum = `${i}-${j}`;
        //new cell created for the grid
        let block = document.createElement('div');
        //if a new row, enters this condition, creates a div for each cell
        //allows for flexbox simplicity
        if (j === 0) {
          let newRow = document.createElement('div');
          rows.push(i);
          mainDiv.appendChild(newRow);
          newRow.setAttribute('class','row');
          newRow.setAttribute('id', rows[i]);
          if (i == 0) {newRow.setAttribute('class', 'first row')}
          else if (i == grid - 1) {newRow.setAttribute('class', 'last row')}
          else {newRow.setAttribute('class', 'middle row')}
        }
        //appends child element of block to corresponding row on the grid
        let row = document.getElementById(rows[i]);
        row.appendChild(block);
        block.setAttribute('class', 'cell');
        block.setAttribute('id', gridNum);
        block.addEventListener('mouseover', function() {colorCell(this)});
      }
    }
  };
  
  //changes background colors of cells IAW user selection of buttons
  function colorCell(el) {
      let currentColor = window.getComputedStyle(el, null).getPropertyValue("background-color");
    if (activeSelection == 'darken') {
        let bg = 'black';
        changeBackground(el, bg);
    }
    else if (activeSelection == 'lighten') {
        let bg = 'white';
        changeBackground(el, bg);
    }
    else {
        let bg = generateRandomColor();
        changeBackground(el, bg);
        
    }
    
  };
//generates background colors for #random button 
  function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
};

function changeBackground(el, color) {
    el.style.background = color;
};

//deletes all child divs of #etch-grid
function clearGrid() {
    for (row of rows) {
        let rowRemove = document.getElementById(row);
        rowRemove.parentNode.removeChild(rowRemove);
    }
};

function rebuild() {
    clearGrid();
    let grid = promptGrid();
    buildGrid(grid);
};

//add event listeners to all setting buttons
document.querySelectorAll('button.setting').forEach(item => {
    item.addEventListener('click', event => {
        console.log(item);
      activeSelection = item.id

    })
  })

document.querySelector('#clear').addEventListener('click', rebuild);
