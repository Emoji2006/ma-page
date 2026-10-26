// Liste des fichiers MP3
const playlist = [
    { file: "Slimane - Paname.mp3", title: "Slimane - Paname" },
    { file: "Nino Ferrer - Mirza (1965).mp3", title: "Nino Ferrer - Mirza" },
    { file: "RaggMopp.mp3", title: "Ames Brothers - Rag Mop" },
    { file: "Indochine l'aventurier parole.mp3", title: "Indochine - L'aventurier" }
];


const player = document.getElementById("player");
const titleDisplay = document.getElementById("current-title");
const playlistNames = document.getElementById("playlist-names");
const playPauseBtn = document.getElementById("playpause");

let index = 0;

// Afficher la playlist cliquable
playlist.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    li.addEventListener("click", () => {
        index = i;
        playMusic();
    });
    playlistNames.appendChild(li);
});

// Fonction pour charger et jouer la musique courante
function playMusic() {
    player.src = playlist[index].file;
    titleDisplay.innerHTML = "<b>Musique en cours :</b> " + playlist[index].title;
    player.play().catch(() => {
        console.log("Cliquez sur Play pour démarrer.");
    });
}

// Charger la première musique
playMusic();

// Quand la musique se termine → passer à la suivante automatiquement
player.addEventListener("ended", () => {
    index = (index + 1) % playlist.length;
    playMusic();
});

// Bouton suivant
document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % playlist.length;
    playMusic();
});

// Bouton précédent
document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + playlist.length) % playlist.length;
    playMusic();
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