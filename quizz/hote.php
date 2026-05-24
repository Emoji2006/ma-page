<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Kahoot - Écran Principal (Hôte)</title>
    <link rel="stylesheet" href="style_hote.css">
    <style>
        .counter-box {
            font-size: 22px;
            background: rgba(255, 255, 255, 0.2);
            display: inline-block;
            padding: 5px 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            font-weight: bold;
        }

        .score-panel-title {
            font-size: 32px;
            color: #ffca28;
            font-weight: 800;
            margin-bottom: 20px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .top5-list {
            list-style: none;
            padding: 0;
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
        }

        .top5-list li {
            background: white;
            color: #333;
            margin: 10px 0;
            padding: 15px 25px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 22px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .top5-list li:nth-child(1) {
            border-left: 8px solid #f1c40f;
            background: #fffde7;
        }

        .rep.fade {
            opacity: 0.15;
            transform: scale(0.95);
            transition: all 0.4s ease;
        }

        .rep.correct-answer {
            border: 5px solid white;
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
            transform: scale(1.03);
            transition: all 0.4s ease;
        }
    </style>
</head>

<body>

    <h1>Kahoot Local Quiz — Écran Géant</h1>
    <hr class="separator">

    <div id="panel-attente">
        <h2>En attente des joueurs...</h2>
        <button class="btn btn-start" onclick="suivant()">LANCER LE JEU</button>
        <h3>Joueurs connectés (<span id="count-joueurs">0</span>) :</h3>
        <div id="liste-joueurs"></div>
    </div>

    <div id="panel-jeu" class="box hidden">
        <div style="display:flex; justify-content: space-between; align-items: center;">
            <h2 id="q-numero">Question 1/70</h2>
            <div id="vote-counter" class="counter-box">Réponses : 0 / 0</div>
        </div>
        <h1 id="q-texte">Texte de la question</h1>

        <div class="grid" id="question-grid">
            <div id="box-r0" class="rep rep-0">🔺 <span id="r0"></span></div>
            <div id="box-r1" class="rep rep-1">🔷 <span id="r1"></span></div>
            <div id="box-r2" class="rep rep-2">🟢 <span id="r2"></span></div>
            <div id="box-r3" class="rep rep-3">🟩 <span id="r3"></span></div>
        </div>

        <div class="controls">
            <button id="btn-action" class="btn btn-next" onclick="suivant()">VOIR LE TOP 5 📊</button>
            <button class="btn btn-stop" onclick="arreterPartie()">ARRÊTER LE MATCH 🛑</button>
        </div>
    </div>

    <div id="panel-correction" class="box hidden">
        <h1 class="score-panel-title">⚡ LE TOP 5 DES JOUEURS ⚡</h1>
        <ul id="mini-podium" class="top5-list"></ul>
        <div class="controls">
            <button class="btn btn-next" onclick="suivant()" style="background:#26890c;">QUESTION SUIVANTE ➡️</button>
        </div>
    </div>

    <div id="panel-podium" class="box hidden">
        <h1 class="podium-title">🏆 CLASSEMENT GÉNÉRAL FINAL 🏆</h1>
        <div id="podium-rows"></div>
        <button class="btn btn-reset" onclick="reinitialiser()">Recommencer une partie</button>
    </div>

    <script src="questions.js"></script>
    <script>
        function synchroniser() {
            fetch('serveur.php?action=hote_statut')
                .then(r => r.json())
                .then(data => {
                    const step = data.statut.etape;
                    const qIndex = parseInt(data.statut.question_actuelle);

                    // Gestion des affichages de panneaux
                    document.getElementById('panel-attente').classList.toggle('hidden', step !== 'attente');
                    document.getElementById('panel-jeu').classList.toggle('hidden', step !== 'jeu' && step !== 'reponse');
                    document.getElementById('panel-correction').classList.toggle('hidden', step !== 'correction');
                    document.getElementById('panel-podium').classList.toggle('hidden', step !== 'podium');

                    if (step === 'attente') {
                        document.getElementById('count-joueurs').innerText = data.joueurs.length;
                        document.getElementById('liste-joueurs').innerHTML = data.joueurs.map(j =>
                            `<span onclick="supprimerJoueur('${j.pseudo.replace(/'/g, "\\'")}')" title="Cliquez pour exclure">${j.pseudo}</span>`
                        ).join(' ');
                    } else if (step === 'jeu' || step === 'reponse') {
                        document.getElementById('q-numero').innerText = `Question ${qIndex + 1} / 70`;
                        document.getElementById('q-texte').innerText = questionsData[qIndex].q;
                        document.getElementById('r0').innerText = questionsData[qIndex].a[0];
                        document.getElementById('r1').innerText = questionsData[qIndex].a[1];
                        document.getElementById('r2').innerText = questionsData[qIndex].a[2];
                        document.getElementById('r3').innerText = questionsData[qIndex].a[3];

                        document.getElementById('vote-counter').innerText = `Réponses : ${data.nb_reponses} / ${data.total_actifs}`;
                        const bonneRepIndex = questionsData[qIndex].r;

                        if (step === 'jeu') {
                            document.getElementById('btn-action').innerText = "PASSER LA QUESTION 👁️";
                            document.getElementById('btn-action').style.background = "#7f8c8d";
                            for (let i = 0; i < 4; i++) {
                                document.getElementById(`box-r${i}`).classList.remove('fade', 'correct-answer');
                            }
                        } else if (step === 'reponse') {
                            // Changement automatique ou forcé : on affiche la bonne réponse sur l'écran géant
                            document.getElementById('btn-action').innerText = "VOIR LE TOP 5 📊";
                            document.getElementById('btn-action').style.background = "#1368ce";
                            for (let i = 0; i < 4; i++) {
                                const el = document.getElementById(`box-r${i}`);
                                if (i === bonneRepIndex) {
                                    el.classList.remove('fade');
                                    el.classList.add('correct-answer');
                                } else {
                                    el.classList.remove('correct-answer');
                                    el.classList.add('fade');
                                }
                            }
                        }
                    } else if (step === 'correction') {
                        // C'est ici que l'hôte affiche le tableau des scores
                        let htmlMini = "";
                        const top5 = data.joueurs.slice(0, 5);
                        top5.forEach((j, idx) => {
                            let statusText = j.actif == 1 ? "" : " <small style='color:red;'>(Abandon)</small>";
                            htmlMini += `<li><span><strong>#${idx+1}</strong> ${j.pseudo}${statusText}</span> <span>${j.score} pts</span></li>`;
                        });
                        document.getElementById('mini-podium').innerHTML = htmlMini;
                    } else if (step === 'podium') {
                        let html = "<ul>";
                        data.joueurs.forEach((j, idx) => {
                            let statusText = j.actif == 1 ? "" : " <small style='color:red;'>(Abandon)</small>";
                            html += `<li><span><strong>#${idx+1}</strong> ${j.pseudo}${statusText}</span> <span>${j.score} pts (${j.questions_jouees}/70)</span></li>`;
                        });
                        html += "</ul>";
                        document.getElementById('podium-rows').innerHTML = html;
                    }
                });
        }

        function supprimerJoueur(pseudo) {
            if (confirm(`Exclure définitivement "${pseudo}" de la partie ?`)) {
                fetch('serveur.php?action=hote_supprimer_joueur', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        pseudo: pseudo
                    })
                }).then(() => synchroniser());
            }
        }

        function suivant() {
            fetch('serveur.php?action=hote_suivant');
        }

        function arreterPartie() {
            fetch('serveur.php?action=hote_fin');
        }

        function reinitialiser() {
            fetch('serveur.php?action=hote_reinitialiser').then(() => location.reload());
        }

        setInterval(synchroniser, 700);
    </script>
</body>

</html>