// Array de mensajes aleatorios
const messages = [
  "Eres lo mejor que me ha pasado 💙",
  "Tienes un corazón hermoso 💙",
  "Eres la luz que ilumina mis días 💙",
  "Eres el niño de mis ojos 💙",
  "Te amo con todo mi corazón 💙",
  "Tu amor es mi refugio en la tormenta 💙",
  "Cada momento a tu lado es un regalo del cielo 💙",
  "Contigo, el mundo parece un lugar más hermoso 💙",
  "Eres la melodía que nunca deja de sonar en mi corazón 💙",
  "En tus brazos encuentro el hogar que siempre buscaba 💙" 
];

// Función para obtener un mensaje aleatorio
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

// Función para hacer latir el corazón
function heartbeat() {
  const heart = document.querySelector('.heart');
  heart.classList.add('heartbeat')
  setTimeout(() => {
    heart.classList.remove('heartbeat');
  }, 30000);
}

// Función para mostrar el mensaje aleatorio
function showMessage() {
  const message = getRandomMessage();
  document.getElementById('message').textContent = message;
  
}

// Event listener para el botón
document.getElementById('magicButton').addEventListener('click', () => {
  heartbeat();
  showMessage();
});
