`use strict`;

const item = localStorage.getItem("visitado") || false;

if (!item) {
    swal ("¡Bienvenido!😁", "", "success");
    localStorage.setItem("visitado", true);
}

