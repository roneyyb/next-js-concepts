
"use client"


import React from 'react'
import Square from './Square'

function Board({ currentStatus, onClickBox }: { currentStatus: Array<null | string>, onClickBox: Function }) {

    return (
        <div className=' flex flex-col'>
            <div className=' flex '>
                <Square text={currentStatus[0] || ""} onClick={() => {
                    onClickBox(0)
                }} />
                <Square text={currentStatus[1] || ""} onClick={() => {
                    onClickBox(1)
                }} />
                <Square text={currentStatus[2] || ""} onClick={() => {
                    onClickBox(2)
                }} />
            </div>
            <div className=' flex '>
                <Square text={currentStatus[3] || ""} onClick={() => {
                    onClickBox(3)
                }} />
                <Square text={currentStatus[4] || ""} onClick={() => {
                    onClickBox(4)
                }} />
                <Square text={currentStatus[5] || ""} onClick={() => {
                    onClickBox(5)
                }} />
            </div>
            <div className=' flex '>
                <Square text={currentStatus[6] || ""} onClick={() => {
                    onClickBox(6)
                }} />
                <Square text={currentStatus[7] || ""} onClick={() => {
                    onClickBox(7)
                }} />
                <Square text={currentStatus[8] || ""} onClick={() => {
                    onClickBox(8)
                }} />
            </div>
        </div>
    )
}

export default Board