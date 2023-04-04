// 36.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre
// 1 y 100, y hacer su matriz transpuesta.

let columna = [];
for (var i=1; i<=4; i++) {
  let fila = [];
  for (var j=1; j<=5; j++) {
      let numero = Math.floor(Math.random() * 100);
      fila.push(numero);
  }
  columna.push(fila);
}

let transpuesta = [];
for (var i=0; i<columna[0].length; i++) {
   transpuesta[i] = [];
   for (var j=0; j<columna.length; j++) {
       transpuesta[i][j] = columna[j][i];
   }
}

console.log(columna);
console.log(transpuesta);
