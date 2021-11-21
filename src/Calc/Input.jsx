import React  from "react";


export const Input = ({ dispatch }) => {

    const debounce = (fn, ms) => {
        let timeout;
        // console.log('er');
        return function () {
            const fnCall = () => { fn.apply(this, arguments) }
            clearTimeout(timeout);

            timeout = setTimeout(fnCall, ms)
            
        };
        
        

    }
    // const [inputNumber, setInputNumber] = useState(0)

    // const onChange = debounce(dispatch({type: 'changeValue', value: e.target.value}), 500)

    return (
        <div className='inBut'>
           <input type="text"
            placeholder='Введи номер квартиры'
            onChange={(e) =>debounce(dispatch({type: 'changeValue', value: e.target.value}), 5000)}
            // value={inputNumber}
           />
        </div>
    )
}