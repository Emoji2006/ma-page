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
    echo json_encode(['statut' => $statut, 'joueurs' => $joueurs]);
}
elseif ($action === 'hote_suivant') {
    $statut = $pdo->query("SELECT * FROM statut_partie WHERE id = 1")->fetch();
    $suivante = $statut['question_actuelle'] + 1;
    if ($suivante >= 70) {
        $pdo->query("UPDATE statut_partie SET etape = 'podium' WHERE id = 1");
    } else {
        $pdo->query("UPDATE statut_partie SET question_actuelle = $suivante, etape = 'jeu' WHERE id = 1");
    }
    echo json_encode(['success' => true]);
}
elseif ($action === 'hote_fin') {
    $pdo->query("UPDATE statut_partie SET etape = 'podium' WHERE id = 1");
    echo json_encode(['success' => true]);
}
elseif ($action === 'hote_reinitialiser') {
    $pdo->query("UPDATE statut_partie SET question_actuelle = -1, etape = 'attente' WHERE id = 1");
    $pdo->query("TRUNCATE TABLE scores");
    echo json_encode(['success' => true]);
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
    $infos_joueur = null;
    if ($pseudo) {
        $stmt = $pdo->prepare("SELECT * FROM scores WHERE pseudo = ?");
        $stmt->execute([$pseudo]);
        $infos_joueur = $stmt->fetch();
    }
    $classement = $pdo->query("SELECT pseudo, score, questions_jouees FROM scores WHERE actif = 1 ORDER BY score DESC, questions_jouees ASC LIMIT 10")->fetchAll();
    echo json_encode(['statut' => $statut, 'joueur' => $infos_joueur, 'classement' => $classement]);
}
elseif ($action === 'joueur_repondre') {
    $pseudo = $data['pseudo'];
    $q_index = $data['question_index'];
    $est_correct = $data['correct'] ? 1 : 0;

    $stmt = $pdo->prepare("SELECT derniere_question_repondue, actif FROM scores WHERE pseudo = ?");
    $stmt->execute([$pseudo]);
    $j = $stmt->fetch();

    if ($j && $j['actif'] && $j['derniere_question_repondue'] < $q_index) {
        $stmt = $pdo->prepare("UPDATE scores SET score = score + ?, questions_jouees = questions_jouees + 1, derniere_question_repondue = ? WHERE pseudo = ?");
        $stmt->execute([$est_correct, $q_index, $pseudo]);
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