// 11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que
// introducimos por teclado.

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

let cont = 0;
const contFrases = async () => {
  while (true) {
    console.log('Ingresa el numero limite: ');
    const numero = await readline();
    for (var i = 1; i <= numero; i++){
      if (i %3 == 0){
        console.log(i);
        cont++;
      }
    }
    console.log(`fueron ${cont} miltiplos de 3`)
    break;
  }

}

contFrases();
