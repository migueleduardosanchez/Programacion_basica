// 40.- Una empresa guarda las ventas realizadas por sus tres representantes a
// lo largo de doce meses de sus cuatro productos, VENTAS( representante, mes,
// producto ). Queremos proyectar el total de ventas, TOTAL ( mes, producto ),
// para lo cual sumamos las ventas de cada producto de cada mes de todos los
// representantes. Imprimir toda la información.

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

let ventas = [];
let total = [];
const contFrases = async () => {
  for (var i=1; i<=3; i++){
    for (var j=1; j<=12; j++){
      for (var k=1; k<=4; k++){
        console.log(`Ingresa la venta del representante ${i}, del mes ${j} y producto ${k}: `);
        const ventaTexto = await readline();
        const venta = parseFloat(ventaTexto);
        ventas.push({representante: i, mes: j, producto: k, venta: venta});

        if (i==1 && j==1 && k==1){

        for (var m=0; m<=12; m++){
          total[m] = [];
          for (var n=0; n<=4; n++){
            total[m][n] = 0;
          }
        }
        }
        total[j][k] += venta;
      }
    }
  }

  console.log(`Ventas: ${JSON.stringify(ventas)}`);
  console.log(`Total: ${JSON.stringify(total)}`);

}

contFrases();
