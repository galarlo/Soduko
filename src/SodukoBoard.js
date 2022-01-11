import React, { useState } from 'react';
import SodukoCell from "./SodukoCell"

function SodukoBoard(props) {
    const [board, setBoard] = useState(createEmptySodukoBoard(props.rowsCount, props.columnsCount))

    const onChange = (row, column, newValue) => {
        var newBoard = [...board]
        newBoard[row][column] = newValue // TODO should it not be in-place?
        setBoard(newBoard)
    }

    var rows = []
    for (var i=0; i<props.columnsCount; i++) {
      var cellsInColumn = []
      for (var j=0; j<props.rowsCount; j++) {
        cellsInColumn.push(<SodukoCell key={i + "," + j} row={j} column={i} value={board[j][i]} onChange={onChange} />)
      }
      rows.push(<div key={i} className="sodukoColumn">{cellsInColumn}</div>)
    }
    return <div className="sodukoBoard">{rows}</div>
}

function createEmptySodukoBoard(rowsCount, columnsCount) {
    var rows = []
    for (var i=0; i<rowsCount; i++) {
        rows.push(Array(columnsCount).fill(" "))
    }
    return rows
}

export default SodukoBoard;