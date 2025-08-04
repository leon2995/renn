const startDate = new Date('2025-05-11T00:00:00');
const counter = document.getElementById('counter');

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  counter.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

updateCounter();
setInterval(updateCounter, 1000);
