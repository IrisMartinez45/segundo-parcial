let valor1 = null;
let operacion = null;

function agregarNumero(num) {
  let pantalla = document.getElementById('pantalla');
  pantalla.value = pantalla.value ? parseInt(pantalla.value) * 10 + num : num;
}

function uno() { agregarNumero(1); }
function dos() { agregarNumero(2); }
function tres() { agregarNumero(3); }
function cuatro() { agregarNumero(4); }
function cinco() { agregarNumero(5); }
function seis() { agregarNumero(6); }
function siete() { agregarNumero(7); }
function ocho() { agregarNumero(8); }
function nueve() { agregarNumero(9); }
function cero() { agregarNumero(0); }

function suma() {
  guardarValorYOperacion('suma');
}

function resta() {
  guardarValorYOperacion('resta');
}

function multiplicacion() {
  guardarValorYOperacion('multiplicacion');
}

function division() {
  guardarValorYOperacion('division');
}

function guardarValorYOperacion(op) {
  valor1 = parseInt(document.getElementById('pantalla').value) || 0;
  operacion = op;
  document.getElementById('pantalla').value = '';
}

function igual() {
  let valor2 = parseInt(document.getElementById('pantalla').value);
  let total = 0;

  if (isNaN(valor2)) {
    Swal.fire("Ingrese un número válido", "", "error");
    return;
  }

  switch (operacion) {
    case 'suma':
      total = valor1 + valor2;
      Swal.fire("¡Suma correcta!", "", "success");
      break;
    case 'resta':
      total = valor1 - valor2;
      Swal.fire("¡Resta correcta!", "", "success");
      break;
    case 'multiplicacion':
      total = valor1 * valor2;
      Swal.fire("¡Multiplicación correcta!", "", "success");
      break;
    case 'division':
      if (valor2 === 0) {
        Swal.fire("No se puede dividir entre 0", "", "error");
        return;
      }
      total = valor1 / valor2;
      Swal.fire("¡División correcta!", "", "success");
      break;
    default:
      Swal.fire("Operación no válida", "", "error");
      return;
  }

  document.getElementById('pantalla').value = total;
  valor1 = total;
  operacion = null;
}

function limpiar() {
  document.getElementById('pantalla').value = '';
  valor1 = null;
  operacion = null;
}
