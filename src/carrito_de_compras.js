// carrito_de_compras.js

document.addEventListener("DOMContentLoaded", function () {
    const carritoList = document.getElementById("carrito-list");
    const totalPrecioElement = document.getElementById("total-precio");


    // Obtener productos del localStorage
    const productosEnCarrito = JSON.parse(localStorage.getItem("ProductosEnCarrito")) || [];


    // Mostrar productos en el carrito
    mostrarProductosEnCarrito();

    function mostrarProductosEnCarrito() {
        carritoList.innerHTML = "";
        let totalPrecio = 0; 

        productosEnCarrito.forEach(producto => {
            totalPrecio += parseFloat(producto.precio);
            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.innerHTML = `
                <div class="d-flex justify-content-between">
                    <span>${producto.nombre}</span>
                    <span>$${producto.precio}.00</span>
                </div>
            `;
            carritoList.appendChild(listItem);
        });
        // Mostrar el total de la compra
        totalPrecioElement.textContent = `$${totalPrecio.toFixed(2)}`;
    }
});
