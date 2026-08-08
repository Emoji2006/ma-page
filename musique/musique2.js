// Liste des fichiers MP3
const playlist = [
    { file: "musiques/calme/Calme/01. Bien-Être - Petit Arbre.mp3", title: "Bien-Être - Petit Arbre" },
    { file: "musiques/calme/Calme/02. Bien-Être - Douceur Romantique.mp3", title: "Bien-Être - Douceur Romantique" },
    { file: "musiques/calme/Calme/03. Bien-Être - Peace.mp3", title: "Bien-Être - Peace" },
    { file: "musiques/calme/Calme/04. Bien-Être - Calme.mp3", title: "Bien-Être - Calme" },
    { file: "musiques/calme/Calme/05. Bien-Être - Ces Instants Romantiques.mp3", title: "Bien-Être - Ces Instants Romantiques" },
    { file: "musiques/calme/Calme/06. Bien-Être - Soie et Satin.mp3", title: "Bien-Être - Soie et Satin" },
    { file: "musiques/calme/Calme/07. Bien-Être - Matin Calme.mp3", title: "Bien-Être - Matin Calme" },
    { file: "musiques/calme/Calme/08. Bien-Être - Petits Flot.mp3", title: "Bien-Être - Petits Flot" },
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