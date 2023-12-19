//PRODUCTOS:
let respuestaCompra;
let respuestaCambiarProducto;
let respuestaDevolverProducto;

function producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

let pantalon = new producto("Pantalon", 1200);
let remera = new producto("Remera", 600);
let short = new producto("Short", 800);
let zapatos = new producto("Zapatos", 2500);

function info_producto(producto) {
  respuestaCompra = prompt("El precio del " + producto.nombre + " es de: $" + producto.precio + ", ¿deseas agregarlo al carrito de compras?:\n1. Si\n2. No");
  if (respuestaCompra === "1") {
    carritoDeCompras.push(producto);
  }
}

function infoProductoCambio(producto) {
  respuestaCambiarProducto = prompt("El precio del " + producto.nombre + " es de: $" + producto.precio + ", ¿deseas cambiarlo?:\n1. Si\n2. No");
}

function infoProductoDevolucion(producto) {
  respuestaDevolverProducto = prompt("El precio del " + producto.nombre + " es de: $" + producto.precio + ", ¿deseas devolverlo?:\n1. Si\n2. No");
}


//MENU:

let respuesta;
let respuestaP;
let respuestaCambio;
let respuestaDevolucion;
let respuestaCarrito;
let respuestaConfirmar;
let carritoDeCompras = [];
let respuestaFinalCompra;

function menuDeInicio() {
  respuesta = prompt("Bienvenido a nuestra tienda. ¿Qué acción desea realizar?:\n1. Comprar un producto\n2. Cambiar un producto\n3. Devolver un producto\n4. Ir al carrito de compras\n5. Salir");
}

function mostrarProductos() {
  respuestaP = prompt("Elige el producto que quieres comprar:\n1. Pantalón\n2. Remera\n3. Short\n4. Zapatos\n5. Volver");
}

function mostrarProductosCambio() {
  respuestaCambio = prompt("Elige el producto que quieres cambiar:\n1. Pantalón\n2. Remera\n3. Short\n4. Zapatos\n5. Volver");
}

function mostrarProductosDevolucion() {
  respuestaDevolucion = prompt("Elige el producto que quieres devolver:\n1. Pantalón\n2. Remera\n3. Short\n4. Zapatos\n5. Volver");
}


function mostrarCarrito() {
  let infoCarrito = "Productos en el carrito:\n";
  for (let i = 0; i < carritoDeCompras.length; i++) {
    infoCarrito += carritoDeCompras[i].nombre + " - $" + carritoDeCompras[i].precio + "\n";
  }
  alert(infoCarrito);
  datosCliente();
}

function menuFinalizarCompras() {
  respuestaFinalCompra = prompt("Que deseas realizar?: \n1.Finalizar compra\nContinuar comprando\n3.Salir")
}


//CLIENTES:

let cliente = [];

function datosCliente() {
  const nombreCompleto = prompt("Ingrese su nombre completo:");
  const documentoDeIdentidad = prompt("Ingrese su documento de identidad:");
  const edad = prompt("Ingrese su edad:");
  const ciudad = prompt("Ingrese su ciudad:");
  const telefono = prompt("Ingrese su número de teléfono:");
  const correoElectronico = prompt("Ingrese su correo electrónico:");

  clienteNuevo = new cliente(nombreCompleto, documentoDeIdentidad, edad, ciudad, telefono, correoElectronico);
}


menuDeInicio();

while (true) {
  if (respuesta === "1") {
    mostrarProductos();
    if (respuestaP === "1") {
      info_producto(pantalon);
      if (respuestaCompra === "1") {
        alert("Has agregado el producto al carrito!");
      } else {
        break;
      }
    } else if (respuestaP === "2") {
      info_producto(remera);
      if (respuestaCompra === "1") {
        alert("Has agregado el producto al carrito!");
      } else {
        break;
      }
    } else if (respuestaP === "3") {
      info_producto(short);
      if (respuestaCompra === "1") {
        alert("Has agregado el producto al carrito!");
      } else {
        break;
      }
    } else if (respuestaP === "4") {
      info_producto(zapatos);
      if (respuestaCompra === "1") {
        alert("Has agregado el producto al carrito!");
      } else {
        break;
      }
    } else if (respuestaP === "5") {
      menuDeInicio();
    }
  } else if (respuesta === "2") {
    mostrarProductosCambio();
      if (respuestaCambio === "1") {
      infoProductoCambio(pantalon)
      if (respuestaCambiarProducto === "1") {
      alert("Has cambiado el producto!");
    } else {
      break;
    }
  }
      if (respuestaCambio === "2") {
      infoProductoCambio(remera)
      if (respuestaCambiarProducto === "1") {
      alert("Has cambiado el producto!");
    } else {
      break;
    }
  }
      if (respuestaCambio === "3") {
      infoProductoCambio(short)
      if (respuestaCambiarProducto === "1") {
      alert("Has cambiado el producto!");
    } else {
      break;
    }
  }
      if (respuestaCambio === "4") {
      infoProductoCambio(zapatos)
      if (respuestaCambiarProducto === "1") {
      alert("Has cambiado el producto!");
    } else {
      break;
    }
  }
    if (respuestaCambio === "5") {
      menuDeInicio();
    }
  } else if (respuesta === "3") {
    mostrarProductosDevolucion();
    if (respuestaDevolucion === "1") {
    infoProductoDevolucion(pantalon)
    if (respuestaDevolverProducto === "1") {
    alert("Has realizado la devolucion del producto!");
    } else {
      break;
    }
  }
    if (respuestaDevolucion === "2") {
    infoProductoDevolucion(remera)
    if (respuestaDevolverProducto === "1") {
    alert("Has realizado la devolucion del producto!");
    } else {
      break;
    }
  }
    if (respuestaDevolucion === "3") {
    infoProductoDevolucion(short)
    if (respuestaDevolverProducto === "1") {
    alert("Has realizado la devolucion del producto!");
    } else {
      break;
    }
  }
    if (respuestaDevolucion === "4") {
    infoProductoDevolucion(zapatos)
    if (respuestaDevolverProducto === "1") {
    alert("Has realizado la devolucion del producto!");
    } else {
      break;
    }
  }
  if (respuestaDevolucion === "5") {
    menuDeInicio();
  }
  } else if (respuesta === "4") {
    mostrarCarrito();
    alert("Su compra ha sido realizada con exito, muchas gracias!");
    break;
  } else if (respuesta === "5") {
    break;
  } else {
    console.log("Opción inválida. Por favor, elige una opción válida.");
  }
}