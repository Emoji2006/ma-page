// Liste des fichiers MP3
const playlist = [
    { file: "musiques/BTS Dynamite acapella cover by Maytree.mp3", title: "BTS - Dynamite" },
    { file: "musiques/Guillaume Grand Toi et moi.mp3", title: "Guillaume Grand - Toi et moi" },
    { file: "musiques/Imagine - John Lennon _ The Plastic Ono Band (w The Flux Fiddlers) (Ultimate Mix 2018) - 4K REMASTER.mp3", title: "John Lennon - Imagine" },
    { file: "musiques/La chanson des Restos -Live-.mp3", title: "La chanson des Restos" },
    { file: "musiques/La Pig Chenilliste - La cheucheu pour les bleus (Clip officiel).mp3", title: "La Pig Chenilliste" },
    { file: "musiques/LECOLE LA CHANSON DES ABONNES SATINE.mp3", title: "LECOLE LA CHANSON DES ABONNES SATINE" },
    { file: "musiques/Michael Jackson Billie Jean Official Music Video.mp3", title: "Michael Jackson - Billie Jean" },
    { file: "musiques/Motivés -  Le chant des partisans.mp3", title: "Motivés - Le chant des partisans" },
    { file: "musiques/musique panthre rose.mp3", title: "Musique Panthre Rose" },
    { file: "musiques/Ofenbach Be Mine Official Video.mp3", title: "Ofenbach - Be Mine" },
    { file: "musiques/Rednex Cotton Eye Joe Official.mp3", title: "Rednex - Cotton Eye Joe" },
    { file: "musiques/Un Monde Qui S-Illumine.mp3", title: "Un Monde Qui S-Illumine" },
    { file: "musiques/Wonka - Oompa Loompa -  Hugh Grant  Timothe Chalamet.mp3", title: "Wonka - Oompa Loompa" },
    { file: "musiques/X Ambassadors BOOM Official Video.mp3", title: "X Ambassadors - BOOM" },
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

// Bouton Muet / Son
muteToggleBtn.addEventListener("click", () => {
    player.muted = !player.muted;
    updateMuteButton();
});

updateMuteButton();