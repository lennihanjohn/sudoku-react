
export function generateSudokuList(list){
    return ArrayMap(list, (value) => {
        return {
            value: value,
            origin: value !== 0,
            solver: value
        }
    })
}

export function ArrayMap(array, action) {
    return array.map(item => {
        //Loop itself again if object is arrray
        if (Object.prototype.toString.call(item) === "[object Array]") {
            return ArrayMap(item, action)
        } else {
            return action(item)
        }
    })
}

export function verifySudoRes(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            //Compare the value and solver if matches
            if (board[row][col].value !== board[row][col].solver){
                return false
            }
        }
    }
    return true
}

export function resetList(board){
    return ArrayMap(board, (item) => {
        //Reset list to 0 if not origin
        if (!item.origin){
            item.value = 0
        }
        return item
    })
}

export function solveResult(board) {
    solveFunc(board)
    return board
}

//find the place needs to get solver
const findEmpty = (bo) => {
    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            if(bo[r][c].solver === 0) {
                return [r, c]
            }
        }
    }
    return null
}


const validateUniqueness = (num, pos, bo) => {
    const [r, c] = pos;

    // Check row if num is uniqueness
    for(let i = 0; i < 9; i++) {
        if(bo[i][c].solver === num && i !== r) {
            return false;
        }
    }

    // Check column if num is uniqueness
    for(let i = 0; i < 9; i++) {
        if(bo[r][i].solver === num && i !== c) {
            return false;
        }
    }

    // Check box if num is uniqueness
    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;
    for(let i = boxRow; i < boxRow + 3; i++) {
        for(let j = boxCol; j < boxCol + 3; j++) {
            if(bo[i][j].solver === num && i !== r && j !== c) {
                return false
            }
        }
    }
    return true
}

const solveFunc = (board) => {
    const currPos = findEmpty(board)
    if(currPos === null) {
        return true
    }

    for(let i = 1; i < 10; i++) {
        const currNum = i
        const isValid = validateUniqueness(currNum, currPos, board)

        if(isValid) {
            const [y, x] = currPos;
            board[y][x].solver = currNum
            if(solveFunc(board)) {
                return true
            }
            board[y][x].solver = 0
        }
    }
    return false
}