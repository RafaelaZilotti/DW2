const v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const v2 = [];


// a)

function semFilter(){

  for (let i = 0; i < v1.length; i++) {
    if (v1[i] % 2 === 0) {  
      v2.push(v1[i]);
    }
  }
  return v2
}

console.log(semFilter(v1)); 

// b)

function comFilter(){
  const v2 = v1.filter(numero => numero % 2 === 0);
  return v2
}


console.log(comFilter(v1));