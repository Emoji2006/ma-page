// Liste des fichiers (MP3 et MP4) dans le même dossier
const playlist = [
    { file: "./Noel/La Compagnie Créole  Bons baisers de Fort de France Joyeux Noel.mp4", title: "La Compagnie Créole  Bons baisers de Fort de France Joyeux Noel" },
    { file: "./Noel/Sister Act 2 Oh Happy Day.mp4", title: "Sister Act 2 Oh Happy Day" },
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
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/01. Silent Night.mp3", title: "Silent Night" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/02. All I Want for Christmas Is You.mp3", title: "All I Want for Christmas Is You" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/03. O Holy Night.mp3", title: "O Holy Night" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/04. Christmas (Baby Please Come Home).mp3", title: "Christmas (Baby Please Come Home)" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/05. Miss You Most (At Christmas Time).mp3", title: "Miss You Most (At Christmas Time)" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/06. Joy to the World.mp3", title: "Joy to the World" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/07. Jesus Born on This Day.mp3", title: "Jesus Born on This Day" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/08. Santa Claus Is Comin'to Town.mp3", title: "Santa Claus Is Comin'to Town" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/09. Hark! The Herald Angels Sing - Gloria (In Excelsis Deo).mp3", title: "Hark! The Herald Angels Sing - Gloria (In Excelsis Deo)" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/10. Jesus Oh What a Wonderful Child.mp3", title: "Jesus Oh What a Wonderful Child" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD1/11. God Rest Ye Merry, Gentlemen.mp3", title: "God Rest Ye Merry, Gentlemen" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD2/01. All I Want for Christmas Is You (Live at The Cathedral of St. John The Divine (Remastered 2024)).mp3", title: "All I Want for Christmas Is You (Live at The Cathedral of St. John The Divine (Remastered 2024))" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD2/02. Silent Night (Live at The Cathedral of St. John The Divine (Remastered 2024)).mp3", title: "Silent Night (Live at The Cathedral of St. John The Divine (Remastered 2024))" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD2/03. Joy to the World (Live at The Cathedral of St. John The Divine (Remastered 2024)).mp3", title: "Joy to the World (Live at The Cathedral of St. John The Divine (Remastered 2024))" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD2/04. Hark! The Herald Angels Sing - Gloria (In Excelsis Deo) (Live at The Cathedral of St. John The Divin.mp3", title: "Hark! The Herald Angels Sing - Gloria (In Excelsis Deo) (Live at The Cathedral of St. John The Divin" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD2/05. Jesus Born On This Day (Live at The Cathedral of St. John The Divine (Remastered 2024)).mp3", title: "Jesus Born On This Day (Live at The Cathedral of St. John The Divine (Remastered 2024))" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD2/06. Santa Claus Is Comin'to Town (Live at The Cathedral of St. John The Divine (Remastered 2024)).mp3", title: "Santa Claus Is Comin'to Town (Live at The Cathedral of St. John The Divine (Remastered 2024))" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD2/07. Hero (Live at The Cathedral of St. John The Divine (Remastered 2024)).mp3", title: "Hero (Live at The Cathedral of St. John The Divine (Remastered 2024))" },
    { file: "./Noel/Mariah Carey - Merry Christmas- 30th Anniversary Edition-G11/CD2/08. Miss You Most (At Christmas Time) (Video Version (Remastered 2024)).mp3", title: "Miss You Most (At Christmas Time) (Video Version (Remastered 2024))" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/01. Oh Happy Day.mp3", title: "Oh Happy Day" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/02. Rockin' Around The Christmas Tree.mp3", title: "Rockin' Around The Christmas Tree" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/03. Feliz Navidad.mp3", title: "Feliz Navidad" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/04. Hallelujah.mp3", title: "Hallelujah" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/05. Douce nuit (Silent Night).mp3", title: "Douce nuit (Silent Night)" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/06. Vive le vent.mp3", title: "Vive le vent" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/07. Minuit, chrétiens (O Holy Night).mp3", title: "Minuit, chrétiens (O Holy Night)" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/08. All I Want for Christmas Is You.mp3", title: "All I Want for Christmas Is You" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/09. Last Christmas.mp3", title: "Last Christmas" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/10. Mon beau sapin.mp3", title: "Mon beau sapin" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/11. Petit Papa Noel (feat. Natasha St-Pier).mp3", title: "Petit Papa Noel (feat. Natasha St-Pier)" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/12. Let It Snow! Let It Snow! Let It Snow!.mp3", title: "Let It Snow! Let It Snow! Let It Snow!" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/13. It's Beginning to Look a Lot Like Christmas.mp3", title: "It's Beginning to Look a Lot Like Christmas" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/14. Happy Xmas (War Is Over).mp3", title: "Happy Xmas (War Is Over)" },
    { file: "./Noel/Natasha St-Pier - Christmas Album (Whispers Of Christmas Magic) -G11/15. Bons baisers de Fort-de-France (Joyeux Noël).mp3", title: "Bons baisers de Fort-de-France (Joyeux Noël)" },

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
/*// Jouer le premier média
playMedia();*/

// Initialisation (charge le premier titre sans forcer la lecture immédiate pour éviter les erreurs consoles)
const firstFile = playlist[index].file;
player.src = firstFile;
titleDisplay.innerHTML = "<b>Prêt à jouer :</b> " + playlist[index].title;


// --- LOGIQUE DU CADEAU ---
function ouvrirCadeau() {
    const overlay = document.getElementById('overlay-cadeau');
    const sonCadeau = document.getElementById('bruitage-cadeau');

    // 1. Jouer le bruitage immédiatement
    if (sonCadeau) sonCadeau.play();

    // 2. Disparition visuelle
    overlay.style.opacity = '0';

    // 3. TEMPS D'ATTENTE (ex: 2000ms = 2 secondes) avant de lancer la musique
    setTimeout(() => {
        overlay.style.display = 'none';
        playMedia();
    }, 3000);
}



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
