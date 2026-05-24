<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Kahoot - Écran Principal (Hôte)</title>
    <link rel="stylesheet" href="style_hote.css">
</head>

<body>

    <h1>Kahoot Local Quiz — Écran Géant</h1>
    <hr class="separator">

    <div id="panel-attente">
        <h2>En attente des joueurs...</h2>
        <button class="btn btn-start" onclick="lancerPartie()">LANCER LE JEU</button>
        <h3>Joueurs connectés (<span id="count-joueurs">0</span>) :</h3>
        <div id="liste-joueurs"></div>
    </div>

    <div id="panel-jeu" class="box hidden">
        <h2 id="q-numero">Question 1/70</h2>
        <h1 id="q-texte">Texte de la question</h1>
        <div class="grid">
            <div class="rep rep-0">🔺 <span id="r0"></span></div>
            <div class="rep rep-1">🔷 <span id="r1"></span></div>
            <div class="rep rep-2">🟢 <span id="r2"></span></div>
            <div class="rep rep-3">🟩 <span id="r3"></span></div>
        </div>
        <div class="controls">
            <button class="btn btn-next" onclick="suivant()">QUESTION SUIVANTE ➡️</button>
            <button class="btn btn-stop" onclick="arreterPartie()">ARRÊTER LE MATCH 🛑</button>
        </div>
    </div>

    <div id="panel-podium" class="box hidden">
        <h1 class="podium-title">🏆 TABLEAU DES SCORES 🏆</h1>
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

                    document.getElementById('panel-attente').classList.toggle('hidden', step !== 'attente');
                    document.getElementById('panel-jeu').classList.toggle('hidden', step !== 'jeu');
                    document.getElementById('panel-podium').classList.toggle('hidden', step !== 'podium');

                    if (step === 'attente') {
                        document.getElementById('count-joueurs').innerText = data.joueurs.length;
                        document.getElementById('liste-joueurs').innerHTML = data.joueurs.map(j => `<span>${j.pseudo}</span>`).join(' ');
                    } else if (step === 'jeu') {
                        document.getElementById('q-numero').innerText = `Question ${qIndex + 1} / 70`;
                        document.getElementById('q-texte').innerText = questionsData[qIndex].q;
                        document.getElementById('r0').innerText = questionsData[qIndex].a[0];
                        document.getElementById('r1').innerText = questionsData[qIndex].a[1];
                        document.getElementById('r2').innerText = questionsData[qIndex].a[2];
                        document.getElementById('r3').innerText = questionsData[qIndex].a[3];
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

        function lancerPartie() {
            suivant();
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