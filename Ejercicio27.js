// 27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.

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

var resultado = 0;
const contFrases = async () => {
  console.log(`Ingresa un numero: `);
  const numero = await readline();
  for (var i=0; i<=10; i++){
    resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

contFrases();
