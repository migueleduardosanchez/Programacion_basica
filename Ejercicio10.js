// 10.- Introducir un número por teclado y que nos diga si es par o impar.

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
    console.log('Ingresa un numero o cualquier cosa para finalizar: ');
    const numero = await readline();
    if (numero %2 == 0) {
      console.log('Es par');
      break;
    }else if (numero %2 != 0)  {
      console.log('Es impar');
      break;
    } else {
      break;
    }
  }

}

contFrases();
