/*
let totalApagar = 0 ;
const cantidadTotal = Number(prompt("¿Cuantos productos va a comprar?"));

for (let index = 1; index <= cantidadTotal; index++){
    const nombre = prompt("¿Que producto desea llevar?");
    const cantidad = Number(prompt("¿Cuanto sale cada unidad?"));
    const precio = Number(prompt("¿Cuanto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar += subtotal;
}
alert("El total a pagar es:" + totalApagar);*/

const cantidad = Number(prompt("Digite cuantos productos va a comprar: "));
let cuenta = 0;
let totalapagar = 0;
console.log(cantidad);

for (let i = 1; i <= cantidad; i++) {
  const nombreProducto = prompt("Indique el producto a comprar: ");
  const cantidadProducto = Number(prompt("Digite la cantidad del producto: "));
  const precioProducto = Number(prompt("Digite el precio del producto: "));
  const Subtotal = precioProducto * cantidadProducto;
  totalapagar += Subtotal;
  console.log(
    "El producto es: " +
      nombreProducto +
      ", y compraste la siguiente cantidad: " +
      cantidadProducto +
      ", teniendo un costo unitario de " +
      precioProducto +
      ", por lo tanto el subotal es: " +
      Subtotal
  );
}

console.log("Todo suma el precio de: " + totalapagar);

/*let calcularcompra =() => {
    const cantidadclientes =3;
    let totalApagar =0;
    let resultado="";
    for (let j=1; j<cantidadclientes;j++){
        const totalproductos =3;
        const nombrecliente =prompt("ingrese el nombre del cliente"+j+":");
        for (let i=1 ;i<=totalproductos;i++){
            const nombreProducto= prompt("Ingrese el nombre del producto"+i+":");
            const cantidadProducto =Number(prompt("ingrese la cantidad comprada del producto"+i+":"));
            const precioProducto=Number(prompt("ingrese el precio unitario del producto"+i+":"));
            const subtotal = cantidadProducto * precioProducto;
            totalApagar+=subtotal;
            resultado+="cliente:"+nombrecliente+","+ "producto:"+nombreProducto+","+"cantidad:"+cantidadProducto+","+"precio unitario:"+precioProducto+"n"
        }
    }
}
*/
let comprar = () => {
  let totalApagar = 0;

  const nombre = prompt("¿Qué producto desea llevar?");
  const cantidad = Number(prompt("¿Cuantas unidades?"));
  const precio = Number(prompt("¿Cuanta sale cada unidad?"));
  const subtotal = cantidad * precio;
  totalApagar = totalApagar + subtotal;

  console.log(
    "Esta llevando " + nombre + " con un costo total de " + totalApagar
  );
  return totalApagar;
};

let total1 = comprar();
let total2 = comprar();

let total100 = total1 + total2