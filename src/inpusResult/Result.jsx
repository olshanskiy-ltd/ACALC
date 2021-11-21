import React from 'react'

export const Result = ({ resultEntrance, resultLevel}) => {

    // const resultEntrance = 0;
    // const resultLevel = 0;


    return(

        <div className='InputResult'>
            <h3>подъезд: {resultEntrance}</h3>
            <h3>этаж: {resultLevel}</h3>
        </div>
    )
}
