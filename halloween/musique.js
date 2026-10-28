// Liste des fichiers (MP3 et MP4) dans le même dossier
const playlist = [
    { file: "./chanson/KIDZ BOP Kids Vampire.mp3", title: "KIDZ BOP Kids Vampire"},
    { file: "./chanson/The Citizens of Halloween - This Is Halloween.mp4", title: "The Citizens of Halloween - This Is Halloween"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/01 - Abandoned Warehouse.mp3", title: "Abandoned Warehouse"},
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
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/12 - Cemetary Birds.mp3", title: "Cemetary Birds"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/13 - Ancient Ceremony.mp3", title: "Ancient Ceremony"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/14 - Demons In Flight.mp3", title: "Demons In Flight"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/15 - Grandfather Time.mp3", title: "Grandfather Time"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/16 - Morbid Minds.mp3", title: "Morbid Minds"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/17 - Black Forest.mp3", title: "Black Forest"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/18 - Broken Dreams.mp3", title: "Broken Dreams"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/19 - No Escape.mp3", title: "No Escape"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/20 - Into The Darkness.mp3", title: "Into The Darkness"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/21 - Graveyard.mp3", title: "Graveyard"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/22 - Cult Chants.mp3", title: "Cult Chants"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/23 - Haunted.mp3", title: "Haunted"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/24 - Alone In A Dark Alley.mp3", title: "Alone In A Dark Alley"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/25 - Creepy Whispers.mp3", title: "Creepy Whispers"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/26 - Empty Lot.mp3", title: "Empty Lot"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/27 - Plucked Organs.mp3", title: "Plucked Organs"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/28 - Exercist.mp3", title: "Exercist"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/29 - Creepy Tunnel In Basement.mp3", title: "Creepy Tunnel In Basement"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/30 - Haunted Trolly.mp3", title: "Haunted Trolly"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/31 - Outside The Gate.mp3", title: "Outside The Gate"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/32 - Research Lab.mp3", title: "Research Lab"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/33 - Grave Digger.mp3", title: "Grave Digger"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/34 - Fantasy.mp3", title: "Fantasy"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/35 - Errie Drones.mp3", title: "Errie Drones"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/36 - Secret Society.mp3", title: "Secret Society"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/37 - Time Is Running Out.mp3", title: "Time Is Running Out"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/38 - Scary Sounds.mp3", title: "Scary Sounds"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/39 - Evil Thoughts.mp3", title: "Evil Thoughts"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/40 - Death Screams.mp3", title: "Death Screams"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/41 - CreepyHouse.mp3", title: "CreepyHouse"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/42 - Terror.mp3", title: "Terror"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/43 - Creatures.mp3", title: "Creatures"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/44 - Bloody Murder.mp3", title: " Bloody Murder"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/45 - Blood In The Air.mp3", title: "Blood In The Air"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/46 - NightTerrors.mp3", title: "NightTerrors"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/47 - Insects.mp3", title: "Insects"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/48 - Crowded Horror.mp3", title: "Crowded Horror"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/49 - Dark Fantasy.mp3", title: "Dark Fantasy"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/50 - Fairgrounds.mp3", title: "Fairgrounds"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/51 - Deadly Basement.mp3", title: "Deadly Basement"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/52 - Ritual.mp3", title: "Ritual"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/53 - Outbreak.mp3", title: "Outbreak"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/54 - Errie.mp3", title: "Errie"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/55 - Bloody Mass.mp3", title: "Bloody Mass"},
    { file: "./chanson/The Citizens of Halloween - ! Halloween Music For Haunted House ! - 2023/56 - Great American Haunting.mp3", title: "Great American Haunting"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/01 - Michael Jackson - Thriller (Single Version).mp3", title: "Michael Jackson - Thriller"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/02 - Ray Parker Jr. - Ghostbusters.mp3", title: "Ray Parker Jr. - Ghostbusters"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/03 - Rockwell - Somebody's Watching Me (Single Version).mp3", title: "Rockwell - Somebody's Watching Me"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/04 - AC/DC - Highway To Hell.mp3", title: "AC/DC - Highway To Hell"},
    { file: "./chanson/VA - HALLOWEEN  Playlist soirée Halloween 2023/05 - Blue Öyster Cult - (Don't Fear) The Reaper.mp3", title: "Blue Öyster Cult - (Don't Fear) The Reaper"},
    
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
