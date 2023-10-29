function cronometro() {
    const nomHabilidad = document.getElementById("habilidad-input").value;
    const nomModulo = document.getElementById("modulo-input").value;
    const horas = document.getElementById("horas-input").value;
    const minutos  = document.getElementById("minutos-input").value;
    const segundos = document.getElementById("segundos-input").value;

    const showHabilidad = document.getElementById("nombre-habilidad");
    const showModulo = document.getElementById("nombre-modulo");

    showHabilidad.innerText = nomHabilidad;
    showModulo.innerText = nomModulo;

    
    const cronometro = document.querySelector(".count-down");
    const info = document.getElementById("datos");
    

    cronometro.classList.remove("disabled");
    info.classList.add("disabled");



    // Calcula la fecha objetivo en milisegundos desde el 1 de enero de 1970
    const targetDate = new Date().getTime() + (horas * 60 * 60 * 1000) + (minutos * 60 * 1000) + (segundos * 1000);

    // Actualiza la cuenta regresiva cada segundo
        const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calcula el tiempo restante en horas, minutos y segundos
        const remainingHours = Math.floor(distance / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Muestra el tiempo restante en el elemento con id "countdown"
        document.getElementById("horas").innerText = remainingHours;
        document.getElementById("minutos").innerText = remainingMinutes;
        document.getElementById("segundos").innerText = remainingSeconds;

        // Si la cuenta regresiva ha terminado, muestra un mensaje
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "¡Tiempo terminado!";
        }
    }, 1000);

   
}