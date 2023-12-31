let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = event;

  // Update UI notify the user they can add to home screen
  showAddToHomeScreenBanner();
});

function showAddToHomeScreenBanner() {
  const banner = document.getElementById('addToHomeScreenBanner');
  banner.style.display = 'block';

  const addToHomeScreenButton = document.getElementById('addToHomeScreenButton');
  addToHomeScreenButton.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        deferredPrompt = null;
        banner.style.display = 'none';
      });
    }
  });
}
