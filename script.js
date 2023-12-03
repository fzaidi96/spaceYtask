const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

function togglePlayPause() {
    if (music.paused) {
        playMusic();
    } else {
        stopMusic();
    }
}

function playMusic() {
    music.play();
    musicBtn.textContent = "🔇";
}

function stopMusic() {
    music.pause();
    musicBtn.textContent = "🔉";
}

musicBtn.addEventListener("click", togglePlayPause);
