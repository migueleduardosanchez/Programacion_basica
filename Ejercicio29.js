// 29.- Simular cien tiradas de dos dados y contar las veces que entre los dos
// suman 10.

let cont = 0;
for (let i = 0; i < 100; i++) {
    let dado1 = Math.floor(Math.random() * 6);
    let dado2 = Math.floor(Math.random() * 6);

    if (dado1 + dado2 == 10) {
        cont++;
    }
}

console.log(`Salio 10 en ${cont} veces`);
