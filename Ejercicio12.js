// 12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la
// suma de todos los números pares por un lado, y por otro, la de todos los
// impares.

var j = 0;
var k = 0;
for (var i = 1; i <= 100; i++){
    console.log(i);
    if (i %2 == 0){
      j += i;
    }else{
      k += i;
    }
}

console.log(`La suma de pares es: ${j}`);
console.log(`La suma de impares es: ${k}`);
