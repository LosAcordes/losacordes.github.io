let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Prevenir mini-barra por defecto
  deferredPrompt = e; // Capturar evento (para lanzarlo mas tarde)
});

document.body.addEventListener('click', () => { // Instalar cuando haya una interacción
  if (deferredPrompt && !sessionStorage.getItem('pedirInstalar')) {
    deferredPrompt.prompt(); // Notificación
    deferredPrompt = null;
    sessionStorage.setItem('pedirInstalar', 'true');
  }
});
