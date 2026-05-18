// ==========================================
// 1. CONFIGURATION FIREBASE (À REMPLACER)
// ==========================================
const firebaseConfig = {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_AUTH_DOMAIN",
    databaseURL: "https://VOTRE_PROJET.firebaseio.com",
    projectId: "VOTRE_PROJECT_ID",
    storageBucket: "VOTRE_STORAGE_BUCKET",
    messagingSenderId: "VOTRE_SENDER_ID",
    appId: "VOTRE_APP_ID"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ==========================================
// 2. BANQUE DE QUESTIONS (POOL DE 60)
// ==========================================
const questionsPool = [
    { q: "Quelle est la capitale de l'Australie ?", p: ["Sydney", "Melbourne", "Canberra", "Brisbane"], r: "Canberra" },
    { q: "En quelle année a eu lieu la chute du mur de Berlin ?", p: ["1989", "1991", "1985", "1993"], r: "1989" },
    { q: "Quel est l'élément chimique dont le symbole est 'O' ?", p: ["Or", "Oxygène", "Osmium", "Ozone"], r: "Oxygène" },
    { q: "Qui a écrit 'Les Misérables' ?", p: ["Voltaire", "Hugo", "Zola", "Balzac"], r: "Hugo" },
    { q: "Quelle planète est surnommée la planète rouge ?", p: ["Mars", "Jupiter", "Vénus", "Mercure"], r: "Mars" },
    { q: "Quel est le plus grand océan du monde ?", p: ["Atlantique", "Indien", "Arctique", "Pacifique"], r: "Pacifique" },
    { q: "Quel pays a remporté la Coupe du Monde de football en 2018 ?", p: ["Brésil", "Allemagne", "France", "Argentine"], r: "France" },
    { q: "Combien d'os compte un corps humain adulte ?", p: ["106", "206", "306", "406"], r: "206" },
    { q: "Qui a peint la célèbre Joconde ?", p: ["Monet", "Van Gogh", "Da Vinci", "Picasso"], r: "Da Vinci" },
    { q: "Quelle est la capitale du Japon ?", p: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], r: "Tokyo" },
    { q: "Quel est le plus grand mammifère du monde ?", p: ["Éléphant", "Baleine bleue", "Girafe", "Requin baleine"], r: "Baleine bleue" },
    { q: "En quelle année a débuté la Première Guerre mondiale ?", p: ["1912", "1914", "1918", "1939"], r: "1914" },
    { q: "Quel gaz les plantes absorbent-elles pour la photosynthèse ?", p: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"], r: "Dioxyde de carbone" },
    { q: "Quel métal est le plus cher du monde parmi ces propositions ?", p: ["Or", "Platine", "Rhodium", "Argent"], r: "Rhodium" },
    { q: "Qui est le créateur du réseau social Facebook ?", p: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], r: "Mark Zuckerberg" },
    { q: "Quel est le plus long fleuve du monde ?", p: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Yangzi Jiang"], r: "L'Amazone" },
    { q: "Combien de cœurs possède une pieuvre ?", p: ["1", "2", "3", "4"], r: "3" },
    { q: "Quel est le pays d'origine de la marque de voitures BMW ?", p: ["Allemagne", "États-Unis", "Japon", "France"], r: "Allemagne" },
    { q: "Quel acteur incarne Jack Sparrow dans Pirates des Caraïbes ?", p: ["Brad Pitt", "Johnny Depp", "Tom Cruise", "Leonardo DiCaprio"], r: "Johnny Depp" },
    { q: "Quelle langue est la plus parlée nativement au monde ?", p: ["Anglais", "Espagnol", "Chinois mandarin", "Hindi"], r: "Chinois mandarin" },
    { q: "Quel est le plus petit pays du monde ?", p: ["Monaco", "Malte", "Le Vatican", "Saint-Marin"], r: "Le Vatican" },
    { q: "Quel est l'organe le plus lourd du corps humain ?", p: ["Le cerveau", "Le foie", "La peau", "Le cœur"], r: "La peau" },
    { q: "Quel célèbre scientifique a développé la théorie de la relativité ?", p: ["Isaac Newton", "Albert Einstein", "Galilée", "Stephen Hawking"], r: "Albert Einstein" },
    { q: "Quelle est la monnaie officielle du Royaume-Uni ?", p: ["Euro", "Livre sterling", "Dollar", "Franc"], r: "Livre sterling" },
    { q: "Quel sorcier est le pire ennemi de Harry Potter ?", p: ["Dumbledore", "Snape", "Grindelwald", "Voldemort"], r: "Voldemort" },
    { q: "Dans quel pays se trouvent les pyramides de Gizeh ?", p: ["Maroc", "Égypte", "Mexique", "Grèce"], r: "Égypte" },
    { q: "Quel instrument de musique possède 88 touches ?", p: ["La guitare", "L'accordéon", "Le piano", "La harpe"], r: "Le piano" },
    { q: "Quelle est la vitesse de la lumière (environ) ?", p: ["300 000 km/s", "150 000 km/s", "30 000 km/s", "3 000 km/s"], r: "300 000 km/s" },
    { q: "Quel super-héros est également connu sous le nom de Bruce Wayne ?", p: ["Superman", "Spider-Man", "Iron Man", "Batman"], r: "Batman" },
    { q: "Quel pays a pour hymne national 'La Marseillaise' ?", p: ["Belgique", "Canada", "France", "Suisse"], r: "France" },
    { q: "Quel est le symbole atomique de l'Or ?", p: ["O", "Ag", "Au", "Fe"], r: "Au" },
    { q: "Quelle est la capitale du Canada ?", p: ["Toronto", "Montréal", "Vancouver", "Ottawa"], r: "Ottawa" },
    { q: "Quel oiseau est incapable de voler mais nage très bien ?", p: ["L'aigle", "Le manchot", "L'autruche", "Le pélican"], r: "Le manchot" },
    { q: "Quel groupe de musique chantait 'Bohemian Rhapsody' ?", p: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"], r: "Queen" },
    { q: "Quel est le plus grand désert chaud du monde ?", p: ["Gobi", "Sahara", "Kalahari", "Atacama"], r: "Sahara" },
    { q: "Qui a découvert la pénicilline ?", p: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Thomas Edison"], r: "Alexander Fleming" },
    { q: "Combien de minutes y a-t-il dans une journée ?", p: ["1200", "1440", "1680", "2400"], r: "1440" },
    { q: "De quel pays la pizza est-elle originaire ?", p: ["Espagne", "France", "Italie", "Grèce"], r: "Italie" },
    { q: "Dans quel domaine d'activité s'est illustré Coco Chanel ?", p: ["La peinture", "La mode", "La musique", "La littérature"], r: "La mode" },
    { q: "Quel monument parisien a été construit pour l'Exposition Universelle de 1889 ?", p: ["Arc de Triomphe", "Musée du Louvre", "Tour Eiffel", "Sacré-Cœur"], r: "Tour Eiffel" },
    { q: "Combien de continents compte la Terre ?", p: ["5", "6", "7", "8"], r: "7" },
    { q: "Quel est le nom de la galaxie dans laquelle nous vivons ?", p: ["Andromède", "La Voie Lactée", "Orion", "Magellan"], r: "La Voie Lactée" },
    { q: "Qui est le dieu grec de la foudre et du ciel ?", p: ["Poséidon", "Hadès", "Zeus", "Apollon"], r: "Zeus" },
    { q: "Quel pays est le plus grand du monde par sa superficie ?", p: ["Canada", "États-Unis", "Chine", "Russie"], r: "Russie" },
    { q: "Quel est le nom de la célèbre poupée mannequin créée en 1959 ?", p: ["Barbie", "Bratz", "Chucky", "Polly Pocket"], r: "Barbie" },
    { q: "Combien de couleurs y a-t-il dans l'arc-en-ciel ?", p: ["5", "6", "7", "8"], r: "7" },
    { q: "Quelle entreprise a créé le smartphone iPhone ?", p: ["Samsung", "Google", "Microsoft", "Apple"], r: "Apple" },
    { q: "Quelle est la capitale de l'Italie ?", p: ["Milan", "Venise", "Naples", "Rome"], r: "Rome" },
    { q: "Quel écrivain a créé le célèbre détective Sherlock Holmes ?", p: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Stephen King"], r: "Arthur Conan Doyle" },
    { q: "Quel est le fruit d'où provient le chocolat ?", p: ["La noix de coco", "Le cacao", "Le café", "La vanille"], r: "Le cacao" },
    { q: "En quelle année l'Homme a-t-il marché sur la Lune pour la première fois ?", p: ["1965", "1969", "1972", "1975"], r: "1969" },
    { q: "Quel gaz compose principalement l'atmosphère de la Terre ?", p: ["Oxygène", "Azote", "Argon", "Dioxyde de carbone"], r: "Azote" },
    { q: "Quelle est la plus haute montagne du monde ?", p: ["Le K2", "Le Mont Blanc", "L'Everest", "Le Kilimandjaro"], r: "L'Everest" },
    { q: "Quelle entreprise utilise un panda comme logo pour la protection de la nature ?", p: ["Greenpeace", "WWF", "Unicef", "Unesco"], r: "WWF" },
    { q: "Quel est le nom du célèbre jeu vidéo où l'on empile des blocs colorés ?", p: ["Minecraft", "Pac-Man", "Tetris", "Zelda"], r: "Tetris" },
    { q: "Quel pays a offert la Statue de la Liberté aux États-Unis ?", p: ["Royaume-Uni", "France", "Espagne", "Italie"], r: "France" },
    { q: "Quel est le symbole chimique du fer ?", p: ["F", "Fe", "Fr", "Ir"], r: "Fe" },
    { q: "Quel est le nom de la femelle du cheval ?", p: ["La jument", "La vache", "La mule", "La chèvre"], r: "La jument" },
    { q: "Combien de côtés possède un hexagone ?", p: ["5", "6", "7", "8"], r: "6" },
    { q: "Qui a composé la célèbre Lettre à Élise ?", p: ["Mozart", "Bach", "Beethoven", "Chopin"], r: "Beethoven" }
];

// Variables globales de contrôle local
let currentQuestionIndex = -1; 
let scoreTotal = 0;           
let pseudoUser = "";          
let timerInterval;            
let startTime;                
let hasAnswered = false;      

// ==========================================
// 3. ÉCOUTEURS TEMPS RÉEL (SYNCHRONISATION CLOUD)
// ==========================================

// Gère le changement d'écran synchronisé de TOUS les joueurs en même temps
database.ref("gameState").on("value", (snapshot) => {
    const state = snapshot.val();
    if (!state) return;

    currentQuestionIndex = state.currentQuestion;

    if (state.status === "lobby") {
        hasAnswered = false;
        switchScreen('screen-lobby');
    } 
    else if (state.status === "leaderboard") {
        switchScreen('screen-leaderboard');
    } 
    else if (state.status === "question") {
        if (pseudoUser !== "") {
            // Si l'utilisateur n'a pas encore répondu à l'index de question actuel envoyé par l'admin
            if (!hasAnswered) {
                switchScreen('screen-game');
                showQuestion();
            } else {
                switchScreen('screen-waiting');
            }
        }
    }
});

// Gère la mise à jour des classements en continu sur les écrans
database.ref("players").on("value", (snapshot) => {
    const playersData = snapshot.val();
    const tbody = document.getElementById('leaderboard-rows');
    if (!tbody) return;
    tbody.innerHTML = "";

    if (!playersData) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:#94a3b8;">Aucun joueur connecté</td></tr>`;
        return;
    }

    let sortedPlayers = [];
    for (let id in playersData) {
        sortedPlayers.push({ pseudo: id, score: playersData[id].score });
    }
    sortedPlayers.sort((a, b) => b.score - a.score);

    sortedPlayers.forEach((player, index) => {
        const tr = document.createElement('tr');
        if (index < 3) tr.className = "top-three";
        tr.innerHTML = `
            <td><strong>#${index + 1}</strong></td>
            <td>${escapeHTML(player.pseudo)}</td>
            <td class="txt-success">${player.score} pts</td>
        `;
        tbody.appendChild(tr);
    });
});

// ==========================================
// 4. FONCTIONS DE LOGIQUE DE PARTIE
// ==========================================
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

function startGame() {
    const inputPseudo = document.getElementById('player-pseudo').value.trim();
    if (inputPseudo === "") { alert("Veuillez renseigner un pseudo valide !"); return; }
    
    pseudoUser = inputPseudo;
    scoreTotal = 0;
    hasAnswered = false;

    document.getElementById('display-pseudo').textContent = "👤 " + pseudoUser;
    document.getElementById('wait-pseudo').textContent = "👤 " + pseudoUser;

    // Écrit le profil du joueur sur Firebase
    database.ref("players/" + pseudoUser).set({ score: 0 });

    switchScreen('screen-waiting');
}

function showQuestion() {
    if (currentQuestionIndex < 0 || currentQuestionIndex >= questionsPool.length) return;

    const currentQ = questionsPool[currentQuestionIndex];
    document.getElementById('question-text').textContent = `Q${currentQuestionIndex + 1} : ${currentQ.q}`;
    
    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt-${i}`).textContent = currentQ.p[i];
        const btn = document.querySelectorAll('.btn-option')[i];
        btn.disabled = false;
        btn.style.opacity = "1";
    }

    let duration = 15;
    const chronoElement = document.getElementById('chrono');
    chronoElement.textContent = duration;
    startTime = Date.now();

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        duration--;
        chronoElement.textContent = duration;
        if (duration <= 0) {
            clearInterval(timerInterval);
            selectAnswer(-1); // Temps mort
        }
    }, 1000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timerInterval);
    hasAnswered = true;

    const currentQ = questionsPool[currentQuestionIndex];
    const buttons = document.querySelectorAll('.btn-option');
    let pointsGagnes = 0;

    buttons.forEach(b => b.disabled = true);

    let timeTaken = (Date.now() - startTime) / 1000;
    if (timeTaken > 15) timeTaken = 15;

    if (selectedIndex !== -1 && currentQ.p[selectedIndex] === currentQ.r) {
        // Formule dégressive Kahoot (1000 pts max, 500 pts min)
        pointsGagnes = Math.round(1000 * (1 - ((timeTaken / 15) / 2)));
        if (pointsGagnes < 500) pointsGagnes = 500;
        
        scoreTotal += pointsGagnes;
        document.getElementById('display-score').textContent = scoreTotal + " pts";

        // pousse le nouveau score sur le Cloud
        database.ref("players/" + pseudoUser).update({ score: scoreTotal });
    }

    buttons.forEach((btn, index) => {
        if (currentQ.p[index] !== currentQ.r) btn.style.opacity = "0.2";
    });

    // Renvoie le joueur sur l'écran d'attente au bout de 2 secondes
    setTimeout(() => {
        switchScreen('screen-waiting');
    }, 2000);
}

// ==========================================
// 5. GESTION DES COMMANDES MAÎTRE DU JEU (ADMIN)
// ==========================================
function adminAction(actionType) {
    if (actionType === 'next') {
        hasAnswered = false; // Réinitialise le verrou pour la nouvelle question
        let nextIndex = currentQuestionIndex + 1;
        
        if (nextIndex >= questionsPool.length) {
            database.ref("gameState").set({ status: "leaderboard", currentQuestion: nextIndex });
        } else {
            database.ref("gameState").set({ status: "question", currentQuestion: nextIndex });
        }
    } 
    else if (actionType === 'reset') {
        if (confirm("Voulez-vous réinitialiser la partie globale et vider le classement ?")) {
            database.ref("players").remove();
            database.ref("gameState").set({ status: "lobby", currentQuestion: -1 });
        }
    }
}

function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}