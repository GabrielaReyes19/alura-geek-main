import { conectaApi } from "./conectaApi.js";

async function eliminarProducto(productoId) {
    try {
        await conectaApi.eliminarProducto(productoId);
        alert("Producto eliminado con éxito!");
    } catch (error) {
        console.error("Error al eliminar producto", error);
    }

    window.location.reload(true);
}

export { eliminarProducto };
