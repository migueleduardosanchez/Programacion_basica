// 39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer
// elemento valga 1, el segundo 2, el tercero 3 y así sucesivamente.

let tabla = [];
for (var i=0; i<3; i++) {
  tabla[i] = [];
  for (var j=0; j<4; j++) {
    tabla[i][j] = [];
    for (var k = 0; k < 5; k++) {
      tabla[i][j][k] = i*20 + j*5 + k + 1;
    }
  }
}

console.log(tabla);
