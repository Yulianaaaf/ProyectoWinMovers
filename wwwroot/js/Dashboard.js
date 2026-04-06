// =========================
// MODAL COTIZACIONES
// =========================

let cotizaciones = [];

function abrirModalCotizacion() {

    let modal = document.getElementById("modalCotizacion");

    if (modal) {
        modal.classList.remove("hidden");
    }

}

function cerrarModalCotizacion() {

    let modal = document.getElementById("modalCotizacion");

    if (modal) {
        modal.classList.add("hidden");
        limpiarCamposCotizacion();
    }

}

function limpiarCamposCotizacion() {

    let campos = [
        "titulo",
        "origen",
        "destino",
        "monto",
        "fecha",
        "estado",
        "detalle"
    ];

    campos.forEach(id => {

        let input = document.getElementById(id);

        if (input) {
            input.value = "";
        }

    });

}

// Click fuera del modal
document.addEventListener("click", function (e) {

    let modal = document.getElementById("modalCotizacion");

    if (modal && e.target === modal) {
        cerrarModalCotizacion();
    }

});

function guardarCotizacion() {

    let titulo = document.getElementById("titulo")?.value;
    let origen = document.getElementById("origen")?.value;
    let destino = document.getElementById("destino")?.value;
    let monto = document.getElementById("monto")?.value;
    let estado = document.getElementById("estado")?.value;

    if (!titulo || !origen || !destino) {

        alert("Completa los campos obligatorios");
        return;

    }

    cotizaciones.push({
        titulo,
        origen,
        destino,
        monto,
        estado
    });

    renderTablaCotizaciones();

    cerrarModalCotizacion();

}

function renderTablaCotizaciones() {

    let tabla = document.getElementById("tablaCotizaciones");

    if (!tabla) return;

    let contador = document.querySelector("h2 span");

    if (contador) {
        contador.textContent = cotizaciones.length;
    }

    if (cotizaciones.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="6"
                    class="text-center p-6 text-gray-400">
                    No hay registros.
                </td>
            </tr>
        `;

        return;
    }

    tabla.innerHTML = "";

    cotizaciones.forEach((c, i) => {

        tabla.innerHTML += `
            <tr class="border-b">

                <td class="p-3">${c.titulo}</td>
                <td class="p-3">${c.origen}</td>
                <td class="p-3">${c.destino}</td>
                <td class="p-3">$${c.monto || 0}</td>
                <td class="p-3">${c.estado || "-"}</td>

                <td class="p-3 text-center">

                    <button
                        onclick="eliminarCotizacion(${i})"
                        class="text-red-500 hover:underline">

                        Eliminar

                    </button>

                </td>

            </tr>
        `;

    });

}

function eliminarCotizacion(index) {

    cotizaciones.splice(index, 1);

    renderTablaCotizaciones();

}