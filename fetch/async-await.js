document.addEventListener('DOMContentLoaded', function() {
    loadNavigationAndFooter();
    loadProductDetails();
    });
    async function loadNavigationAndFooter() {
    try {
    const optionsResponse = await fetch('options.json');
    if (!optionsResponse.ok) {
    throw new Error('Failed to fetch navigation and footer data');
    }
    const options = await optionsResponse.json();
    renderOptions(options);
    } catch (error) {
    console.error('Error loading options:', error);
    }
    }
    async function loadProductDetails() {
    try {
        const productsResponse = await fetch('products.json');
    if (!productsResponse.ok) {
    throw new Error('Failed to fetch product details');
    }
    const products = await productsResponse.json();
    renderProductDetails(products);
    } catch (error) {
    console.error('Error loading products:', error);
    }
    }
    function renderOptions(data) {
    const nav = document.getElementById('navigation');
    const footer = document.getElementById('footer');
    nav.innerHTML = data.navegacion.map(navItem => `<a
    href="${navItem.enlace}">${navItem.titulo}</a>`).join(' | ');
    footer.textContent = data.footer.texto;
    }
    function renderProductDetails(data) {
    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = data.productos.map(product => `
    <div>
    <h3>${product.nombre}</h3>
    <p>${product.precio}€</p>
    <img src="${product.imagen}" alt="${product.nombre}"
    
    style="width:100px;">
    </div>
    `).join('');
    }