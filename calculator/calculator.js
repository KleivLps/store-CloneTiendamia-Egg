function solicitarNumeros() {
    const num1 = prompt("Introduce el primer número:");
    const num2 = prompt("Introduce el segundo número:");
    dividir(num1, num2, manejarError);
    }
    function dividir(num1, num2, callback) {
    if (isNaN(num1) || isNaN(num2)) {
        callback('Error: Ambos valores deben ser numéricos.');
return;
}
num1 = parseFloat(num1);
num2 = parseFloat(num2);
if (num2 === 0) {
callback('Error: No se puede dividir por cero.');
return;
}
const resultado = num1 / num2;
mostrarResultado(resultado);
}
function manejarError(mensaje) {
alert(mensaje);
}
function mostrarResultado(resultado) {
const contenedor = document.getElementById('resultado');
contenedor.innerHTML = `El resultado de la división es:
${resultado}`;
}
// Iniciar la solicitud de números al cargar la página
document.addEventListener('DOMContentLoaded', solicitarNumeros);