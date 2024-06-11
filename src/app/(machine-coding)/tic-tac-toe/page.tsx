"use client"

import React from 'react'
import Board from './views/Board';

function TicTacToe() {

    const currentMove = React.useRef(0);
    const [currentStatus, setCurrentStatus] = React.useState(Array(9).fill(null));
    const [hasSomeOneWon, setHasSomeOneWon] = React.useState(false);

    const [history, setHistory] = React.useState<Array<Array<number | string>>>([]);


    React.useEffect(() => {

    }, [currentStatus]);

    const checkIfGameWon = (cIndex: number, squares: Array<null | string>[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(cIndex)) {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    setHasSomeOneWon(true)
                    break;
                }
            } else {
                continue;
            }
        }
    }
    return (
        <div className=' ml-4 mt-4 flex flex-col gap-y-2 items-start' >
            {hasSomeOneWon && <h2>{"Game Won"}</h2>}
            <button
                className=' border-[2px] border-amber-300 rounded-md  '
                onClick={() => {
                    setCurrentStatus(Array(9).fill(null));
                    currentMove.current = 0;
                    setHistory([])
                    setHasSomeOneWon(false)
                }}>Reset</button>
            <div className='flex flex-row gap-x-4'>
                <Board
                    currentStatus={currentStatus}
                    onClickBox={(i: number) => {
                        if (currentMove.current % 2 == 0) {
                            setCurrentStatus((cs) => {
                                cs.splice(i, 1, "O");
                                checkIfGameWon(i, cs)
                                return [...cs]
                            })
                            history.push([i, "O"])
                        } else {
                            setCurrentStatus((cs) => {
                                cs.splice(i, 1, "X");
                                checkIfGameWon(i, cs)
                                return [...cs]
                            })
                            history.push([i, "X"])
                        }
                        currentMove.current++;
                    }}
                />
                <div>
                    <ol>
                        {history.map((item, index) => <li onClick={() => {
                            console.log("onclicc")
                            let newGameStatus = Array(9).fill(null);
                            setHistory([...history.slice(0, index + 1)]);
                            history.slice(0, index + 1).forEach(item => newGameStatus[+item[0]] = item[1]);
                            console.log("onclicc", newGameStatus)
                            setCurrentStatus([...newGameStatus])
                        }} key={index}>Turn {index + 1} Value {item[1]} at {+item[0] + 1}</li>)}
                    </ol>
                </div>

            </div>
        </div>
    )
}

export default TicTacToe