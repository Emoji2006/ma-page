// Liste des fichiers (MP3 et MP4) dans le même dossier
const playlist = [
    { file: "./Noel/Dalida - Vive le vent -Official Lyric Video-.mp4", title: "Dalida - Vive le vent" },
    { file: "./Noel/Mariah Carey - All I Want For Christmas Is You (Official Video).mp4", title: "Mariah Carey - All I Want For Christmas Is You" },
    { file: "./Noel/Wham - Last Christmas.mp3", title: "Wham - Last Christmas" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/01. Le Pere Noel raconte.mp3", title: "Le Père Noël raconte" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/02. Mon beau sapin.mp3", title: "Mon beau sapin" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/03. Ne parlons pas du Pere Noel.mp3", title: "Ne parlons pas du Père Noël" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/04. Douce nuit, Sainte nuit.mp3", title: "Douce nuit, Sainte nuit" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/05. Vive le vent.mp3", title: "Vive le vent" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/06. Parmi les etoiles.mp3", title: "Parmi les étoiles" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/07. Les anges dans nos campagnes.mp3", title: "Les anges dans nos campagnes" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/08. Noel blanc.mp3", title: "Noël blanc" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/09. Petit papa Noel.mp3", title: "Petit papa Noël" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/10. On vous souhaite un joyeux Noel.mp3", title: "On vous souhaite un joyeux Noël" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/11. Ne parlons pas du Pere Noel (karaoke).mp3", title: "Ne parlons pas du Pére Noël (karaoké)" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/12. Parmi les etoiles (karaoke).mp3", title: "Parmi les étoiles (karaoké)" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/13. Vive le vent (karaoke).mp3", title: "Vive le vent (karaoké)" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/14. Le Tango de Diabolo.mp3", title: "Le Tango de Diabolo" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/15. Le Menuet dAngelo.mp3", title: "Le Menuet d'Angelo" },
    { file: "./Noel/William Korso & Pierre-Alain Perez - Un conte de Noel/16. Les cloches sonnent.mp3", title: "Les cloches sonnent" },
    { file: "./Noel/Vive Noel!/01. Petit Papa Noel.mp3", title: "Petit Papa Noël" },
    { file: "./Noel/Vive Noel!/02. Vive le vent (jingle bells).mp3", title: "Vive le vent (jingle bells)" },
    { file: "./Noel/Vive Noel!/03. Flocons de neige.mp3", title: "Flocons de neige" },
    { file: "./Noel/Vive Noel!/04. Mon beau sapin.mp3", title: "Mon beau sapin" },
    { file: "./Noel/Vive Noel!/05. Danse la neige.mp3", title: "Danse la neige" },
    { file: "./Noel/Vive Noel!/06. Un homme en rouge et blanc.mp3", title: "Un homme en rouge et blanc" },
    { file: "./Noel/Vive Noel!/07. Noel en mer.mp3", title: "Noël en mer" },
    { file: "./Noel/Vive Noel!/08. Petit garcon - Dans son manteau rouge et blanc-.mp3", title: "Petit garçon (Dans son manteau rouge et blanc)" },
    { file: "./Noel/Vive Noel!/09. Si tu veux etre un petit lutin.mp3", title: "Si tu veux être un petit lutin" },
    { file: "./Noel/Vive Noel!/10. Noel blanc (White Christmas).mp3", title: "Noel blanc (White Christmas)" },
    { file: "./Noel/Vive Noel!/11. Pere Noel - dou viens-tu.mp3", title: "Père Noël; d'où viens-tu" },
    { file: "./Noel/Vive Noel!/12. Joyeux Noel.mp3", title: "Joyeux Noël" },
    { file: "./Noel/Vive Noel!/13. Un soir d'hiver (conte).mp3", title: "Un soir d'hiver (conte)" },
    { file: "./Noel/Vive Noel!/14. Quand la neige est sur le sol (instrumental).mp3", title: "Quand la neige est sur le sol (instrumental)" },
    { file: "./Noel/Vive Noel!/15. Dors mon petit enfant.mp3", title: "Dors mon petit enfant" },
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

    if (ext === 'mp3') {
        player.src = file;
        player.width = 0;
        player.height = 0;
    } else if (ext === 'mp4') {
        player.src = file;
        player.removeAttribute("width");
        player.removeAttribute("height");
    }

    titleDisplay.innerHTML = "<b>Fichier en cours :</b> " + playlist[index].title;
    player.play().catch(() => console.log("Cliquez sur Play."));
    playPauseBtn.textContent = "⏸ Pause";
}

// Jouer le premier média
playMedia();

// Quand le média se termine → passer au suivant
player.addEventListener("ended", () => {
    index = (index + 1) % playlist.length; // boucle infinie
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
    const value = (player.currentTime / player.duration) * 100;
    seekbar.value = value || 0;
});

// Changer la position via la barre
seekbar.addEventListener("input", () => {
    const time = (seekbar.value / 100) * player.duration;
    player.currentTime = time;
});
