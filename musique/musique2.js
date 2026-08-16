// Liste des fichiers MP3
const playlist = [
    { file: "musiques/calme/calme/Calme/01 Bien-Etre - Petit Arbre.mp3", title: "Bien-Être - Petit Arbre" },
    { file: "musiques/calme/calme/Calme/02 Bien-Etre - Douceur Romantique.mp3", title: "Bien-Être - Douceur Romantique" },
    { file: "musiques/calme/calme/Calme/03 Bien-Etre - Peace.mp3", title: "Bien-Être - Peace" },
    { file: "musiques/calme/calme/Calme/04 Bien-Etre - Calme.mp3", title: "Bien-Être - Calme" },
    { file: "musiques/calme/calme/Calme/05 Bien-Etre - Ces Instants Romantiques.mp3", title: "Bien-Être - Ces Instants Romantiques" },
    { file: "musiques/calme/calme/Calme/06 Bien-Etre - Soie et Satin.mp3", title: "Bien-Être - Soie et Satin" },
    { file: "musiques/calme/calme/Calme/07 Bien-Etre - Matin Calme.mp3", title: "Bien-Être - Matin Calme" },
    { file: "musiques/calme/calme/Calme/08 Bien-Etre - Petits Flots.mp3", title: "Bien-Être - Petits Flots" },
    { file: "musiques/calme/cool/Cool 13 - Reve/01. Tony Bennet & K.D. Lang - Dream A Little Dream Of Me.mp3", title: "Dream A Little Dream Of Me" },
    { file: "musiques/calme/cool/Cool 13 - Reve/02. Duke Ellington - A Hundred Dreams Ago.mp3", title: "A Hundred Dreams Ago" },
    {file: "musiques/calme/cool/Cool 13 - Reve/03. Michel Camilo - Dreamlight.mp3", title: "Dreamlight" },
    {file: "musiques/calme/cool/Cool 13 - Reve/04. Billie Holiday & Her Orchestra - I've Got A Date With A Dream.mp3", title: "I've Got A Date With A Dream" },
    {file: "musiques/calme/cool/Cool 13 - Reve/05. Thelonious Monk - Monk's Dream.mp3", title: "Monk's Dream" },
    {file: "musiques/calme/cool/Cool 13 - Reve/06. Charles Mingus - Girl Of My Dreams.mp3", title: "Girl Of My Dreams" },
    {file: "musiques/calme/cool/Cool 13 - Reve/07. Johnny Mathis - Weaver Of Dreams.mp3", title: "Weaver Of Dreams" },
    {file: "musiques/calme/cool/Cool 13 - Reve/08. Johnny Hodges & His Orchestra - Dream Blues.mp3", title: "Dream Blues" },
    {file: "musiques/calme/cool/Cool 13 - Reve/09. Nancy Wilson - The Last Dream Home.mp3", title: "The Last Dream Home" },
    {file: "musiques/calme/cool/Cool 13 - Reve/10. Duke Ellington & Johnny Hodges and His Orchestra - Mississippi Dreamboat.mp3", title: "Mississippi Dreamboat" },
    {file: "musiques/calme/cool/Cool 13 - Reve/11. Tony Bennett - Day Dream.mp3 ", title: "Day Dream" },
    {file: "musiques/calme/cool/Cool 13 - Reve/12. David Sanchez - Sketches Of Dreams.mp3", title: "Sketches Of Dreams" },
    {file: "musiques/calme/cool/Cool 13 - Reve/13. Doris Day & Andre Previn with The Andre Previn Trio - Daydreaming.mp3", title: "Daydreaming" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/01. Yellow Queen.mp3", title: "Yellow Queen" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/02. Poussiere, Lumiere, Galaxie.mp3", title: "Poussiere, Lumiere, Galaxie" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/03. A Nice Fellox.mp3", title: "A Nice Fellox" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/04. Le Reflux.mp3", title: "Le Reflux" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/05. 05. Play With.mp3", title: "Play With" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/06. Paris.mp3", title: "Paris" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/07. April 1873.mp3", title: "April 1873" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/08. Andy.mp3", title: "Andy" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/09.Lua Aponta No Ceu.mp3", title: "Lua Aponta No Ceu" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/10. Like a Bird.mp3", title: "Like a Bird" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/11. Good Morning Bombay.mp3", title: "Good Morning Bombay" },
    {file: "musiques/calme/no stress/Artiste de l'Album - Album/12. Surf the sky.mp3", title: "Surf the sky" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/01. The Castle.mp3", title: "The Castle" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/02. Pastime Rime.mp3", title: "Pastime Rime" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/03. First Session.mp3", title: "First Session" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/04. On the beach.mp3", title: "On the beach" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/05. Toracia Del Mar.mp3", title: "Toracia Del Mar" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/06. Ocalia.mp3", title: "Ocalia" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/07. Midnight Jam Session.mp3", title: "Midnight Jam Session" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/08. Indian Wolf.mp3", title: "Indian Wolf" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/09. Santa Maria.mp3", title: "Santa Maria" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/10. Salam Halima.mp3", title: "Salam Halima" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/11. Emisphere.mp3", title: "Emisphere" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/12. Alguadavez.mp3", title: "Alguadavez" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/13. China Express.mp3", title: "China Express" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/14. The color of the mind.mp3", title: "The color of the mind" },
    {file: "musiques/calme/relaxation/Varius - Relaxation/15. Jeremiah's day.mp3", title: "Jeremiah's day" },
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