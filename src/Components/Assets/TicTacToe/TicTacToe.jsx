import React, { useState } from 'react'
import './TicTacToe.css'
import cross_icon from '../cross.png'
import zero_icon from '../zero.png'

let data = ["", "", "", "", "", "", "", "", ""]

let [count, setCount] = useState(0);
let [lock, setLock] = useState(false);

const toggle = (w, num) => {

}

const TicTacToe = () => {
    return (
        <div className='container'>
            <h1 className='title'>Tic Tac Toe in <span> React</span></h1>
            <div className='board'>
                <div className="row1">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row2">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row3">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
            </div>
            <button className='reset'>Reset</button>
        </div>
    )
}

export default TicTacToe