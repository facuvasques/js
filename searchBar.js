`use strict`;

const formulario = document.getElementById("search");

createSearchBar(productos);
$("#search").submit(searchProduct);

function createSearchBar(productos) {
    const datalist = $("#listado-de-productos");
    for (const producto of productos) {
        const option = `<option value="${producto.name}">${producto.name}</option>`;
        datalist.append(option);
    }
}

function searchProduct(event) {
    event.preventDefault();
    const nombreProducto = $("#elegir-productos").val();
    const producto = productos.find( item => item.name == nombreProducto );
    
    const localProducto = {
        producto: producto,
        visto: false
    }

    if (producto) {
        localStorage.setItem("producto-buscado", JSON.stringify(localProducto) );
        // Redireccion
        location.assign("./comprar.html");
    }else{
       swal ("¡Lo sentimos!", "lamentablemete no contamos con dicho producto 😔", "error" )
    }
   
};