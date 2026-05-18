// ==========================================
// 1. CONFIGURATION CONFIG FIREBASE (À REMPLACER AVEC TES CLÉS)
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
// 2. POOL DE QUESTIONS
// ==========================================
const questionsPool = [
    { q: "Quelle est la capitale de l'Australie ?", p: ["Sydney", "Melbourne", "Canberra", "Brisbane"], r: "Canberra" },
    { q: "En quelle année a eu lieu la chute du mur de Berlin ?", p: ["1989", "1991", "1985", "1993"], r: "1989" },
    { q: "Quel est l'élément chimique dont le symbole est 'O' ?", p: ["Or", "Oxygène", "Osmium", "Ozone"], r: "Oxygène" },
    { q: "Qui a écrit 'Les Misérables' ?", p: ["Voltaire", "Hugo", "Zola", "Balzac"], r: "Hugo" }
];

// Variables globales de contrôle local
let currentQuestionIndex = -1; 
let scoreTotal = 0;           
let pseudoUser = "";          
let timerInterval;            
let startTime;                
let hasAnswered = false;      

// ==========================================
// 3. ÉCOUTEUR CLOUD EN TEMPS RÉEL (LE SECRET DE LA SYNCHRONISATION)
// ==========================================

// Dès que l'admin change d'étape dans la base de données, l'écran de TOUS les joueurs réagit instantanément
database.ref("gameState").on("value", (snapshot) => {
    const state = snapshot.val();
    if (!state) return;

    currentQuestionIndex = state.currentQuestion;

    if (state.status === "lobby") {
        switchScreen('screen-lobby');
    } 
    else if (state.status === "leaderboard") {
        switchScreen('screen-leaderboard');
    } 
    else if (state.status === "question") {
        if (pseudoUser !== "") {
            // Si le joueur est inscrit et qu'il n'a pas encore répondu à cette question
            if (!hasAnswered) {
                switchScreen('screen-game');
                showQuestion();
            } else {
                switchScreen('screen-waiting');
            }
        }
    }
});

// Écouteur permanent du classement mondial
database.ref("players").on("value", (snapshot) => {
    const playersData = snapshot.val();
    const tbody = document.getElementById('leaderboard-rows');
    if(!tbody) return;
    tbody.innerHTML = "";

    if (!playersData) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center;">Aucun joueur en ligne</td></tr>`;
        return;
    }

    // Convertir l'objet Firebase en tableau pour le trier
    let sortedPlayers = [];
    for (let id in playersData) {
        sortedPlayers.push({ pseudo: id, score: playersData[id].score });
    }
    sortedPlayers.sort((a, b) => b.score - a.score);

    // Injection visuelle en temps réel
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
// 4. FONCTIONS ACTIONS DU JEU
// ==========================================
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if(target) target.classList.add('active');
}

function startGame() {
    const inputPseudo = document.getElementById('player-pseudo').value.trim();
    if (inputPseudo === "") { alert("Pseudo requis !"); return; }
    
    pseudoUser = inputPseudo;
    scoreTotal = 0;
    hasAnswered = false;

    document.getElementById('display-pseudo').textContent = "👤 " + pseudoUser;
    document.getElementById('wait-pseudo').textContent = "👤 " + pseudoUser;

    // Enregistrement immédiat du joueur sur la base cloud globale
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
            selectAnswer(-1); // Temps dépassé
        }
    }, 1000);
}

function selectAnswer(selectedIndex) {
    if (hasAnswered) return;
    hasAnswered = true;
    clearInterval(timerInterval);

    const currentQ = questionsPool[currentQuestionIndex];
    const buttons = document.querySelectorAll('.btn-option');
    let pointsGagnes = 0;

    buttons.forEach(b => b.disabled = true);

    let timeTaken = (Date.now() - startTime) / 1000;
    if (timeTaken > 15) timeTaken = 15;

    if (selectedIndex !== -1 && currentQ.p[selectedIndex] === currentQ.r) {
        // Formule Kahoot : dégressif basé sur la vitesse
        pointsGagnes = Math.round(1000 * (1 - ((timeTaken / 15) / 2)));
        if (pointsGagnes < 500) pointsGagnes = 500;
        
        scoreTotal += pointsGagnes;
        document.getElementById('display-score').textContent = scoreTotal + " pts";

        // Envoi de la mise à jour du score cumulé sur Firebase pour synchroniser les classements
        database.ref("players/" + pseudoUser).update({ score: scoreTotal });
    }

    buttons.forEach((btn, index) => {
        if (currentQ.p[index] !== currentQ.r) btn.style.opacity = "0.2";
    });

    // Envoi immédiat sur l'écran d'attente globale en attendant la question suivante du prof
    setTimeout(() => {
        switchScreen('screen-waiting');
    }, 2000);
}

// ==========================================
// 5. BOUTONS DE COMMANDE ADMIN (POUR CHANGER LES ÉCRANS À DISTANCE)
// ==========================================
function adminAction(actionType) {
    if (actionType === 'next') {
        let nextIndex = currentQuestionIndex + 1;
        if(nextIndex >= questionsPool.length) {
            database.ref("gameState").set({ status: "leaderboard", currentQuestion: nextIndex });
        } else {
            database.ref("gameState").set({ status: "question", currentQuestion: nextIndex });
        }
    } 
    else if (actionType === 'reset') {
        database.ref("players").remove(); // Efface la liste des joueurs
        database.ref("gameState").set({ status: "lobby", currentQuestion: -1 }); // Reset l'état global
    }
}

function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}