<?php
header('Content-Type: application/json');
$host = 'localhost'; $dbname = 'quiz_db'; $username = 'root'; $password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erreur de connexion à la base de données.']); exit;
}

$action = $_GET['action'] ?? '';
$data = json_decode(file_get_contents('php://input'), true);

if ($action === 'hote_statut') {
    $statut = $pdo->query("SELECT * FROM statut_partie WHERE id = 1")->fetch();
    $joueurs = $pdo->query("SELECT pseudo, score, questions_jouees, actif FROM scores ORDER BY score DESC")->fetchAll();
    
    $q_actuelle = (int)$statut['question_actuelle'];
    $total_actifs = (int)$pdo->query("SELECT COUNT(*) FROM scores WHERE actif = 1")->fetchColumn();
    
    $stmt_reponses = $pdo->prepare("SELECT COUNT(*) FROM scores WHERE actif = 1 AND derniere_question_repondue = ?");
    $stmt_reponses->execute([$q_actuelle]);
    $nb_reponses = (int)$stmt_reponses->fetchColumn();

    echo json_encode([
        'statut' => $statut, 
        'joueurs' => $joueurs, 
        'nb_reponses' => $nb_reponses, 
        'total_actifs' => $total_actifs
    ]);
}
elseif ($action === 'hote_suivant') {
    $statut = $pdo->query("SELECT * FROM statut_partie WHERE id = 1")->fetch();
    $etape_actuelle = $statut['etape'];
    $q_actuelle = (int)$statut['question_actuelle'];
    
    // On récupère le timestamp actuel en millisecondes pour le début du chrono
    $maintenant_ms = (int)(microtime(true) * 1000);

    if ($etape_actuelle === 'attente') {
        $pdo->prepare("UPDATE statut_partie SET question_actuelle = 0, etape = 'jeu', temps_lance = ? WHERE id = 1")->execute([$maintenant_ms]);
    } 
    elseif ($etape_actuelle === 'jeu' || $etape_actuelle === 'reponse') {
        $pdo->query("UPDATE statut_partie SET etape = 'correction' WHERE id = 1");
    } 
    elseif ($etape_actuelle === 'correction') {
        $suivante = $q_actuelle + 1;
        if ($suivante >= 70) {
            $pdo->query("UPDATE statut_partie SET etape = 'podium' WHERE id = 1");
        } else {
            // Nouvelle question : on réinitialise le début du chrono à cet instant précis
            $pdo->prepare("UPDATE statut_partie SET question_actuelle = ?, etape = 'jeu', temps_lance = ? WHERE id = 1")->execute([$suivante, $maintenant_ms]);
        }
    }
    echo json_encode(['success' => true]);
}
elseif ($action === 'hote_fin') {
    $pdo->query("UPDATE statut_partie SET etape = 'podium' WHERE id = 1");
    echo json_encode(['success' => true]);
}
elseif ($action === 'hote_reinitialiser') {
    $pdo->query("UPDATE statut_partie SET question_actuelle = -1, etape = 'attente', temps_lance = 0 WHERE id = 1");
    $pdo->query("TRUNCATE TABLE scores");
    echo json_encode(['success' => true]);
}
elseif ($action === 'hote_supprimer_joueur') {
    if (!empty($data['pseudo'])) {
        $stmt = $pdo->prepare("DELETE FROM scores WHERE pseudo = ?");
        $stmt->execute([$data['pseudo']]);
        echo json_encode(['success' => true]);
    }
}
elseif ($action === 'joueur_rejoindre') {
    if (!empty($data['pseudo'])) {
        try {
            $stmt = $pdo->prepare("INSERT INTO scores (pseudo) VALUES (?)");
            $stmt->execute([$data['pseudo']]);
            echo json_encode(['success' => true]);
        } catch (Exception $e) {
            echo json_encode(['error' => 'Ce pseudo est déjà pris !']);
        }
    }
}
elseif ($action === 'joueur_statut') {
    $statut = $pdo->query("SELECT * FROM statut_partie WHERE id = 1")->fetch();
    $pseudo = $_GET['pseudo'] ?? '';
    $stmt = $pdo->prepare("SELECT * FROM scores WHERE pseudo = ?");
    $stmt->execute([$pseudo]);
    $infos_joueur = $stmt->fetch();
    
    $classement = $pdo->query("SELECT pseudo, score FROM scores WHERE actif = 1 ORDER BY score DESC LIMIT 10")->fetchAll();
    echo json_encode(['statut' => $statut, 'joueur' => $infos_joueur, 'classement' => $classement]);
}
elseif ($action === 'joueur_repondre') {
    $pseudo = $data['pseudo'];
    $q_index = $data['question_index'];
    $est_correct = (bool)($data['correct'] ?? false);

    $stmt = $pdo->prepare("SELECT derniere_question_repondue, actif FROM scores WHERE pseudo = ?");
    $stmt->execute([$pseudo]);
    $j = $stmt->fetch();

    if ($j && $j['actif'] && $j['derniere_question_repondue'] < $q_index) {
        $points_gagnes = 0;

        if ($est_correct) {
            // 1. On récupère le moment où l'hôte a lancé la question
            $statut = $pdo->query("SELECT temps_lance, etape FROM statut_partie WHERE id = 1")->fetch();
            $temps_lance = (int)$statut['temps_lance'];
            $maintenant_ms = (int)(microtime(true) * 1000);
            
            // 2. Calcul du temps de réponse du joueur (en secondes)
            $temps_ecoule = ($maintenant_ms - $temps_lance) / 1000;
            
            // --- CONFIGURATION AJUSTÉE À 30 SECONDES ---
            $temps_max_question = 30; 
            
            if ($temps_ecoule < $temps_max_question) {
                // Formule Kahoot adaptée sur 30s : max 1000 pts, min 500 pts au prorata de la vitesse
                $temps_restant = $temps_max_question - $temps_ecoule;
                $points_gagnes = (int)round(500 + (500 * ($temps_restant / $temps_max_question)));
            } else {
                $points_gagnes = 500; // Juste au dernier moment ou léger décalage réseau
            }
        }

        // 3. Attribution des points calculés de manière sécurisée par le serveur
        $stmt = $pdo->prepare("UPDATE scores SET score = score + ?, questions_jouees = questions_jouees + 1, derniere_question_repondue = ? WHERE pseudo = ?");
        $stmt->execute([$points_gagnes, $q_index, $pseudo]);
        
        $etape_actuelle = $statut['etape'] ?? $pdo->query("SELECT etape FROM statut_partie WHERE id = 1")->fetchColumn();
        
        if ($etape_actuelle === 'jeu') {
            $total_actifs = (int)$pdo->query("SELECT COUNT(*) FROM scores WHERE actif = 1")->fetchColumn();
            
            $stmt_total = $pdo->prepare("SELECT COUNT(*) FROM scores WHERE actif = 1 AND derniere_question_repondue = ?");
            $stmt_total->execute([$q_index]);
            $nb_reponses = (int)$stmt_total->fetchColumn();
            
            if ($nb_reponses >= $total_actifs && $total_actifs > 0) {
                $pdo->query("UPDATE statut_partie SET etape = 'reponse' WHERE id = 1");
            }
        }
    }
    echo json_encode(['success' => true]);
}
elseif ($action === 'joueur_abandonner') {
    $pseudo = $data['pseudo'];
    $stmt = $pdo->prepare("UPDATE scores SET actif = 0 WHERE pseudo = ?");
    $stmt->execute([$pseudo]);
    echo json_encode(['success' => true]);
}
?>