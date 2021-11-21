import React, { useReducer } from 'react'
import './calc.scss'
import { Input } from './Input'
import { Buttons } from "../buttons/Buttons";
import { Result } from '../inpusResult/Result';

const reducer = (state, action) => {
    // console.log(action.value)
    if (action.type !== 'changeValue' && +state.inputNumber === 0 ) {
    return {
        ...state,
        entrance: 0,
        level: 0
        }
     }

    

    switch(action.type){
        
        case 16 : {
            if(action.flatCount === 64){
            
            return {
                    ...state,
                    entrance: Math.ceil(state.inputNumber / 64),


                    level: Math.ceil((state.inputNumber - 64 * Math.floor(state.inputNumber / 64)) / 4) || 16 
                }
            }
            if(action.flatCount === 143){
                if(state.inputNumber > 143){
                    return {
                        ...state,
                        entrance: `\n неверный \n номер \n квартиры`
                    }
                    
                } else
                return {
                    ...state,
                    entrance: Math.ceil(state.inputNumber / 143),


                    // level: Math.ceil((state.inputNumber - 143 * Math.floor(state.inputNumber / 143)) / 9) || 16 
                    

                    level: Math.ceil((state.inputNumber - 143 * Math.floor(state.inputNumber / 143)) / 9) === 0 ? 
                        16
                        :
                        Math.ceil((state.inputNumber - 143 * Math.floor(state.inputNumber / 143) +1) / 9)
                }
            }
            break
            
        }
        case 12 : {
            return {
                ...state,
                entrance: Math.ceil(state.inputNumber / 48),


                level: Math.ceil((state.inputNumber - 48 * Math.floor(state.inputNumber / 48)) / 4) || 1 
            }
        }
        case 9 : {
           
            
            if(action.flatCount === 53){
                
                // console.log(Math.ceil(((state.inputNumber - 53 * Math.floor(state.inputNumber / 53))) / 6));
                        return {
                        ...state,
                       
                        entrance: Math.ceil(state.inputNumber / 53),
                            
                        
                        // level: Math.ceil(((state.inputNumber - 53 * Math.floor(state.inputNumber / 53)) + 1) / 6) 

                        level: Math.ceil((state.inputNumber - 53 * Math.floor(state.inputNumber / 53)) / 6) === 0 ? 
                        9
                        :
                        Math.ceil((state.inputNumber - 53 * Math.floor(state.inputNumber / 53) +1) / 6)

                    }
                    
                }
            
            if(action.flatCount === 36){
                
                    return {
                        ...state,
                        entrance: Math.ceil(state.inputNumber / 36),
        
        
                        level: Math.ceil((state.inputNumber - 36 * Math.floor(state.inputNumber / 36)) / 4) || 1 
                    }
                
            }
            // return state;

            break;
        
            
        }
        case 'changeValue': {
            return{
                ...state,
                inputNumber: action.value
            }
        }
        
        default:
            return state
    }
}


export const RootComponent = () => {

    // const [inputNumber, setInputNumber] = useState(0)
    // const [resultEntrance, setResultEntrance] = useState(0)
    // const [resultLevel, setResultLevel] = useState(0)
    
    const initislState = {
        inputNumber: 0,
        flatCount: null,
        entrance: 0,
        level: 0,

    }

    const [state, dispatch] = useReducer(reducer, initislState)
   
    // console.log(state);

    return(
        
        <div className='mainBox'>
            
            <div className='inRes'>
                <h1 className=''>hello</h1>
                <Input 
                    dispatch={dispatch}
                    // isPressed={isPressed}
                />
                <Result 
                    resultEntrance={state.entrance}
                    resultLevel={state.level}
                    
                    

                />
                {/* <button className='button'>restart</button> */}
            </div>
            
            <Buttons 
                className='buttons'
                // inputNumber={inputNumber} 
                dispatch={dispatch}
                setResultEntrance={state.entrance}
                setResultLevel={state.level}
            
            />
            

        </div>
        
        
    )
}