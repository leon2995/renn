const fechaInicio = new Date("2023-12-23"); // Fecha de inicio de la relación

const actualizarContador = () => {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  // Convertir la diferencia de milisegundos a días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Actualizar el contenido del contador
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
};

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);
