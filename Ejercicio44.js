// 44.- Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno
// determinado que introduciremos por teclado.

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

const fs = require('fs');
const csv = require('csv-parser');
const writer = require('csv-writer').createObjectCsvWriter({
  path: 'DATOS.DAT',
  header: ['id', 'nombre', 'apellidos', 'direccion', 'estado']
});

const contFrases = async () => {
  console.log(`Escribe el estado para listar: `);
  const estado = await readline();

  const results = [];
  fs.createReadStream('DATOS.DAT')
    .pipe(csv())
    .on('data', (data) => {
      if (data.estado == estado){
        results.push(data);
      }
    })
    .on('end', () => {
      console.log(results);
    });
}

contFrases();
