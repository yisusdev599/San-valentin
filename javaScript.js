document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // 🌸 EFECTO DETALLITOS COREANOS
    // ===============================
    const container = document.createElement("div");
    container.classList.add("roses");
    document.body.appendChild(container);

    function crearDetalle() {
        const detalle = document.createElement("div");
        detalle.classList.add("rose");

        const detalles = ["🌸", "💮", "❤️", "✨"];
        detalle.textContent = detalles[Math.floor(Math.random() * detalles.length)];

        detalle.style.left = Math.random() * 100 + "vw";
        detalle.style.animationDuration = 4 + Math.random() * 3 + "s";
        detalle.style.opacity = Math.random() * 0.6 + 0.4;

        container.appendChild(detalle);

        setTimeout(() => detalle.remove(), 7000);
    }

    setInterval(crearDetalle, 400);

    // ===============================
    // ⏰ CONTADOR
    // ===============================
    const inicio = new Date("2026-02-06T19:11:00");
    const counter = document.getElementById("counter");

    function actualizarTiempo() {
        const ahora = new Date();
        const diff = ahora - inicio;

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diff / (1000 * 60)) % 60);

        counter.textContent =
            `${dias} días • ${horas} h • ${minutos} min compartidos ❤️`;
    }

    actualizarTiempo();
    setInterval(actualizarTiempo, 60000);

    // ===============================
    // 👋 HELLO KITTY SALUDO
    // ===============================
    const kittySaludo = document.querySelector(".kitty-saludo");

    function mostrarSaludo() {
        kittySaludo.classList.add("mostrar");

        setTimeout(() => {
            kittySaludo.classList.remove("mostrar");
        }, 4000);
    }

    // Aparece al entrar
    setTimeout(mostrarSaludo, 1200);

    // Reaparece cada 20 segundos
    setInterval(mostrarSaludo, 20000);

});



