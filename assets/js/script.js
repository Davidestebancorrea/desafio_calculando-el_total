precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidad = document.querySelector(".cantidad");
let botonmas = document.querySelector("#mas");
let botonmenos = document.querySelector("#menos");
let total = document.querySelector(".valor-total");

botonmas.addEventListener("click", () => {
    cantidad.innerHTML = Number(cantidad.innerHTML) + 1;
    actualizarTotal();
});

botonmenos.addEventListener("click", () => {
    cantidad.innerHTML = Number(cantidad.innerHTML) - 1;
    actualizarTotal();
});

function actualizarTotal() {
    total.innerHTML = Number(cantidad.innerHTML) * precio;
}

// Calcular total inicial
actualizarTotal();