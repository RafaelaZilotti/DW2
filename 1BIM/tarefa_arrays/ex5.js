const v1 = [1, 2, 3, 4, 5];
const v2 = [];

// a)

function semMap(){
  for (let i = 0; i < v1.length; i++) {
    v2.push(v1[i] ** 2); 
  }
  return v2
}

console.log(semMap(v1));


// b)

function comMap(){
  const v2 = v1.map(numero => numero * numero);
  return v2
}

console.log(comMap(v1));