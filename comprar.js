// Levantamos el producto buscado
function renderSearchProduct() {
    const localItem = JSON.parse( localStorage.getItem("producto-buscado") ) || {
        producto: null,
        visto: null
    };
    
    if (localItem.producto && !localItem.visto) {
        const div = document.createElement("div");
        const content = `<img class="img-fluid" src="${localItem.producto.imgURL}" id="img" />
                         <h2 class="jss">${localItem.producto.name}</h2>
                         <h3 class="jss1">$${localItem.producto.price}</h3>
                         <p>${localItem.producto.description}</p>
                         <button class="btn btn-info btn-primary" value="${localItem.producto.id}">Añadir al carrito</button>`
        $(div).html(content)
        swal(div);
        localItem.visto = true;
        localStorage.setItem("producto-buscado", JSON.stringify(localItem));
    }

    
}

// Mostramos todos los productos de la base de datos
function renderProducts(productos) {
    let container = "";
    for (const producto of productos) {
        const div = `<div class="box col-lg-4 col-sm-6 p-1 product ${producto.category}">
                        <h2 class="text-white">${producto.name}</h2>
                        <img class="img-fluid" src="${producto.imgURL}" alt="${producto.name}" id="img"/>
                        <p class="precio">$${producto.price}</p>
                        
                        <button type="button" value="${producto.id}" class="cart-btn btn btn-primary">Añadir al carrito </button>
                    </div>`

        container += div;
    }

    $("#productos").html(container);
}

// Filtros
function filterProduct(e) {
    const targetValue = e.target.value;
    if (targetValue) {
        $(`.product.${targetValue}`).show();
        $(`.product:not(.${targetValue})`).hide();
    } else {
        $(".product").show();
    }
}

renderProducts(productos);
renderSearchProduct();
$(".filter-btn").click(filterProduct);

