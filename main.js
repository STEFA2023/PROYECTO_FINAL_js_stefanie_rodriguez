//DOM productos de la tienda

let productos = [
    {
        nombre: "Pantalon",
        precio: 1200,
    },
    {
        nombre: "Remera",
        precio: 600,
    },
    {
        nombre: "Short",
        precio: 800,
    },
    {
        nombre: "Zapatos",
        precio: 2500,
    },
];

let producto_ingresado = document.getElementsByClassName("row")[0];

productos.forEach(producto => {
    let card = document.createElement("div");
    card.className = "col mb-5 d-flex justify-content-center";
    card.innerHTML = `
        <div class="card h-100">
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="producto_ingresado">${producto.nombre}</h5>
                    <p>$${producto.precio}.00</p>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
            </div>
        </div>
    `;
    producto_ingresado.appendChild(card);
});