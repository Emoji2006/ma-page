<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Météo Pro</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Météo en direct</h1>
        <div class="search-box">
            <input type="text" id="ville" placeholder="Rechercher une ville..." onkeyup="suggérerVilles()">
            <button onclick="chargerMeteo()">OK</button>
        </div>
        <div id="suggestions" class="suggestions-list"></div>
        <div id="resultat"></div>
    </div>
    <script src="script.js"></script>
</body>

</html>