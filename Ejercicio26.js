// 26.- Introducir una frase por teclado e imprimirla en el centro de la
// pantalla.

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
  console.log(`Ingresa una frase: `);
  const frase = await readline();

  const terminalWidth = process.stdout.columns;
  console.log(frase.padStart((terminalWidth + frase.length) / 2));
}

contFrases();
