import { useState } from "react";
import Result from "./Result";
import Info from "./Info";

function Imc(){

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const calculateImc = () => {
        const peso = parseFloat(input1) || 0;
        const altura = parseFloat(input2) || 0;
        return peso/(altura*altura)
    }

    return(
        <div>
            <Info label = "Peso" value={input1} onChange={(e) => setInput1(e.target.value)}/>
            <Info label = "Altura" value={input2} onChange={(e) => setInput2(e.target.value)}/>
            <Result calc={calculateImc}/>
        </div>
    )
    
}

export default Imc