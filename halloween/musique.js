// Liste des fichiers (MP3 et MP4) dans le même dossier
const playlist = [
    { file: "./chanson/KIDZ BOP Kids Vampire.mp3", title: "KIDZ BOP Kids Vampire"},
    { file: "./chanson/The Citizens of Halloween - This Is Halloween.mp4", title: "The Citizens of Halloween - This Is Halloween"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/01 - Abandoned Warehouse.mp3", title: "The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/01 - Abandoned Warehouse"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/02 - Ghost Awaken.mp3", title: "Ghost Awaken"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/03 - Dont Fall A Sleep.mp3", title: "Dont Fall A Sleep"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/04 - Haunted Church.mp3", title: "Haunted Church"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/05 - Haunted Moans.mp3", title: "Haunted Moans"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/06 - Dark Night.mp3", title: "Dark Night"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/07 - Haunted Fun House.mp3", title: "Haunted Fun House"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/08 - Dark Visions.mp3", title: "Dark Visions"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/09 - Haunted Dreams.mp3", title: "Haunted Dreams"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/10 - Haunted Ambience.mp3", title: "Haunted Ambience"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/11 - Don't Make A Sound.mp3", title: "Don't Make A Sound"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/12 - Cemetary Birth.mp3", title: "Cemetary Birth"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/13 - Ancient Ceremony.mp3", title: "Ancient Ceremony"},
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
// Jouer le premier média
playMedia();

// Initialisation (charge le premier titre sans forcer la lecture immédiate pour éviter les erreurs consoles)
const firstFile = playlist[index].file;
player.src = firstFile;
titleDisplay.innerHTML = "<b>Prêt à jouer :</b> " + playlist[index].title;

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
