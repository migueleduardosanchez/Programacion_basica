// 7.- Introducir tantas frases como queramos y contarlas.

let cont = 0;

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
    console.log('Ingresa una frase o presiona Enter para finalizar: ');
    const frase = await readline();
    if (!frase) {
      break;
    }
    cont++;
  }

  console.log(`Ingresaste ${cont} frases.`);
}

contFrases();
