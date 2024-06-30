let montoPrestamo;
let tasaInteresAnual;
let numeroAnios;
let tasaInteresMensual;
let numeroPagos;
let pagoMensual;
let totalPagado;
let interesPagado;

function calcularPagoMensual(monto, tasaAnual, anios) {
let tasaMensual = parseInt(tasaAnual / 12);
let pagosTotales = anios * 12;

let pagoMensual;
let saldoRestante = monto;
let sumaPagos = 0;
let sumaInteres = 0;

for (let i = 0; i < pagosTotales; i++) {
let interesMensual = parseInt(saldoRestante * tasaMensual / 100);
let capitalMensual = parseInt(monto / pagosTotales);
pagoMensual = interesMensual + capitalMensual;
sumaPagos += pagoMensual;
sumaInteres += interesMensual;
saldoRestante -= capitalMensual;
}

totalPagado = sumaPagos;
interesPagado = sumaInteres;

return parseInt(sumaPagos / pagosTotales);
}

montoPrestamo = parseInt(prompt("Ingrese el monto del préstamo que el cliente va a solicitar:"));
tasaInteresAnual = parseInt(prompt("Ingresa la tasa de interés anual (en %), del plan de financiación elegido:"));
numeroAnios = parseInt(prompt("Ingresa el número de años en el que quiere financiar el préstamo:"));

pagoMensual = calcularPagoMensual(montoPrestamo, tasaInteresAnual, numeroAnios);

alert("El valor de las cuotas mensuales que el cliente va a abonar es: $" + pagoMensual + "\n" +
      "El total pagado es: $" + totalPagado + "\n" +
      "El monto de interés pagado es: $" + interesPagado);
