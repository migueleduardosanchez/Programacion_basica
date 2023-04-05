// 43.- Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar
// modificaciones cuantas veces deseemos.

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
  console.log(`Escribe el ID para modificarlo: `);
  const id = await readline();
  console.log(`Escribe el nuevo nombre: `);
  const nombre = await readline();
  console.log(`Escribe el nuevo apellido `);
  const apellido = await readline();
  console.log(`Escribe el la nueva direccion: `);
  const direccion = await readline();
  console.log(`Escribe el nuevo estado: `);
  const estado = await readline();

  const results = [];
  fs.createReadStream('DATOS.DAT')
    .pipe(csv())
    .on('data', (data) => {
      if (data.id != id){
        results.push(data);
      }else{
        const modifiedData = {
          id: id,
          nombre: nombre,
          apellido: apellido,
          direccion: dieccion,
          estado: estado
        };
        results.push(modifiedData);
      }
    })
    .on('end', () => {
      writer.writeRecords(results)
            .then(() => {
          console.log(`Registro con ID ${id} modificado exitosamente`);
        });
    });
}

contFrases();
