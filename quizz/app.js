// Banque de données de questions (Exemple de structure à répéter jusqu'à 70 questions)
const questionsData = [
    { q: "Quelle est la capitale de la France ?", a: ["Lyon", "Marseille", "Paris", "Bordeaux"], r: 2 },
    { q: "Qui a peint la Joconde ?", a: ["Van Gogh", "Monet", "De Vinci", "Picasso"], r: 2 },
    { q: "Quelle planète est la plus proche du Soleil ?", a: ["Terre", "Mercure", "Mars", "Jupiter"], r: 1 },
    { q: "Combien de continents y a-t-il sur Terre ?", a: ["5", "6", "7", "8"], r: 2 },
    { q: "Quel est l'océan le plus vaste du monde ?", a: ["Atlantique", "Indien", "Arctique", "Pacifique"], r: 3 }
    // Ajoutez vos questions ici pour atteindre le total de 70
];

let pseudo = "";
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    const input = document.getElementById('pseudo').value.trim();
    if (input === "") {
        alert("Veuillez entrer un pseudo !");
        return;
    }
    pseudo = input;
    document.getElementById('screen-login').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questionsData.length || currentQuestionIndex >= 70) {
        leaveQuiz(); // Fin automatique si fin de la liste ou 70 atteint
        return;
    }

    document.getElementById('info-progress').innerText = `Question : ${currentQuestionIndex + 1}/70`;
    document.getElementById('info-score').innerText = `Score : ${score}`;

    const currentQuestion = questionsData[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuestion.q;

    const container = document.getElementById('answers-container');
    container.innerHTML = "";

    currentQuestion.a.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = "btn-answer";
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        container.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questionsData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.r) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

// Fonction appelée en cliquant sur "Arrêter" ou à la fin du questionnaire
function leaveQuiz() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-leaderboard').classList.remove('hidden');
    
    document.getElementById('final-player-score').innerText = 
        `${pseudo}, vous avez obtenu ${score} point(s) sur ${currentQuestionIndex} question(s) jouée(s).`;

    // Envoi du score au serveur avec Fetch API
    fetch('sauvegarder.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            pseudo: pseudo,
            score: score,
            totalJoué: currentQuestionIndex
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadLeaderboard();
        } else {
            console.error("Erreur lors de l'enregistrement");
        }
    });
}

function loadLeaderboard() {
    fetch('sauvegarder.php')
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('leaderboard-rows');
        tbody.innerHTML = "";
        data.forEach((row, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>#${index + 1}</strong></td>
                <td>${escapeHtml(row.pseudo)}</td>
                <td>${row.score}</td>
                <td>${row.questions_jouees}</td>
            `;
            tbody.appendChild(tr);
        });
    });
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}