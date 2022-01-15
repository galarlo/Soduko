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

    // are rows valid?
    for (var row = 0; row < rowsNum; row++) {
        var nonUniqueValues = []
        var uniqueValues = new Set()
        for (var column = 0; column < columnNum; column++) {
            if (board[row][column] !== " ") {
                nonUniqueValues.push(board[row][column])
                uniqueValues.add(board[row][column])
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
            if (board[row][column] !== " ") {
                nonUniqueValues.push(board[row][column])
                uniqueValues.add(board[row][column])
            }
        }
        if (nonUniqueValues.length !== uniqueValues.size) {
            return false
        }
    }

    // are squares valid?
    var squareLength = Math.sqrt(columnNum)
    if (squareLength % 1 !== 0) {
        throw new Error("cannot find block size because columnNum is not a square number")
    }
    for (var i = 0; i < rowsNum; i += squareLength) {
        for (var j = 0; j < columnNum; j += squareLength) {
            var nonUniqueValues = []
            var uniqueValues = new Set()
            for (var ioffset = 0; ioffset < squareLength; ioffset++) {
                for (var joffset = 0; joffset < squareLength; joffset++) {
                    var value = board[i + ioffset][j + joffset]
                    if (value !== " ") {
                        nonUniqueValues.push(value)
                        uniqueValues.add(value)
                    }
                }
            }
            if (nonUniqueValues.length !== uniqueValues.size) {
                return false
            }
        }
    }

    return true
}


export default solveSoduko;