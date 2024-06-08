precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

sumar = document.querySelector(".suma");

restar = document.querySelector(".resta");

cantidad = document.querySelector(".cantidad");

sumar.onclick = () => {
    cantidad.textContent = parseInt(cantidad.textContent) + 1;
    multiplicar();
}

restar.onclick = () => {
    cantidad.textContent = parseInt(cantidad.textContent) - 1;
    multiplicar();
}

valortotal = document.querySelector(".valor-total");

multiplicar = () => {
    valortotal.textContent = parseInt(cantidad.textContent) * precio
}
    