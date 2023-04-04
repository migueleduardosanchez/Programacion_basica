// 38.-Ordenar una matriz de M filas y N columnas por la primera columna
// utilizando el método SHELL (por inserción).

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

function ordenarShell(matriz){
  let n = matriz.length;
  let incremento = Math.floor(n/2);
  while (incremento > 0){
    for (let i=incremento; i<n; i++){
      let j=i;
      let temp = matriz[i];
      while (j>= incremento && matriz[j - incremento]>temp){
        matriz[j] = matriz[j - incremento];
        j -= incremento;
      }
      matriz[j] = temp;
    }
    incremento = Math.floor(incremento / 2);
  }
  return matriz;
}

let matriz = [];
const contFrases = async () => {
  console.log(`Ingresa el numero de filas: `);
  const filas = await readline();
  console.log(`Ingresa el numero de columnas: `);
  const columnas = await readline();

  for (var i=0; i<filas; i++){
    matriz[i] = [];
    for (var j=0; j<columnas; j++){
      console.log(`Ingresa el valor de la fila ${i}, y columna ${j}: `);
      const valorTexto = await readline();
      const valor = parseFloat(valorTexto);
      if (j >= matriz[i].length){
        matriz[i].push(valor);
      }else{
        matriz[i][j] = valor;
      }
    }
  }

  console.log(`Matriz sin ordenar: ${matriz}`);
  matriz = ordenarShell(matriz);
  console.log(`Matriz ordenada: ${matriz}`);
}

contFrases();
