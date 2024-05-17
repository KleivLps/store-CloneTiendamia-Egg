// Definición de los objetos rectángulo
const rectangulo1 = { altura: 2, ancho: 3 };
const rectangulo2 = { altura: 5, ancho: 7 };
const rectangulo3 = { altura: 6, ancho: 4 };

// Importa las funciones de los módulos
import { perimetro } from './perimetro.js';
import { area } from '/area.js';

// Definición de los objetos rectángulo

// Función para imprimir la tabla en la vista
function imprimirTabla() {
  console.log('Rectángulo\tAltura\tAncho\tPerímetro\tÁrea');
  [rectangulo1, rectangulo2, rectangulo3].forEach(rect => {
    console.log(`\t\t${rect.altura}\t${rect.ancho}\t${perimetro(rect)}\t\t${area(rect)}`);
  });
}

// Llamada a la función para imprimir la tabla
imprimirTabla();