// 20.- Calcular el factorial de un número, mediante funciones.

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

const contFrases = async () => {
  console.log(`Ingresa un numero: `);
  var numero = await readline();

  function factorial(numero) {
    if (numero == 0) {
        return 1;
    }
    return numero * factorial(numero - 1);
    }
        console.log("El factorial es " + factorial(numero));
  }

contFrases();
