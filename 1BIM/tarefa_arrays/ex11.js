function menorElemento(arr) {
    let menor = arr[0];
    let posicao = 0;
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < menor) {
        menor = arr[i];
        posicao = i;
      }
    }
    
    console.log(`Menor: ${menor}, Posição: ${posicao}`);
  }
  
menorElemento([ 1, 2, 3, 4, -5, 6, 7, 8 , 9, 10]);  