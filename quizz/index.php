<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Culture Générale</title>
    <style>
        :root {
            --primary: #4a90e2;
            --danger: #e74c3c;
            --success: #2ecc71;
            --dark: #2c3e50;
            --light: #f8f9fa;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; }
        body { background: #eef2f3; color: var(--dark); padding: 20px; display: flex; justify-content: center; }
        .container { width: 100%; max-width: 600px; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        h1, h2 { text-align: center; margin-bottom: 20px; }
        .hidden { display: none !important; }
        
        /* Formulaires et Boutons */
        input[type="text"] { width: 100%; padding: 12px; margin-bottom: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; }
        button { width: 100%; padding: 12px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: 0.2s; font-weight: bold; }
        .btn-main { background: var(--primary); color: white; }
        .btn-danger { background: var(--danger); color: white; margin-top: 15px; }
        button:hover { opacity: 0.9; }

        /* Zone de Quiz */
        .quiz-header { display: flex; justify-content: space-between; margin-bottom: 20px; font-weight: bold; background: var(--light); padding: 10px; border-radius: 6px; }
        .question-box { font-size: 18px; font-weight: 600; margin-bottom: 20px; text-align: center; }
        .answers-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
        .btn-answer { background: var(--light); border: 2px solid #ddd; color: var(--dark); text-align: left; }
        .btn-answer:hover { background: #e0e0e0; }

        /* Tableau des scores */
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: var(--dark); color: white; }
        tr:nth-child(even) { background: var(--light); }
    </style>
</head>
<body>

<div class="container">
    <div id="screen-login">
        <h1>Quiz Culture Générale</h1>
        <p style="text-align:center; margin-bottom:15px;">Entrez votre pseudo pour commencer (70 questions)</p>
        <input type="text" id="pseudo" placeholder="Votre Pseudo..." maxlength="20">
        <button class="btn-main" onclick="startQuiz()">Commencer le Jeu</button>
    </div>

    <div id="screen-quiz" class="hidden">
        <div class="quiz-header">
            <span id="info-progress">Question : 1/70</span>
            <span id="info-score">Score : 0</span>
        </div>
        <div class="question-box" id="question-text">Chargement de la question...</div>
        <div class="answers-grid" id="answers-container"></div>
        
        <button class="btn-danger" onclick="leaveQuiz()">Arrêter et Sauvegarder</button>
    </div>

    <div id="screen-leaderboard" class="hidden">
        <h2>Classement Général</h2>
        <div id="final-player-score" style="text-align:center; font-weight:bold; margin-bottom:15px; color:var(--success);"></div>
        <table>
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Pseudo</th>
                    <th>Score</th>
                    <th>Réduites</th>
                </tr>
            </thead>
            <tbody id="leaderboard-rows"></tbody>
        </table>
        <button class="btn-main" style="margin-top: 20px;" onclick="location.reload()">Rejouer</button>
    </div>
</div>

<script src="app.js"></script>
</body>
</html>