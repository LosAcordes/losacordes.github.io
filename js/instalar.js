let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Prevenir mini-barra por defecto
  deferredPrompt = e; // Guardar evento (para lanzarlo mas tarde)

  document.body.addEventListener('click', () => { // Instalar cuando haya una interacción
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Notificación
      deferredPrompt = null; // Que no se vuelva a lanzar
    }
  }, { once: true }); // Ejecutar solo una vez
});
