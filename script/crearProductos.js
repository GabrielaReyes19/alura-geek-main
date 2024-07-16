import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conectaApi.crearProducto(nombre, valor, imagen);
        alert("Producto registrado!");

    } catch (error) {
        console.error("Error al crear el producto:", error);
    }

    window.location.reload(true);
}

formulario.addEventListener("submit", evento => crearProducto(evento));
