import Swal from "sweetalert2";

let productos = [
    {
        "id": "producto1",
        "nombre": "Pantalon",
        "precio": "1900",
        "imagen": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFudGFsb25lc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        "id": "producto2",
        "nombre": "Remera",
        "precio": "600",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnps59Q71OCaomGRYtEWah7Dj_b-i8cFJtGsJ6pBUE3A&s",
    },
    {
        "id": "producto3",
        "nombre": "Short",
        "precio": "800",
        "imagen": "https://img.ltwebstatic.com/images3_pi/2020/04/23/1587651494ab8b4e6e9385ab66c1175afe35380de1_thumbnail_720x.webp",
    },
    {
        "id": "producto4",
        "nombre": "Pantuflas",
        "precio": "1200",
        "imagen": "https://m.media-amazon.com/images/I/6149fJ0aDlL._AC_UF894,1000_QL80_.jpg",
    }
]

let boton_agregar_carrito = document.querySelectorAll("[id^='producto_agregar'] button");


let producto_ingresado = document.getElementsByClassName("row")[0];

productos.forEach(producto => {
    let card = document.createElement("div");
    card.className = "col mb-5 d-flex justify-content-center";
    card.innerHTML = `
    <div class="card h-100">
    <img class="card-img-top" src= ${producto.imagen} alt="..." />
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


document.addEventListener("DOMContentLoaded", function () {
    const boton_agregar_carrito = document.querySelectorAll("[id^='producto_agregar'] button");
    const numeroCarrito = document.querySelector('.badge');

    const productosEnCarrito = JSON.parse(localStorage.getItem("ProductosEnCarrito")) || [];
    actualizarNumeroCarrito();

    // Escuchar eventos de clic en botones "Agregar al carrito"
    
    boton_agregar_carrito.forEach(boton => {
        boton.addEventListener("click", function(e) {
            const idBoton = e.currentTarget.getAttribute("data-id");
            const productoAgregado = productos.find(producto => producto.id === idBoton);
            productosEnCarrito.push(productoAgregado);
            localStorage.setItem("ProductosEnCarrito", JSON.stringify(productosEnCarrito));
            actualizarNumeroCarrito();
            console.log(productosEnCarrito);
            Swal.fire({
                title: 'Has agregado el producto al carrito',
                icon: 'success'
            });
        });
    });

    function actualizarNumeroCarrito() {
        numeroCarrito.textContent = productosEnCarrito.length;
    }

    const botonCarrito = document.querySelector('.btn-outline-dark');
    botonCarrito.addEventListener('click', function() {
        window.location.href = 'carrito_de_compras.html';
    });
});