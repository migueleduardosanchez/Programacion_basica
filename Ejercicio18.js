// 18.- Hacer un programa que cuente las veces que aparece una determinada letra
// en una frase que introduciremos por teclado.

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

var cont=0;
const contFrases = async () => {
  console.log(`Ingresa una frase: `);
  const frase = await readline();

  console.log(`Ingresa una letra: `);
  const letra = await readline();

  for (let i=0; i< frase.length; i++){
    if (letra == frase[i]){
      cont++;
    }
  }
  console.log(`la letra aparece ${cont} veces en la frase`);
}

contFrases();
