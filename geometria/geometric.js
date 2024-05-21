// Definición de los rectángulos
const rectangulo1 = { ancho: 5, altura: 3 };
const rectangulo2 = { ancho: 10, altura: 4 };
const rectangulo3 = { ancho: 2, altura: 8 };
// Funciones para calcular perímetro y área
function calcularPerimetro(ancho, altura) {
return 2 * (ancho + altura);
}
function calcularArea(ancho, altura) {
return ancho * altura;
}

// geometric.js
import { Perimetro } from './perimetro.js';
import { Area } from './area.js';
import { rectangulos } from './rectangleData.js';
function imprimirResultados() {
const tabla = document.getElementById('resultado');
rectangulos.forEach((rect, index) => {
const fila = document.createElement('tr');
fila.innerHTML = `
<td>Rectángulo ${index + 1}</td>
<td>${rect.ancho}</td>
<td>${rect.altura}</td>
<td>${calcularPerimetro(rect.ancho, rect.altura)}</td>
<td>${Area(rect.ancho, rect.altura)}</td>
`;
tabla.appendChild(fila);
});
}
document.addEventListener('DOMContentLoaded', imprimirResultados);