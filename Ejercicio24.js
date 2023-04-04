// 24.- Comprobar si un número mayor o igual que la unidad es primo.

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

var primo = 1;
const contFrases = async () => {
  console.log(`Ingresa un numero: `);
  const numero = await readline();

  for (var i=2; i<numero; i++){
    if (numero %i == 0){
      primo = 0;
    }
  }

  if (primo==1){
    console.log(`Es primo`);
  } else{
    console.log(`No es primo`)
  }
}

contFrases();
