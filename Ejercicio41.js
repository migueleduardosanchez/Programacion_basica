// 41.- Hacer un programa que nos permita dar altas en el archivo DATOS.DAT,
// cuyos campos son: ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.

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
const contFrases = async () => {
  console.log(`ID: `);
  const id = await readline();
  console.log(`Nombre: `);
  const nombre = await readline();
  console.log(`Apellidos: `);
  const apellidos = await readline();
  console.log(`DIreccion: `);
  const direccion = await readline();
  console.log(`Estado: `);
  const estado = await readline();

  const datos = `${id},${nombre},${apellidos},${direccion},${estado}\n`;

  fs.writeFile('DATOS.DAT', datos, {flag: 'a'}, (err) =>{
    if (err) throw err;
    console.log('Los datos de han guardado en el archivo DATOS.DAT')
  })
}

contFrases();
