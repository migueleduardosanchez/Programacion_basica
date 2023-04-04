// 30.- Introducir dos números por teclado y mediante un menú, calcule su suma,
// su resta, su multiplicación o su división.

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

var suma = 0;
var resta = 0;
var multiplicacion = 0;
var division = 0;
const contFrases = async () => {
  console.log(`Ingresa un numero: `);
  const numero1 = await readline();
  console.log(`Ingresa otro numero: `);
  const numero2 = await readline();
  console.log(`Ingresa la opcion: `);
  console.log(`1. Suma `);
  console.log(`2. Resta `);
  console.log(`3. Multiplicacion`);
  console.log(`4. Division `);
  const opcion = await readline();

  switch (opcion) {
    case "1":
      suma = numero1 + numero2;
      console.log(`${numero1} + ${numero2} = ${suma}`);
      break;
    case "2":
      resta = numero1 - numero2;
      console.log(`${numero1} - ${numero2} = ${resta}`);
      break;
    case "3":
      multiplicacion = numero1 * numero2;
      console.log(`${numero1} x ${numero2} = ${multiplicacion}`);
      break;
    case "4":
      division = numero1 / numero2;
      console.log(`${numero1} / ${numero2} = ${division}`);
      break;
    default:
      console.log("Opción no válida");
  }
}

contFrases();
