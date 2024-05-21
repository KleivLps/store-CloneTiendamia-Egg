//seleccionar con el método getElementById la etiqueta correspondiente donde se renderizarán las tarjetas de productos.
const productsSelector = document.getElementById("productos");

//definir una función createCard
function createCard(product) {
  return `
  
      <article class="product-card">
      
        <a href="./details.html?id=${product.id}">
          <img class="product-img" src="${product.photo[0]}" alt="${product.id}" />
          </a> 
          <div class="product-info">

          <button class="favorito" type="button" onclick="agregarFavorito(${product.id})">
          <i class="fa-regular fa-heart" id="favorite-regular"></i>
          <i class="fa-solid fa-heart" id="added-favorite"></i></button>

          
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.supplier}</span>
            <div class="product-price-block">
              <span class="price">S/${product.price}</span>
              <span class="discount">${product.onsale}</span>
            </div>
            <div class="product-tax-policy">${product.taxPolicy}</div>
          </div>
         
      </article>
`;
}

function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}

printCards(products, "productos");

