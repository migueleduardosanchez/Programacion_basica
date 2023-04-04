// 22.- Introducir una frase por teclado. Imprimirla cinco veces en filas
// consecutivas, pero cada impresión ir desplazada cuatro columnas hacia la
// derecha.

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

  let espacio = "";
  for (var i=1; i<=4; i++) {
      console.log(espacio + frase);
      espacio += "    "
  }
}

contFrases();
