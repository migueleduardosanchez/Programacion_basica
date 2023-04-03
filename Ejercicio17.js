// 17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de
// números, tal que el segundo sea mayor o igual que el primero.

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

var cont = 0;
var numeros = [];
var multiplos = 0;
const contFrases = async () => {
  for (var i = 1; i<=2; i++) {
    console.log(`Ingresa el numero ${i}: `);
    const j = await readline();
    numeros.push(j);
  }
  var numeroMenor = Math.min(...numeros);
  var numeroMayor = Math.max(...numeros);

  for (numeroMenor; numeroMenor <= numeroMayor; numeroMenor++){
    if (numeroMenor %2 == 0){
      console.log(numeroMenor);
      multiplos += numeroMenor;
      cont++;
    }
  }


  console.log(`Hay ${cont} multiplos de 2`);
  console.log(`La suma de los multiplos es: ${multiplos}`);
}

contFrases();
