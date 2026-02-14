<?php
$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$email = $_POST["email"];
$telephone = $_POST["telephone"];
$message = $_POST["message"];

$fichier = fopen("contacts.csv", "a");
fputcsv($fichier, [$nom, $prenom, $email, $telephone, $message, date("Y-m-d H:i:s")]);
fclose($fichier);

echo "OK";
?>
