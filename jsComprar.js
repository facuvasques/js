class Productt {
    constructor(name, precio, categoria){
        this.name = name;
        this.precio = precio;
        this.categoria = categoria;
    
    }
}

let Producto1 = new Productt("Remera naranja", "$1500", "barato");
let Producto2 = new Productt("Remera negra", "$1400", "barato");
let Producto3 = new Productt("Remera blanca", "$1500", "barato");
let Producto4 = new Productt("Reloj", "$15000", "caro");
let Producto5 = new Productt("Collar", "$1000", "barato");
let Producto6 = new Productt("Camisa de jean", "$2500", "caro");

const productoss = [Producto1, Producto2, Producto3, Producto4, Producto5, Producto6];

function caro(){
    let productosFiltrados = productoss.filter(
        (element) => element.categoria == "caro"
    );

    let acumulador = ``;
    productosFiltrados.forEach((element) => {
        acumulador += `<p>${element.name} = ${element.precio}</p>`
    
    }
    );

    $("#contenido").html(acumulador);

    $("#asd1").on(`click`, function () {
        console.log("un solo click en caro");
         
});

$(`#asd1`).on(`dblclick`, () => {
    console.log("dos click en caro");
});
} ;


function barato(){
    let productosFiltrados = productoss.filter(
        (element) => element.categoria == "barato"
    );

    let acumulador = ``;
    productosFiltrados.forEach((element) => {
        acumulador += `<p>${element.name} = ${element.precio}</p>`
    
    }
    );
    
    $("#contenido").html(acumulador);
    
    
    $("#asd").on(`click`, function () {
        console.log("un solo click en barato");
         
});

$(`#asd`).on(`dblclick`, () => {
    console.log("dos click en barato");
});


} ;


$("#contenido").prepend(`<input type="text" class="inputsClass" placeholder="elegí un producto">
                         <select class="inputsClass">
                           <option value="$1500" selected> Remera naranja </option> 
                           <option value="$1400"> Remera negra </option>
                           <option value="$1500"> Remera blanca </option>
                           <option value="$15000"> Reloj </option>
                           <option value="$1000"> Collar </option>
                           <option value="$2500"> Campera de jean </option>
                           </select>`);

//eventos asociados
$(".inputsClass").change( function (e){
       console.log(e.target.value);
       console.log(this.value);
       $("#contenido").html(this.value);
});

//submit
$("#contenidos").prepend(`<form id="opiniones">
                            <input type="text">
                            <input type="submit">
                            </form>`);

$("#opiniones").submit(function(e) {

    e.preventDefault();
    let hijos = $(e.target).children();
    console.log(hijos[0].value);
}); 



//

$(".promo").click (  () => {
    $(".promoAcl").toggle(2000)
}
);

$(".promo").css ( {"color": "black",
                    "background-color": "#a68f0c",
                    
   
}
);

