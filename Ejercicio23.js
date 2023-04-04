// 23.- Hacer un programa que imprima los números del 0 al 100, controlando las
// filas y las columnas.

for (let i = 0; i <= 100; i++) {
  if (i % 10 == 0 && i != 0) {
    console.log("\n"); // Salto de línea para crear filas
  }
  process.stdout.write(i.toString().padEnd(3));
}
