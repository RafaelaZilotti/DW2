
function Botoes({onIncrement, onDecrement}){
    return (
        <div>
            <button onClick={onDecrement} style={{marginRight: '10px', background:"red", border:"2px solid darkred", borderRadius:"5px", width:"20px"}}>-</button>
            <button onClick={onIncrement} style={{marginRight: '10px', background:"lightgreen", border:"2px solid darkgreen", borderRadius:"5px", width:"20px"}}>+</button>
        </div>
    );
}

export default Botoes;