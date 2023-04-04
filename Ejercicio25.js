// 25.- Introducir un número menor de 5000 y pasarlo a numero romano.

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

let espacio = '';
const contFrases = async () => {
  console.log(`Ingresa un numero: `);
  const numero = await readline();

  function romano(numero) {
  const valores = [
    { valor: 1000, romano: 'M' },
    { valor: 900, romano: 'CM' },
    { valor: 500, romano: 'D' },
    { valor: 400, romano: 'CD' },
    { valor: 100, romano: 'C' },
    { valor: 90, romano: 'XC' },
    { valor: 50, romano: 'L' },
    { valor: 40, romano: 'XL' },
    { valor: 10, romano: 'X' },
    { valor: 9, romano: 'IX' },
    { valor: 5, romano: 'V' },
    { valor: 4, romano: 'IV' },
    { valor: 1, romano: 'I' }
  ];

  for (var i = 0; i < valores.length; i++) {
    while (numero >= valores[i].valor) {
      espacio += valores[i].romano;
      numero -= valores[i].valor;
    }
  }

  return espacio;
  }

  console.log(`${numero} en romano es: ${romano(numero)}`)
}

contFrases();
