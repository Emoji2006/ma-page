<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kahoot - Manette Joueur</title>
    <link class="link-css" rel="stylesheet" href="style_joueur.css">
</head>

<body>

    <div id="player-login">
        <h2>Rejoindre le Quiz</h2>
        <input type="text" id="pseudo" placeholder="Entrez votre Pseudo..." maxlength="15">
        <button class="btn-join" onclick="rejoindre()">ENTRER</button>
    </div>

    <div id="player-wait" class="hidden">
        <div class="msg">📍 Connecté ! <br><br> Regardez l'écran géant, la partie va commencer...</div>
    </div>

    <div id="player-game" class="hidden">
        <div class="game-status">
            <span id="txt-score">Score : 0</span>
            <span id="txt-q">Question : --</span>
        </div>

        <div id="zone-boutons" class="manette">
            <button class="pad pad-0" onclick="voter(0)">🔺</button>
            <button class="pad pad-1" onclick="voter(1)">🔷</button>
            <button class="pad pad-2" onclick="voter(2)">🟢</button>
            <button class="pad pad-3" onclick="voter(3)">🟩</button>
        </div>

        <div id="zone-validation" class="msg hidden">Réponse enregistrée. Attente de l'écran géant...</div>

        <button class="btn-leave" onclick="abandonner()">🏳️ Abandonner et figer mon score</button>
    </div>

    <div id="player-end" class="hidden">
        <h2 id="end-title">Partie Terminée !</h2>
        <p id="end-desc"></p>

        <h3>Top 10 Actuel :</h3>
        <table>
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Pseudo</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody id="leaderboard-body"></tbody>
        </table>
        <button class="btn-join btn-restart" onclick="location.reload()">Retour au menu</button>
    </div>

    <script src="questions.js"></script>
    <script>
        let monPseudo = "";
        let derniereQuestionVue = -1;

        function rejoindre() {
            const pseudoInput = document.getElementById('pseudo').value.trim();
            if (!pseudoInput) return alert("Pseudo requis");

            fetch('serveur.php?action=joueur_rejoindre', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        pseudo: pseudoInput
                    })
                })
                .then(r => r.json())
                .then(data => {
                    if (data.success) {
                        monPseudo = pseudoInput;
                        document.getElementById('player-login').classList.add('hidden');
                        document.getElementById('player-wait').classList.remove('hidden');
                        setInterval(ecouterServeur, 700);
                    } else {
                        alert(data.error);
                    }
                });
        }

        function ecouterServeur() {
            if (!monPseudo) return;
            fetch(`serveur.php?action=joueur_statut&pseudo=${encodeURIComponent(monPseudo)}`)
                .then(r => r.json())
                .then(data => {
                    const step = data.statut.etape;
                    const currentQ = parseInt(data.statut.question_actuelle);
                    const joueur = data.joueur;

                    if (joueur && joueur.actif == 0) {
                        basculerEcranFin(`Vous avez abandonné !`, `Votre score est figé à <strong>${joueur.score} points</strong> (${joueur.questions_jouees}/70 q.).`, data.classement);
                        return;
                    }
                    if (step === 'podium') {
                        basculerEcranFin(`Fin du match !`, `Vous terminez avec <strong>${joueur ? joueur.score : 0} points</strong>.`, data.classement);
                        return;
                    }
                    if (step === 'jeu') {
                        document.getElementById('player-wait').classList.add('hidden');
                        document.getElementById('player-game').classList.remove('hidden');
                        document.getElementById('txt-score').innerText = `Score : ${joueur.score}`;
                        document.getElementById('txt-q').innerText = `Q: ${currentQ + 1}/70`;

                        if (currentQ !== derniereQuestionVue) {
                            derniereQuestionVue = currentQ;
                            document.getElementById('zone-boutons').classList.remove('hidden');
                            document.getElementById('zone-validation').classList.add('hidden');
                        }
                    }
                });
        }

        function voter(indexReponse) {
            document.getElementById('zone-boutons').classList.add('hidden');
            document.getElementById('zone-validation').classList.remove('hidden');

            const bonneReponse = questionsData[derniereQuestionVue].r;
            const estCorrect = (indexReponse === bonneReponse);

            fetch('serveur.php?action=joueur_repondre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pseudo: monPseudo,
                    question_index: derniereQuestionVue,
                    correct: estCorrect
                })
            });
        }

        function abandonner() {
            if (confirm("Confirmer l'abandon ? Votre classement sera conservé.")) {
                fetch('serveur.php?action=joueur_abandonner', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        pseudo: monPseudo
                    })
                });
            }
        }

        function basculerEcranFin(titre, description, classement) {
            document.getElementById('player-wait').classList.add('hidden');
            document.getElementById('player-game').classList.add('hidden');
            document.getElementById('player-end').classList.remove('hidden');
            document.getElementById('end-title').innerText = titre;
            document.getElementById('end-desc').innerHTML = description;

            let html = "";
            classement.forEach((row, index) => {
                html += `<tr><td><strong>#${index+1}</strong></td><td>${row.pseudo}</td><td>${row.score} pts</td></tr>`;
            });
            document.getElementById('leaderboard-body').innerHTML = html;
        }
    </script>
</body>

</html>