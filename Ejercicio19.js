// 19.- Hacer un programa que simule el funcionamiento de un reloj digital y que
// permita ponerlo en hora.

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
  console.log(`Ingresa la hora: `);
  var hora = await readline();
  console.log(`Ingresa los minutos: `);
  var minutos = await readline();
  console.log(`Ingresa los segundos: `);
  var segundos = await readline();

  let tiempo = setInterval(reloj, 1000);
  function reloj() {
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      minutos++;
      if (minutos == 60) {
        minutos = 0;
        hora++;
        if (hora == 24) {
          hora = 0;
        }
      }
    }
        console.log(`${hora}:${minutos}:${segundos}`);
  }
}

contFrases();
