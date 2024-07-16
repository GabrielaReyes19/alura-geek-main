async function listarProductos() {
    const conexion = await fetch("https://fake-api-psi-dun.vercel.app/productos"); 
    const conexionConvertida = await conexion.json(); 

    return conexionConvertida;
}

async function crearProducto(nombre, valor, imagen, id) {
    const conexion = await fetch("https://fake-api-psi-dun.vercel.app/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            valor: valor,
            imagen: imagen,
            id: id
        })
    });

    if (!conexion.ok) {
        throw new Error("No fue posible registrar el producto!");
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function eliminarProducto(productoId) {
    try {
        const conexion = await fetch(`https://fake-api-psi-dun.vercel.app/productos/${productoId}`, {
            method: "DELETE",
        });
        const data = await conexion.json();
        console.log(data); 
    } catch (error) { 
        console.error("Error al eliminar el producto:", error);
        throw error;
    }  
}

async function buscarProducto(terminoDeBusqueda) {
    const conexion = await fetch(`https://fake-api-psi-dun.vercel.app/productos?q=${terminoDeBusqueda}`)
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conectaApi = {
    listarProductos,
    crearProducto, 
    buscarProducto,
    eliminarProducto
}
