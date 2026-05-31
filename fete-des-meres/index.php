<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bonne Fête Maman</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">
        <?php
        $nomMaman = "Maman";
        echo "<h1>Bonne Fête $nomMaman ! 🌸</h1>";
        ?>

        <p id="message">
            <?php
            $messages = [
                "Merci pour tout ton amour et ta bienveillance.",
                "Tu es la meilleure maman du monde !",
                "Une journée exceptionnelle pour une personne exceptionnelle."
            ];
            echo $messages[array_rand($messages)];
            ?>
        </p>

        <!-- Intégration de votre vidéo locale -->
        <div class="container">

            <p id="message">
                <?php
                $messages = ["Merci pour tout ton amour.", "Tu es la meilleure maman du monde !", "Une journée exceptionnelle pour toi."];
                echo $messages[array_rand($messages)];
                ?>
            </p>

            <div class="video-container">
                <video controls>
                    <source src="Joyeux-anniversaire-maman.mp4" type="video/mp4">
                </video>
            </div>

            <!-- Le nouveau message -->
            <div class="message-personnel">
                <?php echo "<p><em>« Tu es la personne la plus importante de ma vie. »</em></p>"; ?>
            </div>

            <button id="btn-surprise">Clique pour une surprise</button>
            <div id="coeur" class="hidden">❤️</div>
        </div>

        <script src="script.js"></script>
</body>

</html>