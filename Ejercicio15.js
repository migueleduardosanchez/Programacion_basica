// 15.- Introducir dos números por teclado. Imprimir los números naturales que
// hay entre ambos números empezando por el más pequeño, contar cuántos hay y
// cuántos de ellos son pares. Calcular la suma de los impares.

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

let impares = 0;
let pares = 0;
let cont = 0;
var numeros = [];
const contFrases = async () => {
  for (var i = 1; i<=2; i++) {
    console.log(`Ingresa el numero ${i}: `);
    const j = await readline();
    numeros.push(j);
  }
  var numeroMenor = Math.min(...numeros);
  var numeroMayor = Math.max(...numeros);

  for (numeroMenor; numeroMenor <= numeroMayor; numeroMenor++){
    console.log(numeroMenor);
    if (numeroMenor %2 == 0){
      pares++;
    }else{
      impares += numeroMenor;
    }
    cont++;
  }

  console.log(`Hay ${cont} numeros, de los cuales ${pares} son pares`);
  console.log(`La suma de los impares es: ${impares}`);
}

contFrases();
