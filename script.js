function solicitarNumero() {
  let numero;
  do {
    let entrada = prompt("Ingresa un número para mostrar la serie de Fibonacci:");
    numero = Number(entrada);

    if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
      alert("Por favor, ingresa un número entero válido mayor que cero.");
    } else {
      break;
    }
  } while (true);

  return numero;
}

function generarFibonacci(cantidad) {
  const serie = [];

  for (let i = 0; i < cantidad; i++) {
    if (i === 0) {
      serie.push(0);
    } else if (i === 1) {
      serie.push(1);
    } else {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
  }

  return serie;
}

function mostrarSerie(serie) {
  console.log("Serie de Fibonacci:");
  console.log(serie.join(", "));
}

const numeroUsuario = solicitarNumero();
const serieFibonacci = generarFibonacci(numeroUsuario);
mostrarSerie(serieFibonacci);