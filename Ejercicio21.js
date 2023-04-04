// 21.- Hacer un programa que calcule independientemente la suma de los pares y
// los impares de los números entre 1 y 1000.

let pares = 0;
let impares = 0;

for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        pares += i;
    } else {
        impares += i;
    }
}

console.log(`La suma de los pares es: ${pares}`);
console.log(`La suma de los impares es: ${impares}`);
