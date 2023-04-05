// 45.- Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta
// indexado por el campo ID. Crear un programa que nos permita consultar un
// registro siempre que queramos.

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

const contFrases = async () => {
  console.log(`Escribe el id para listar: `);
  const id = await readline();

  const results = [];
  fs.createReadStream('DATOS.DAT')
    .pipe(csv())
    .on('data', (data) => {
      if (data.id == id){
        results.push(data);
      }
    })
    .on('end', () => {
      console.log(results);
    });
}

contFrases();
