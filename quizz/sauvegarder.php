<?php
header('Content-Type: application/json');

$host = 'localhost';
$dbname = 'quiz_db';
$username = 'root'; // Par défaut sur WampServer
$password = '';     // Par défaut vide sur WampServer

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    echo json_with_status(['error' => 'Erreur de connexion à la base de données'], 500);
    exit;
}

// 1. Sauvegarde du score
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!empty($data['pseudo']) && isset($data['score']) && isset($data['totalJoué'])) {
        $stmt = $pdo->prepare("INSERT INTO scores (pseudo, score, questions_jouees) VALUES (?, ?, ?)");
        $stmt->execute([$data['pseudo'], $data['score'], $data['totalJoué']]);
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Données incomplètes']);
    }
    exit;
}

// 2. Récupération des scores pour le classement
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query("SELECT pseudo, score, questions_jouees, date_partie FROM scores ORDER BY score DESC, questions_jouees ASC LIMIT 20");
    $scores = $stmt->fetchAll();
    echo json_encode($scores);
    exit;
}
?>