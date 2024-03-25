document.addEventListener("DOMContentLoaded", () => {
  let grid = document.querySelector(".grid");
  let width = 8;
  let squares = [];

  const candyColors = [
     'red',
     'yellow',
     'blue',
     'green',
     'purple',
     'orange'
  ]

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      let randomColor = Math.floor( Math.random()  *  candyColors.length);
      square.style.backgroundColor = candyColors[randomColor]; 
      square.setAttribute('draggable',true);

      square.setAttribute('id',i);
      grid.appendChild(square);
      squares.push(square);

    }
  }

  createBoard();
    let colorBeingDragged;
    let colorBeingReplaced;
    let colorIdBeingDragged;
    let colorIdBeingReplaced;
// adding some comments 

  squares.forEach( square => square.addEventListener('dragstart',dragStart))
  squares.forEach(square => square.addEventListener('dragend',dragEnd))
  squares.forEach(square => square.addEventListener('dragover', dragOver))
  squares.forEach(square => square.addEventListener('dragenter',dragEnter))
  squares.forEach(square => square.addEventListener('dragleave',dragLeave))
  squares.forEach(square => square.addEventListener('dragdrop',dragDrop))

  function dragStart(){
   colorBeingDragged = this.style.backgroundColor
   colorIdBeingDragged = parseInt(this.id); 
   console.log(colorBeingDragged);
    console.log(this.id,'dragstart');   
  }


  function dragEnd(){
    console.log(this.id, 'dragend');
  }


  function dragOver(){
    console.log(this.id, 'dragover');

  }

  function dragEnter(){
    console.log(this.id,'dragenter');

  }

  function dragLeave(){
    console.log(this.id, 'dragleave');
  }

  function dragDrop(){
    console.log(this.id,'dragdrop');
    colorBeingReplaced = this.style.backgroundColor
    colorIdBeingReplaced = parseInt(this.id)
    squares[colorBeingDragged].style.backgroundColor = colorBeingReplaced;
  
  }
    
  });

