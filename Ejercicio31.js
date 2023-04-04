// 31.- Hacer un programa que nos permita introducir un número por teclado y
// sobre él se realicen las siguientes operaciones: comprobar si es primo,
// hallar su factorial o imprimir su tabla de multiplicar.

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
  const numero = await readline();
  console.log(`Ingresa la opcion: `);
  console.log(`1. Comprobar si es primo `);
  console.log(`2. Factorial `);
  console.log(`3. Tabla de multiplicar`);
  const opcion = await readline();

  var primo = 1;
  switch (opcion) {
    case "1":
      for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = 0;
        }
      }
      
      if (primo==1){
        console.log(`Es primo`);
      } else{
        console.log(`No es primo`)
      }
      break;

    case "2":
      function factorial(numero) {
        if (numero == 0) {
            return 1;
        }
        return numero * factorial(numero - 1);
      }
            console.log("El factorial es " + factorial(numero));
      break;

    case "3":
      for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
      }
      break;
    default:
      console.log("Opción no válida");
      break;
  }
}

contFrases();
