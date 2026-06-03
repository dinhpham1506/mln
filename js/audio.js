const audioState = {
  muted: false,
  current: null,
  lastTrackName: "menu",
  audioContext: null,
  tracks: {
    menu: new Audio("sounds/bgm_menu.mp3"),
    story: new Audio("sounds/bgm_story.mp3"),
    tension: new Audio("sounds/bgm_tension.mp3"),
    ending: new Audio("sounds/ending.mp3")
  },
  click: new Audio("sounds/click.mp3")
};

Object.values(audioState.tracks).forEach((track) => {
  track.loop = true;
  track.volume = 0.42;
});

audioState.click.volume = 0.34;

function playMusic(name) {
  audioState.lastTrackName = name;
  if (audioState.muted) return;
  const track = audioState.tracks[name];
  if (!track || audioState.current === track) return;
  stopMusic();
  audioState.current = track;
  track.currentTime = 0;
  track.play().catch(() => {});
}

function stopMusic() {
  if (!audioState.current) return;
  audioState.current.pause();
  audioState.current.currentTime = 0;
  audioState.current = null;
}

function playClickSound() {
  if (audioState.muted) return;
  audioState.click.currentTime = 0;
  audioState.click.play().catch(() => playClickFallback());
}

function toggleSound() {
  audioState.muted = !audioState.muted;
  if (audioState.muted) {
    stopMusic();
  } else {
    playMusic(audioState.lastTrackName);
  }
  updateSoundButtons();
}

function updateSoundButtons() {
  document.querySelectorAll("[data-sound-toggle]").forEach((button) => {
    const glyph = button.querySelector(".sound-glyph");
    button.classList.toggle("muted", audioState.muted);
    if (!glyph) {
      button.textContent = audioState.muted ? "×" : "♪";
    }
    button.setAttribute("aria-label", audioState.muted ? "Bật âm thanh" : "Tắt âm thanh");
    button.title = audioState.muted ? "Bật âm thanh" : "Tắt âm thanh";
  });
}

function playClickFallback() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  audioState.audioContext = audioState.audioContext || new AudioContext();
  const context = audioState.audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(420, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(160, context.currentTime + 0.055);
  gain.gain.setValueAtTime(0.06, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.075);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.08);
}
