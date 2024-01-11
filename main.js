//DOM productos de la tienda

let productos = [
    {
        "id": "producto1",
        "nombre": "Pantalon",
        "precio": "1200",
        "imagen": "#",
    },
    {
        "id": "producto2",
        "nombre": "Remera",
        "precio": "600",
        "imagen": "#",
    },
    {
        "id": "producto3",
        "nombre": "Short",
        "precio": "800",
        "imagen": "#",
    },
    {
        "id": "producto4",
        "nombre": "Zapatos",
        "precio": "2500",
        "imagen": "#",
    },
];

let boton_agregar_carrito = document.querySelectorAll("[id^='producto_agregar'] button");


let producto_ingresado = document.getElementsByClassName("row")[0];

productos.forEach(producto => {
    let card = document.createElement("div");
    card.className = "col mb-5 d-flex justify-content-center";
    card.innerHTML = `
    <div class="card h-100">
    <img class="card-img-top" src= "https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    <div class="card-body p-4">
    <div class="text-center">
    <h5 class="producto_ingresado">${producto.nombre}</h5>
    <p>$${producto.precio}.00</p>
</div>
</div>
<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div id="producto_agregar" class="text-center"><button class="btn btn-outline-dark mt-auto" data-id="${producto.id}" href="#">Agregar al carrito</button></div>
</div>
</div>
`;
    producto_ingresado.appendChild(card);
    actualizarBotonesAgregar();
});




function actualizarBotonesAgregar() {
    boton_agregar_carrito = document.querySelectorAll("[id^='producto_agregar'] button");
    boton_agregar_carrito.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.getAttribute("data-id");
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    productosEnCarrito.push(productoAgregado);
    localStorage.setItem("Productos en carrito", JSON.stringify(productosEnCarrito));
    console.log(productosEnCarrito);
}



localStorage.setItem("ProductosEnCarrito", JSON.stringify(productosEnCarrito));
console.log(productosEnCarrito);



document.addEventListener("DOMContentLoaded", function () {
    const botonCarrito = document.querySelector('.btn-outline-dark');

    botonCarrito.addEventListener('click', function() {
        window.location.href = 'carrito_de_compras.html';
    });
});
