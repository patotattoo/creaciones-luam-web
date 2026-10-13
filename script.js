
function consultarWhatsApp(producto) {
    const telefono = "56930771173";

    const mensaje =
        `Hola, Creaciones Luam. Me interesa el producto: ${producto}. ¿Me pueden indicar precio y disponibilidad?`;

    const url =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-producto]").forEach((enlace) => {
    enlace.addEventListener("click", (evento) => {
        evento.preventDefault();
        consultarWhatsApp(enlace.dataset.producto);
    });
});
