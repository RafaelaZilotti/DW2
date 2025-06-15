import { useState } from "react";

function CalcIMC (){

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [imc, setIMC] = useState(null);
    const [classific, setClassific] = useState('');

    const calculaImc = () => {
        const numPeso = parseFloat(peso);
        const numAltura = parseFloat(altura);
        

        if(!numPeso || !numAltura || numAltura <= 0 || numPeso <= 0){
            setIMC('null');
            setClassific('Digite valores validos');
            return;
        }

        const imcCalc = numPeso / (numAltura * numAltura)
        setIMC(imcCalc.toFixed(2))
        let classificado = ''

        if(imcCalc < 18.5){classificado = 'Baixo peso'}
        else if (imcCalc >= 18.5 && imcCalc <=  24.9){ classificado = 'Peso normal'}
        else if (imcCalc >= 25 && imcCalc <= 29.9){ classificado = 'Excesso de peso'}
        else if (imcCalc >= 30 && imcCalc <= 34.9){ classificado = 'Obesidade de classe 1'}
        else if (imcCalc >= 35 && imcCalc <= 39.9){ classificado = 'Obesidade de classe 2'}
        else if (imcCalc >= 40){ classificado = 'Obesidade de classe 3'}

        setClassific(classificado)
    }


    return (

        <div>
            <h1>Calculadora de IMC</h1>

            <div>
                <label> Peso:</label>
                <input 
                type="number"
                placeholder="Digite seu peso"
                value={peso}
                onChange={(e) => {setPeso(e.target.value)}}
                />
            </div>

            <div>
                <label> Altura:</label>
                <input 
                type="number"
                step="0.01"
                placeholder="Digite sua altura"
                value={altura}
                onChange={(e) => {setAltura(e.target.value)}}
            />

            </div>

            <button onClick={calculaImc} style={{marginTop: '40px'}}>Calcular</button>

            {imc && (
                <div style={{ marginTop: '15px'}}>
                    <p><strong>IMC:</strong> {imc}</p>
                    <p><strong>Classificação:</strong> {classific}</p>
                </div>
            )}
            
        </div>
    );
};

export default CalcIMC;