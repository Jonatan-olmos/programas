function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const horaActual = `${horas}:${minutos}:${segundos}`;

    document.getElementById('reloj').textContent = horaActual;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función una vez al cargar la página para mostrar la hora inmediatamente
actualizarReloj();