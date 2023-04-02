// 9.- Introducir un número por teclado y que nos diga si es positivo o
// negativo.

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
  while (true) {
    console.log('Ingresa un numero o 0 para finalizar: ');
    const numero = await readline();
    if (numero > 0 ) {
      console.log('Es positivo')
    }else if (numero < 0)  {
      console.log('Es negativo')
    }else if (numero == 0){
      break;
    } else {
      continue;
    }
  }

}

contFrases();
