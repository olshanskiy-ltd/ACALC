import React from 'react'

export const Buttons = ({ inputNumber, dispatch }) => {

    
 

    return(
        <div className='buttons'>
            <button className='button' onClick={() => dispatch({ type: 16, flatCount: 64 })}>16</button>
            <button className='button' onClick={() => dispatch({ type: 16, flatCount: 143 })}>16 вертолёт</button>
            <button className='button' onClick={() => dispatch({ type: 12 })}>12</button>
            <button className='button' onClick={() => dispatch({ type: 9, flatCount: 53 })}>9 (53)</button>
            <button className='button'onClick={() => dispatch({ type: 9, flatCount: 36 })}>9 (36)</button>
        </div>
    )
}
