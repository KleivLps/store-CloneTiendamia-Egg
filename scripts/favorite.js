function  agregarFavorito(id) {

    const product = products.find(product => product.id == id);

    const ProductoFavorito = {
        id: product.id,
        title: product.title,
        price: product.price,
        photo: product.photo[0],
    };

    if (localStorage.getItem('favoritos')) {

        let favoritos = JSON.parse(localStorage.getItem('cart'));

        favoritos.push(ProductoFavorito);

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    } else {
        let favoritos = [ProductoFavorito];
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
}







