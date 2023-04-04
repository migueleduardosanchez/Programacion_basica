// 35.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre
// 1 y 100, e imprimirla.

let columna = [];
for (var i=1; i<=4; i++) {
  let fila = [];
  for (var j=1; j<=5; j++) {
      let numero = Math.floor(Math.random() * 100);
      fila.push(numero);
  }
  columna.push(fila);
}

console.log(columna);
