// 42.- Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.

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
  console.log(`Escribe el ID para darlo de baja: `);
  const id = await readline();

  const results = [];
  fs.createReadStream('DATOS.DAT')
    .pipe(csv())
    .on('data', (data) => {
      if (data.id != id){
        results.push(data);
      }
    })
    .on('end', () => {
      writer.writeRecords(results)
            .then(() => {
          console.log(`Registro con ID ${id} eliminado exitosamente`);
        });
    });
}

contFrases();
