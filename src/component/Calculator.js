import { useState } from "react";
const Calculator = () => {
    const [number, setNumber] = useState(0);

    const addNumber = () => {
        if(number<10){
            setNumber(number+1);
        }
    }
    const subtractNumber = () => {
        if(number>0){
            setNumber(number-1);
        }
        
    }
    return (<div>
        <button onClick={addNumber}>+</button>
        <h3>Number: {number}</h3>
        <button onClick={subtractNumber}>-</button>
    </div>);
}
export default Calculator;