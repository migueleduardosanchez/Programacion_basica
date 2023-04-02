// 8.- Hacer un programa que solo nos permita introducir S o N.

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
  while (true) {
    console.log('Ingresa S o N o presiona Enter para finalizar: ');
    const frase = await readline();
    if (frase.match(/^[SN]$/)) {
      console.log('Letra valida')
    }else {
      console.log('Letra invalida')
      break;
    }
  }

}

contFrases();
