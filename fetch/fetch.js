document.addEventListener('DOMContentLoaded', function() {
fetchOptions();
fetchProducts();
});
function fetchOptions() {
fetch('options.json')
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => renderOptions(data))
.catch(error => console.error('Error fetching options:', error));
}
function fetchProducts() {
fetch('products.json')
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => renderProducts(data))
.catch(error => console.error('Error fetching products:', error));
}
function renderOptions(data) {
const nav = document.getElementById('navigation');
const footer = document.getElementById('footer');
nav.innerHTML = data.navegacion.map(navItem => `<a
href="${navItem.enlace}">${navItem.titulo}</a>`).join(' | ');
footer.textContent = data.footer.texto;
}
function renderProducts(data) {
const productList = document.getElementById('product-list');
productList.innerHTML = data.productos.map(product => `
<div>
<h3>${product.nombre}</h3>
<p>${product.precio}€</p>
<img src="${product.imagen}" alt="${product.nombre}"

style="width:100px;">
</div>
`).join('');
}