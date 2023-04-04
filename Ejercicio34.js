// 34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la
// lista.

const readline = async () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => readline.question('', input => {
    readline.close();
    resolve(input);
  }));
}

let calificaciones = [];
let encontrado = 0;
const contFrases = async () => {
  for (var i=1; i<=10; i++){
    console.log(`Ingresa la calificacion ${i}: `);
    const calificacion = await readline();
    calificaciones.push(calificacion);
  }

  console.log(`Ingresa la calificacion a buscar: `);
  const buscar = await readline();

  for (i=1; i<=10; i++){
    if (buscar == calificaciones[i]){
      encontrado = 1;
    }
  }

  if (encontrado == 1){
    console.log(`Se encontro`);
  }else{
    console.log(`No se encontro`);
  }
}

contFrases();
