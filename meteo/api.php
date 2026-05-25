<?php
header('Content-Type: application/json');
$ville = isset($_GET['ville']) ? urlencode($_GET['ville']) : 'Paris';

$geoUrl = "https://geocoding-api.open-meteo.com/v1/search?name=$ville&count=1&language=fr&format=json";
$geoData = json_decode(file_get_contents($geoUrl), true);

if (!isset($geoData['results'][0])) {
    echo json_encode(["erreur" => "Ville non trouvée"]);
    exit;
}

$lat = $geoData['results'][0]['latitude'];
$lon = $geoData['results'][0]['longitude'];
$nomVille = $geoData['results'][0]['name'];

$weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=$lat&longitude=$lon&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m,weather_code,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=auto";
$data = json_decode(file_get_contents($weatherUrl), true);

$data['ville'] = $nomVille;
echo json_encode($data);
?>