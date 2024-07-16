import { conectaApi } from "./conectaApi.js";
import { eliminarProducto } from "./eliminarProductos.js";

const lista = document.querySelector("[data-lista]");

export default function construirTarjeta(nombre, valor, imagen, id) {
    const producto = document.createElement("li");
    producto.className = "seccion__items__items";
    producto.innerHTML = `<div>
    <img class="seccion__items__imagen" src="${imagen}" alt="">
    <h3 class="seccion__items__titulo">${nombre}</h3>
    <div class="seccion__items__valor__eliminar">
        <h2 class="seccion__items__valor"><strong>S/ ${valor}</strong></h2>
        <button id="${id}" data-excluir>
            <a><img src="./assets/excluir.png" alt="botón eliminar"></a>
        </button>
    </div>
</div>`

    return producto;
}

async function listarProductos() {
    try {
        const listaApi = await conectaApi.listarProductos();
        if (listaApi.length > 0) {
            listaApi.forEach(elemento => {
                lista.appendChild(construirTarjeta(elemento.nombre, elemento.valor, elemento.imagen, elemento.id));
            });

            const botonesEliminar = document.querySelectorAll("[data-excluir]");
            botonesEliminar.forEach(btn => {
                btn.addEventListener("click", () => eliminarProducto(btn.id));
            });
        } else {
            lista.innerHTML = `<h2 class="mensaje__titulo">¡Ningún producto ha sido añadido!</h2>`;
        }

    } catch (error) {
        lista.innerHTML = `<h2 class="mensaje__titulo">¡Ningún producto ha sido añadido!</h2>`;
        console.error("Error al listar productos", error)
    }
}

listarProductos();

