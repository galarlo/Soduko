import React, { useState } from 'react';
import SodukoCell from "./SodukoCell"
import {solveSoduko, allowedNumbers} from "./SodukoHelpers.js"

function SodukoGame(props) {
    const [board, setBoard] = useState(createSodukoBoard(props.rowsCount, props.columnsCount))
    console.log(board)

    const onChange = (row, column, newValue) => {
        var newBoard = [...board]
        newBoard[row][column] = newValue // TODO should it not be in-place?
        setBoard(newBoard)
    }

    const onSolve = () => {
      if (solveSoduko(board) === false) {
        alert("unsolable soduko")
      }
      setBoard([...board])
    }

    var rows = []
    for (var i=0; i<props.columnsCount; i++) {
      var cellsInColumn = []
      for (var j=0; j<props.rowsCount; j++) {
        cellsInColumn.push(<SodukoCell key={i + "," + j} row={j} column={i} value={board[j][i]} getHints={(row, column) => allowedNumbers(board, row, column)} onChange={onChange} />)
      }
      rows.push(<div key={i} className="sodukoColumn">{cellsInColumn}</div>)
    }
    return <div className='sodukoGame flex flex-col items-center'>
      <div className="sodukoBoard">{rows}</div>
      <button onClick={onSolve} className='border-2 border-green-400 border-opacity-20 
      bg-green-500 bg-opacity-25 hover:bg-opacity-90 mt-2 shadow-md'>Solve Soduko</button>
    </div>
}

function createSodukoBoard(rowsCount, columnCount) {
  var board = createEmptySodukoBoard(rowsCount, columnCount)

  board[1][0] = 4
  board[2][0] = 8
  board[5][0] = 1
  board[6][0] = 7
  board[8][0] = 2
  board[0][1] = 2
  board[1][1] = 7
  board[3][1] = 6
  board[4][2] = 2
  board[5][2] = 7
  board[6][2] = 4
  board[7][2] = 5
  board[0][3] = 8
  board[1][3] = 2
  board[2][3] = 3
  board[4][3] = 9
  board[7][3] = 1
  board[1][4] = 5
  board[5][4] = 8
  board[7][4] = 3
  board[0][5] = 1
  board[4][5] = 5
  board[8][5] = 4
  board[0][6] = 3
  board[2][6] = 7
  board[4][6] = 6
  board[5][6] = 2
  board[7][6] = 4
  board[8][6] = 5
  board[0][7] = 4
  board[5][7] = 5
  board[8][7] = 3
  board[0][8] = 5
  board[1][8] = 1
  board[2][8] = 6
  board[4][8] = 7
  board[5][8] = 4
  board[8][8] = 8
  
  return board

}

function createEmptySodukoBoard(rowsCount, columnsCount) {
    var rows = []
    for (var i=0; i<rowsCount; i++) {
        rows.push(Array(columnsCount).fill(" "))
    }
    return rows
}

export default SodukoGame;