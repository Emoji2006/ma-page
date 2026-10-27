// Liste des fichiers (MP3 et MP4) dans le même dossier
const playlist = [
    { file: "./chanson/Meilleures Chansons d'HALLOWEEN 2023.mp3", title: "Meilleures Chansons d'HALLOWEEN 2023"},
    { file: "./chanson/KIDZ BOP Kids Vampire.mp3", title: "KIDZ BOP Kids Vampire"},
    { file: "./chanson/The Citizens of Halloween - This Is Halloween.mp4", title: "The Citizens of Halloween - This Is Halloween"},
    { file: "./chanson/Disney Halloween Songs Playlist 2023🎃 Disney Halloween Music Mix 2023.mp3", title: "Disney Halloween Songs Playlist 2023🎃 Disney Halloween Music Mix 2023"},
];

const player = document.getElementById("player");
const titleDisplay = document.getElementById("current-title");
const playlistNames = document.getElementById("playlist-names");
const playPauseBtn = document.getElementById("playpause");
const seekbar = document.getElementById("seekbar");

let index = 0;



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
        // On cache la vidéo mais on garde les contrôles si natifs
        player.style.height = "50px";
        player.style.width = "100%";
    } else if (ext === 'mp4') {
        player.src = file;
        player.style.height = "auto";
        player.style.width = "100%";
    }

    titleDisplay.innerHTML = "<b>Fichier en cours :</b> " + playlist[index].title;

    // Tentative de lecture (nécessite une interaction utilisateur sur mobile au début)
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
// Tenter de lancer le premier média dès le chargement de la page.
playMedia();

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

// Mettre à jour la barre de progression pendant la lecture
player.addEventListener("timeupdate", () => {
    if (!isNaN(player.duration)) {
        const value = (player.currentTime / player.duration) * 100;
        seekbar.value = value;
    }
});

// Changer la position via la barre
seekbar.addEventListener("input", () => {
    if (!isNaN(player.duration)) {
        const time = (seekbar.value / 100) * player.duration;
        player.currentTime = time;
    }
});

// Fonction pour décorer le sapin
function decorerSapin() {
    const etages = document.querySelectorAll('.etage');
    const couleurs = ['#ff0000', '#ffd700', '#ffffff', '#00aaff'];

    etages.forEach((etage) => {
        const nbBoules = 5; // 5 boules par étage
        for (let i = 0; i < nbBoules; i++) {
            const boule = document.createElement('div');
            boule.className = 'boule';

            // Position aléatoire sur l'étage
            const x = Math.random() * 40 - 20; // Ajustement horizontal
            const y = Math.random() * 30 + 5;  // Ajustement vertical

            boule.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];
            boule.style.left = `calc(50% + ${x}px)`;
            boule.style.top = `${y}px`;

            etage.appendChild(boule);
        }
    });
}

// Lancer la décoration au chargement
decorerSapin();
