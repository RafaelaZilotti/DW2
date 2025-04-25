function inverterArrayComReverse(arr) {
    const arrayCopia = [...arr];
    return arrayCopia.reverse();
}

function inverterArraySemReverse(arr) {
    const arrayInvertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      arrayInvertido.push(arr[i]);
    }
    
    return arrayInvertido;
  }
  
const x = [1, 2, 3, 4, 5, 6];
  
console.log(inverterArrayComReverse(x));
console.log(inverterArraySemReverse(x));  