
window.addEventListener("load", function () {
  const intro = new Audio('assets/audio/intro_theme.mp3');
  const ambient = new Audio('assets/audio/ambient_loop.mp3');
  intro.volume = 0.5;
  ambient.volume = 0.5;
  intro.addEventListener('ended', () => {
    ambient.loop = true;
    ambient.play().catch(() => console.log('Ambient autoplay blocked.'));
  });
  function playIntro() {
    intro.play().catch(() => {
      console.log('Intro autoplay blocked. Waiting for user interaction.');
      document.addEventListener('click', playIntro, { once: true });
    });
  }
  playIntro();
});
