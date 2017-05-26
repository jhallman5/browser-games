$(document).ready( function(){

  const generateBoard = () => {
    for(let j = 1; j < 9; j++) {
      for(let i = 1; i < 9; i++) {
        let columnPattern;
        if(j % 2 === 1 ){
          columnPattern = 'blackFirst'
        } else {
          columnPattern = 'whiteFirst'
        }
        const square = `<div class=square
          data-pattern=${columnPattern}
          data-column=${i}
          data-row=${j}
          data-piece=NULL>
        </div>`
        $('.board').append(square)
      }
    }
  }

  const drawPiece = (color, row, column, piece, unicodeWhite, unicodeBlack) => {
    if(color === 'white'){
      $(`div[data-row=${row}][data-column=${column}]`)
        .addClass('piece')
        .attr('data-piece', 'white ' + piece)
        .text(unicodeWhite)
    }else{
      $(`div[data-row=${row}][data-column=${column}]`)
        .addClass('piece')
        .attr('data-piece', 'black ' + piece)
        .text(unicodeBlack)
    }
  }

  const erasePiece = (row, column) => {
    $(`div[data-row=${row}][data-column=${column}]`).text('')
  }

  const drawPawn = (color, row, column) => {
    drawPiece(color, row, column, 'pawn', '\u2659', '\u265F')
  }

  const drawKnight = (color, row, column) => {
    drawPiece(color, row, column, 'knight', '\u2658', '\u265E')
  }

  const drawBishop = (color, row, column) => {
    drawPiece(color, row, column,'bishop', '\u2657', '\u265D')
  }

  const drawRook = (color, row, column) => {
    drawPiece(color, row, column, 'rook', '\u2656', '\u265C')
  }

  const drawQueen = (color, row, column) => {
    drawPiece(color, row, column, 'queen', '\u2655', '\u265B')
  }

  const drawKing = (color, row, column) => {
    drawPiece(color, row, column, 'king', '\u2654', '\u265A')
  }

  const setUpNewGame = () => {
    generateBoard()

    drawRook('black',8,1)
    drawKnight('black',8,2)
    drawBishop('black',8,3)
    drawQueen('black',8,4)
    drawKing('black',8,5)
    drawBishop('black',8,6)
    drawKnight('black',8,7)
    drawRook('black',8,8)
    drawPawn('black',7,1)
    drawPawn('black',7,2)
    drawPawn('black',7,3)
    drawPawn('black',7,4)
    drawPawn('black',7,5)
    drawPawn('black',7,6)
    drawPawn('black',7,7)
    drawPawn('black',7,8)

    drawRook('white', 1, 1)
    drawKnight('white', 1, 2)
    drawBishop('white', 1, 3)
    drawQueen('white', 1, 4)
    drawKing('white', 1, 5)
    drawBishop('white', 1, 6)
    drawKnight('white', 1, 7)
    drawRook('white', 1, 8)
    drawPawn('white', 2, 1)
    drawPawn('white', 2, 2)
    drawPawn('white', 2, 3)
    drawPawn('white', 2, 4)
    drawPawn('white', 2, 5)
    drawPawn('white', 2, 6)
    drawPawn('white', 2, 7)
    drawPawn('white', 2, 8)
  }

  $('.board').on('click', '.piece', function(event) {

    const target = event.target

    if(target.dataset.piece === 'white pawn') {
      $(`div[data-column=${target.dataset.column}][data-row=${parseInt(target.dataset.row,10) + 1}]`)
        .removeAttr('data-pattern')
        .addClass('highlight')

        $(`div[data-column=${target.dataset.column}][data-row=${parseInt(target.dataset.row,10) + 2}]`)
          .removeAttr('data-pattern')
          .addClass('highlight')
    }
  })
  setUpNewGame()
})
