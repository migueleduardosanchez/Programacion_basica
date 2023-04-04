// 37.-Cargar las notas de los alumnos de un colegio en función del número de
// cursos y del número de alumnos por curso.

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

let calificaciones = [];
const contFrases = async () => {
  console.log(`Ingresa el numero de cursos: `);
  const cursos = await readline();
  console.log(`Ingresa el numero de alumnos: `);
  const alumnos = await readline();

  for (var i=0; i<cursos; i++){
    if (i>= calificaciones.length){
      calificaciones.push([]);
    }

    for (var j=0; j<alumnos; j++){
      console.log(`Ingresa la calificacion del alumno ${j+1} del curso ${i+1}`);
      const calificacionTexto = await readline();
      const calificacion = parseFloat(calificacionTexto);
      if (j >= calificaciones[i].length){
        calificaciones[i].push(calificacion);
      }else{
        calificacion[i][j] = calificacion;
      }
    }
  }

  console.log(calificaciones)
}

contFrases();
