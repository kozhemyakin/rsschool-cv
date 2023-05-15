document.addEventListener('DOMContentLoaded', () => {
  const containerDiv = document.createElement('div');
  const gridDiv = document.createElement('div');
  const resultsDiv = document.createElement('div');
  document.body.appendChild(containerDiv);
  containerDiv.setAttribute("class", "container");
  gridDiv.setAttribute("class", "grid");
  resultsDiv.setAttribute("class", "results");
  containerDiv.appendChild( gridDiv );
  containerDiv.appendChild( resultsDiv );
  let height = 10
  let bombsQty = 10
  let flags = 0
  let cells = []
  let isOver = false
  const grid = document.querySelector('.grid')
  const result = document.querySelector('.results')

  function createBoard() {
    const allBombs = Array(bombsQty).fill('bomb')
    const emptyBombs = Array(height*height - bombsQty).fill('valid')
    const currentSquare = emptyBombs.concat(allBombs)
    const randomBombs = currentSquare.sort(() => Math.random() -0.5)

    for(let i = 0; i < height*height; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      square.classList.add(randomBombs[i])
      grid.appendChild(square)
      cells.push(square)

      square.addEventListener('click', function(e) {
        click(square)
      })

      square.oncontextmenu = function(e) {
        e.preventDefault()
        addFlag(square)
      }
    }

    for (let i = 0; i < cells.length; i++) {
      let total = 0
      const isLeftEdge = (i % height === 0)
      const isRightEdge = (i % height === height -1)
    
      if (cells[i].classList.contains('valid')) {
        const addBombCountIfValid = (index) => {
            if (cells[index].classList.contains('bomb')) {
              total ++
            }
        }
      
        if (i > 0 && !isLeftEdge) addBombCountIfValid(i - 1)
        if (i > 9 && !isRightEdge) addBombCountIfValid(i + 1 -height)
        if (i > 10) addBombCountIfValid(i - height)
        if (i > 11 && !isLeftEdge) addBombCountIfValid(i - 1 -height)
        if (i < 98 && !isRightEdge) addBombCountIfValid(i + 1)
        if (i < 90 && !isLeftEdge) addBombCountIfValid(i - 1 +height)
        if (i < 88 && !isRightEdge) addBombCountIfValid(i + 1 +height)
        if (i < 89) addBombCountIfValid(i + height)
        
        cells[i].setAttribute('data', total)
      }
    }
  }
  createBoard()

  function addFlag(square) {
    if (isOver) return
    if (!square.classList.contains('checked') && (flags < bombsQty)) {
      if (!square.classList.contains('flag')) {
        square.classList.add('flag')
        square.innerHTML = ' 🚩'
        flags ++

        checkForWin()
      } else {
        square.classList.remove('flag')
        square.innerHTML = ''
        flags --

      }
    }
  }

function click(square) {
    let currentId = square.id
    if (isOver) return
    if (square.classList.contains('checked') || square.classList.contains('flag')) return
    if (square.classList.contains('bomb')) {
      gameOver(square)
    } else {
      let total = square.getAttribute('data')
      if (total !=0) {
        square.classList.add('checked', (total == 1 ? 'one' : (total == 2 ? 'two' : (total == 3 ? 'three' : 'four'))))
        square.innerHTML = total
        return
      }
      checkSquare(square, currentId)
    }
    square.classList.add('checked')
}


function checkSquare(square, currentId) {
  const directions = [-1, 1, -height, height, -height -1, -height +1, height -1, height +1]
  const isLeftEdge = (currentId % height === 0)
  const isRightEdge = (currentId % height === height -1)

  setTimeout(() => {
    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i]
      const newId = parseInt(currentId) + direction
      const newSquare = document.getElementById(newId)

      if (newSquare && !newSquare.classList.contains('checked')) {
        const newIdX = newId % height
        const newIdY = Math.floor(newId / height)
        const currentIdX = currentId % height
        const currentIdY = Math.floor(currentId / height)
        const isAdjacent = Math.abs(newIdX - currentIdX) <= 1 && Math.abs(newIdY - currentIdY) <= 1

        if (isAdjacent) {
          click(newSquare)
        }
      }
    }
  }, 10)
}


  const gameOver = square => {
    result.innerHTML = 'BOOM! Game Over!'
    isOver = true
  
    document.querySelectorAll('.bomb').forEach(bomb => {
      bomb.innerHTML = '💣'
      bomb.classList.remove('bomb')
      bomb.classList.add('checked')
    })
}

function checkForWin() {
  let matches = 0

    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('flag') && cells[i].classList.contains('bomb')) {
        matches ++
      }
      if (matches === bombsQty) {
        result.innerHTML = 'YOU WIN!'
        isOver = true
      }
    }
  }
})