// 14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco
// números que vamos introduciendo por teclado.

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

let i = 1;
var numeros = [];
const contFrases = async () => {
  while (i<=5) {
    console.log(`Ingresa el numero ${i}: `);
    const j = await readline();
    numeros.push(j);
    i++;
  }
  var numeroMenor = Math.min(...numeros);
  var numeroMayor = Math.max(...numeros);

  console.log(`El numero menor es: ${numeroMenor}`);
  console.log(`El numero mayor es: ${numeroMayor}`);
}

contFrases();
