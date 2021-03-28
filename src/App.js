import React from 'react';
import {
    generateSudokuList,
    resetList,
    solveResult, verifySudoRes,
} from './utils/sudoku.js'
import {KeyBoard} from "./components/KeyBoard";
import {Table} from "./components/Table";
import {initialBoards} from "./initialBoards";
import {Button} from 'react-bootstrap';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const randomSelectedBoard = generateSudokuList(initialBoards[Math.floor(Math.random() * initialBoards.length)])
        const board = solveResult(randomSelectedBoard)
        this.state = {
            board: board,
            selectedKey: [],
            isPass: false,
            isSolution: false,
        }
    }

    keyBoardClick = (num) => {
        const {board, selectedKey} = this.state;
        if (selectedKey.length > 0) {
            board[selectedKey[0]][selectedKey[1]].value = num;
            this.setState({
                board: board
            })
        }
    }

    setKey = (x, y) => {
        const {board} = this.state;
        if (!board[x][y].origin) {
            this.setState({
                selectedKey: [x, y]
            })
        }
    }

    submit = () => {
        const {board} = this.state;
        this.setState({
            isPass: verifySudoRes(board)
        })
    }

    render() {
        const {board, selectedKey, isPass, isSolution} = this.state;
        return (
            <div className="App">
                <Table
                    setKey={this.setKey}
                    board={board}
                />
                <KeyBoard disabled={selectedKey.length === 0} onClick={this.keyBoardClick}/>
                {isPass && <p className='text-success'>
                    Pass
                </p>}
                <Button className="btn-primary"
                        onClick={() => {
                            this.submit()
                        }}>
                    Submit
                </Button>

                <Button className="btn-success mr-1 ml-1"
                        onClick={() => {
                            this.setState({isSolution: true})
                        }}>
                    Show Solution
                </Button>

                <Button className="btn-secondary"
                        onClick={() => {
                            this.setState({board: resetList(board)})
                        }}>
                    Reset
                </Button>
                {isSolution && <Table
                    setKey={this.setKey}
                    board={board}
                    isSolution={isSolution}
                />}
            </div>
        )
    }
}
