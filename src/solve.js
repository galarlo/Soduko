function solveSoduko(board) {
    return solveSodukoDepthFirst(board, 0, 0)
}

function solveSodukoDepthFirst(board, i, j) {
    console.log("at " + i + ", " + j)
    const proceedToNextCell = (board, i, j) => {
        var {nexti, nextj} = next2dIndex(i, board.length, j, board[0].length)
        if (nexti === false) { // no more cells/indexes
            return true
        }
        return solveSodukoDepthFirst(board, nexti, nextj)
    }

    if (board[i][j] !== " ") { // cell is already filled (clue/filled by user, no way to diffrentiate now)
        return proceedToNextCell(board, i, j)
    }
    for (var k=1; k<=9; k++) {
        board[i][j] = k
        if (isValidBoard(board)) {
            var result = proceedToNextCell(board, i, j)
            if (result !== false) {
                return result
            } // else, continue
        }
    }
    board[i][j] = " "
    return false
}

function next2dIndex(i, ilength, j, jlength) {
    if (j < jlength - 1) {
        return {nexti: i, nextj: j + 1}
    } else {
        if (i < ilength - 1) {
            return {nexti: i + 1, nextj: 0}
        }
        else {
            return {nexti: false, nextj: false}
        }
    }
}

function isValidBoard(board) {
    var columnNum = board.length
    var rowsNum = board[0].length
    // TODO row and column are reversed

    // are rows valid?
    for (var row = 0; row < rowsNum; row++) {
        var nonUniqueValues = []
        var uniqueValues = new Set()
        for (var column = 0; column < columnNum; column++) {
            if (board[column][row] !== " ") {
                nonUniqueValues.push(board[column][row])
                uniqueValues.add(board[column][row])
            }
        }
        if (nonUniqueValues.length != uniqueValues.size) {
            return false
        }
    }

    // are column valid?
    for (var column = 0; column < columnNum; column++) {
        var nonUniqueValues = []
        var uniqueValues = new Set()
        for (var row = 0; row < rowsNum; row++) {
            if (board[column][row] !== " ") {
                nonUniqueValues.push(board[column][row])
                uniqueValues.add(board[column][row])
            }
        }
        if (nonUniqueValues.length !== uniqueValues.size) {
            return false
        }
    }

    // are squares valid?
    // var squareLength = Math.sqrt(columnNum)
    // if (squareLength % 1 != 0) {
    //     throw new Error("cannot find block size because columnNum is not a square number")
    // }


    return true
}


export default solveSoduko;