// Liste des fichiers (MP3 et MP4) dans le même dossier
const playlist = [
    { file: "musiques/colo/Ceasar - Zaza Mila Vola (Clip Officiel)..mp4", title: "Ceasar - Zaza Mila Vola" },
    { file: "musiques/colo/CHANTAL - AMIN-KAFALIANA -COVER ROSSY- Clip Officiel.mp4", title: "CHANTAL - AMIN-KAFALIANA" },
];

const player = document.getElementById("player");
const titleDisplay = document.getElementById("current-title");
const playlistNames = document.getElementById("playlist-names");
const playPauseBtn = document.getElementById("playpause");
const muteToggleBtn = document.getElementById("mute-toggle");

let index = 0;

function updateMuteButton() {
    muteToggleBtn.textContent = player.muted ? "🔇 Muet" : "🔊 Son";
    muteToggleBtn.setAttribute("aria-pressed", String(player.muted));
}

// Afficher la playlist cliquable
playlist.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    li.addEventListener("click", () => {
        index = i;
        playMedia();
    });
    playlistNames.appendChild(li);
});

// Jouer le média actuel
function playMedia() {
    const file = playlist[index].file;
    const ext = file.split('.').pop().toLowerCase();

    // Reset dimensions pour MP4 vs MP3
    if (ext === 'mp3') {
        player.src = file;
        player.style.height = "50px";
        player.style.width = "100%";
    } else if (ext === 'mp4') {
        player.src = file;
        player.style.height = "auto";
        player.style.width = "100%";
    }

    titleDisplay.innerHTML = "<b>Fichier en cours :</b> " + playlist[index].title;

    // Tentative de lecture automatique au chargement avec son
    const playPromise = player.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            playPauseBtn.textContent = "⏸ Pause";
        }).catch(error => {
            console.log("Lecture automatique bloquée par le navigateur (normal sur mobile). Attente clic utilisateur.");
            playPauseBtn.textContent = "▶ Play";
        });
    }
}

// Initialisation (charge le premier titre et démarre immédiatement la lecture)
const firstFile = playlist[index].file;
player.src = firstFile;
titleDisplay.innerHTML = "<b>Prêt à jouer :</b> " + playlist[index].title;
window.addEventListener("load", () => {
    playMedia();
});


// Quand le média se termine → passer au suivant
player.addEventListener("ended", () => {
    index = (index + 1) % playlist.length;
    playMedia();
});

// Boutons suivant / précédent
document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % playlist.length;
    playMedia();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + playlist.length) % playlist.length;
    playMedia();
});

// Bouton Play/Pause
playPauseBtn.addEventListener("click", () => {
    if (player.paused) {
        player.play();
        playPauseBtn.textContent = "⏸ Pause";
    } else {
        player.pause();
        playPauseBtn.textContent = "▶ Play";
    }
});

// Bouton Muet / Son
muteToggleBtn.addEventListener("click", () => {
    player.muted = !player.muted;
    updateMuteButton();
});

updateMuteButton();