// 33.- Hacer un programa que lea las calificaciones de un alumno en 10
// asignaturas, las almacene en y calcule e imprima su media.

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

let suma = 0;
let media = 0;
const contFrases = async () => {
  for (let i=1; i<=10; i++){
    console.log(`Ingresa la calificacion ${i}:`);
    let calificacion = await readline();
    suma += calificacion;
  }

  media = suma / 10;
  console.log(`La media es ${media}`);
}

contFrases();
