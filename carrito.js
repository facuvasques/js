class ItemCarrito {
  constructor(producto) {
      this.data = producto;
      this.cantidad = 1;
  }

  calcularSubtotal() {
    return this.data.price * this.cantidad;
  }

  actualizarCantidad(nuevaCantidad) {
    this.cantidad = Number(nuevaCantidad);
    $(`#producto-${this.data.id} .precio__calculado`).text(this.calcularSubtotal());
    $(`#producto-${this.data.id} .input__cantidad`).val(this.cantidad);
  }

  renderHTML () {
    const producto = `<tr id="producto-${this.data.id}">
      <td class="table__productos">
        <img src=${this.data.imgURL} alt="">
        <h6 class="title">${this.data.name}</h6>
      </td>

      <td class="table__precio">
        <p>$ <span class="precio__calculado"> ${this.calcularSubtotal()} </span> </p>
      </td>

      <td class="table__cantidad">
      <select name="respuestas">
          <option value="s"> S</option>
          <option value="m"> M</option>
          <option value="l"> L</option>
          <option value="xl"> XL</option>
        
      </td>

      <td class="table__cantidad">
        <input class="input__cantidad" type="number" min="1" value="${this.cantidad}">
        <button value="${this.data.id}" class="delete btn btn-danger">x</button>
      </td>
    </tr>`

    $("#contenido-carrito").append(producto);
  }

  deleteHTML(id) {
    $(`#producto-${id}`).remove();
  }
}

class Carrito {

  constructor() {
    this.items = [];
  }

  agregarProducto(newItem){
      const exists = this.items.some( item => item.data.id == newItem.data.id );

      if(exists) {
        this.actualizarProducto(newItem.data.id);
      }
      else { 
        this.items.push(newItem);
        newItem.renderHTML();
      }
      this.calcularTotal();
  }

  eliminarProducto(id){
    const item = this.buscarProducto(id);
    this.items = this.items.filter( item => item.data.id != id);

    item.deleteHTML(id);
    this.calcularTotal();
  }

  actualizarProducto(id){
    const index = this.items.findIndex( item => item.data.id == id);
    this.items[index].actualizarCantidad(this.items[index].cantidad + 1);
  }

  buscarProducto(id) {
    return this.items.find( item => item.data.id == id);
  }

  vaciarProductos(){
    this.items = [];
  }

  calcularTotal(){
    let total = 0;
    for (const item of this.items ) {
      total += item.calcularSubtotal();
    }
    $(".itemCartTotal").text("$" + total);
  }


}


// button sobre comprar.html
const carrito = new Carrito();

const AñadirCarrito = document.querySelectorAll(".btn-primary");

AñadirCarrito.forEach(Carrito => { 
    Carrito.addEventListener("click", addToCartClicked);

});


const CompraFinalizada = document.querySelector(".btn-success");
CompraFinalizada.addEventListener("click", removeCarritoIN);

$("#contenido-carrito").click(removeCarrito);
$("#contenido-carrito").change(actualizarPrecio);

function addToCartClicked(event) {

    const productoID = event.target.value;
    const producto = productos.find( item => item.id == productoID);
    const item = new ItemCarrito(producto);
    carrito.agregarProducto(item);
  //boxCarrito(producto.name, producto.price, producto.imgURL);
};

const carritoIN2 = document.querySelector("#carritoIN2");


function boxCarrito(boxTitle, boxPrice, boxImage){

     const carritoIN3 = `
            <tr>
              <td class="table__productos">
                <img src=${boxImage} alt="">
                <h6 class="title">${boxTitle}</h6>
              </td>

              <td class="table__precio">
                <p>${boxPrice}</p>
              </td>

              <td class="table__cantidad">
              <select name="respuestas">
                  <option value="s"> S</option>
                  <option value="m"> M</option>
                  <option value="l"> L</option>
                  <option value="xl"> XL</option>
                
              </td>

              <td class="table__cantidad">
                <input type="number" min="1" value="1">
                <button class="delete btn btn-danger">x</button>
              </td>
            </tr>`

     $("#contenido-carrito").append(carritoIN3);


     
    
};



function removeCarrito(event) {
    const elementClicked = $(event.target);
    if(elementClicked.hasClass("delete")) {
      carrito.eliminarProducto(elementClicked.val() );
    }
    
};


function actualizarPrecio(event){
  const target = $(event.target);
  
  if (target.hasClass("input__cantidad") ) {
    const button = target.next("button.delete");
    const item = carrito.buscarProducto( button.val() );
    item.actualizarCantidad(target.val());
    carrito.calcularTotal();
  }
  
}


function removeCarritoIN() { 
  if (carrito.items.length > 0) {
    carritoIN2.innerHTML = ``;
    carrito.vaciarProductos();
    carrito.calcularTotal();
    swal ("¡Muchas gracias por tu compra! 😊", "Nos pondremos en contacto con vos con novedades", "success");
  }

};