<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kahoot - Manette Joueur</title>
    <link rel="stylesheet" href="style_joueur.css">
    <style>
        /* Styles spécifiques aux feedbacks style Kahoot */
        .feedback-screen {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-grow: 1;
            color: white;
            padding: 20px;
            font-weight: bold;
        }

        .bg-correct-top {
            background-color: #26890c;
        }

        /* Vert Kahoot */
        .bg-correct-out {
            background-color: #1368ce;
        }

        /* Bleu Kahoot */
        .bg-wrong {
            background-color: #e21b3c;
        }

        /* Rouge Kahoot */

        .feedback-title {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .feedback-points {
            font-size: 24px;
            background: rgba(255, 255, 255, 0.2);
            padding: 5px 15px;
            border-radius: 20px;
            margin-bottom: 25px;
        }

        .feedback-rank {
            font-size: 28px;
            font-weight: 800;
        }

        .feedback-streak {
            font-size: 22px;
            margin-top: 15px;
            background: #d89e00;
            padding: 8px 12px;
            border-radius: 8px;
            box-shadow: 0 4px 0 #9c7200;
        }
    </style>
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
        <div id="zone-validation" class="msg hidden">Réponse enregistrée.<br><br>Attente de la fin des votes...</div>
        <button class="btn-leave" onclick="abandonner()">🏳️ Abandonner</button>
    </div>

    <div id="player-feedback" class="hidden feedback-screen">
        <div class="feedback-title" id="fb-title">Correct !</div>
        <div class="feedback-points" id="fb-points">+850 pts</div>
        <div class="feedback-rank" id="fb-rank">Rang #3</div>
        <div id="fb-evolution" style="margin-top:10px; font-size:18px;"></div>
        <div class="feedback-streak" id="fb-streak" class="hidden">🔥 Série de 3 !</div>
    </div>

    <div id="player-end" class="hidden">
        <h2 id="end-title">Partie Terminée !</h2>
        <p id="end-desc"></p>
        <h3>Top 10 Final :</h3>
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
        let ancienScore = 0;
        let anciennePlace = -1;
        let serieBonnesReponses = 0;

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
                        setInterval(ecouterServeur, 600); // 600ms pour plus de réactivité
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
                    const classement = data.classement;

                    if (!joueur) {
                        location.reload();
                        return;
                    }

                    // Si l'hôte affiche l'écran de réponse ou le tableau des scores (correction)
                    if (step === 'reponse' || step === 'correction') {
                        document.getElementById('player-game').classList.add('hidden');
                        document.getElementById('player-wait').classList.add('hidden');

                        // Trouver la place actuelle du joueur
                        let maPlace = classement.findIndex(j => j.pseudo === monPseudo) + 1;
                        if (maPlace === 0) maPlace = ">10";

                        let pointsGagnes = joueur.score - ancienScore;

                        // Gestion de l'affichage de l'écran intermédiaire Kahoot
                        const fbScreen = document.getElementById('player-feedback');
                        fbScreen.classList.remove('hidden');

                        if (pointsGagnes > 0) {
                            // Réponse juste
                            document.getElementById('fb-title').innerText = "CORRECT ! 👍";
                            document.getElementById('fb-points').innerText = `+${pointsGagnes} pts`;
                            document.getElementById('fb-points').classList.remove('hidden');

                            if (maPlace <= 5 && maPlace !== ">10") {
                                fbScreen.className = "feedback-screen bg-correct-top"; // Écran Vert
                            } else {
                                fbScreen.className = "feedback-screen bg-correct-out"; // Écran Bleu
                            }
                        } else {
                            // Réponse fausse ou pas de réponse à temps
                            document.getElementById('fb-title').innerText = "INCORRECT ❌";
                            document.getElementById('fb-points').classList.add('hidden');
                            fbScreen.className = "feedback-screen bg-wrong"; // Écran Rouge
                        }

                        document.getElementById('fb-rank').innerText = `Rang #${maPlace}`;

                        // Calcul de l'évolution de place
                        let txtEvolution = "";
                        if (anciennePlace !== -1 && maPlace !== ">10" && anciennePlace !== ">10") {
                            if (maPlace < anciennePlace) {
                                txtEvolution = `▲ Vous avez gagné ${anciennePlace - maPlace} place(s) !`;
                            } else if (maPlace > anciennePlace) {
                                txtEvolution = `▼ Vous avez perdu ${maPlace - anciennePlace} place(s)`;
                            } else {
                                txtEvolution = "➔ Position maintenue";
                            }
                        }
                        document.getElementById('fb-evolution').innerText = txtEvolution;
                        return;
                    }

                    if (step === 'podium' || (joueur && joueur.actif == 0)) {
                        document.getElementById('player-feedback').classList.add('hidden');
                        basculerEcranFin(step === 'podium' ? "Match Terminé !" : "Abandonné !", joueur.score, classement);
                        return;
                    }

                    // ÉTAPE DE JEU (VOTE OUVERT)
                    if (step === 'jeu') {
                        document.getElementById('player-wait').classList.add('hidden');
                        document.getElementById('player-feedback').classList.add('hidden');
                        document.getElementById('player-game').classList.remove('hidden');

                        document.getElementById('txt-score').innerText = `Score : ${joueur.score}`;
                        document.getElementById('txt-q').innerText = `Q: ${currentQ + 1}/70`;

                        // Si on passe à une nouvelle question, on débloque les boutons
                        if (currentQ !== derniereQuestionVue) {
                            // Sauvegarde de l'ancien état juste avant de voter pour la suite
                            if (derniereQuestionVue !== -1) {
                                ancienScore = parseInt(joueur.score);
                                anciennePlace = classement.findIndex(j => j.pseudo === monPseudo) + 1;
                                if (anciennePlace === 0) anciennePlace = ">10";
                            }

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
            if (confirm("Confirmer l'abandon ?")) {
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

        function basculerEcranFin(titre, scoreFinal, classement) {
            document.getElementById('player-game').classList.add('hidden');
            document.getElementById('player-end').classList.remove('hidden');
            document.getElementById('end-title').innerText = titre;
            document.getElementById('end-desc').innerHTML = `Score final : <strong>${scoreFinal} points</strong>`;

            let html = "";
            classement.forEach((row, index) => {
                let styleLigne = (row.pseudo === monPseudo) ? "style='background: #fffde7; border: 2px solid #ffca28;'" : "";
                html += `<tr ${styleLigne}><td><strong>#${index+1}</strong></td><td>${row.pseudo}</td><td>${row.score} pts</td></tr>`;
            });
            document.getElementById('leaderboard-body').innerHTML = html;
        }
    </script>
</body>

</html>