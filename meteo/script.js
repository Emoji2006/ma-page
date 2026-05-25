function getIcon(code) {
    const icons = { 0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️", 45: "🌫️", 51: "🌧️", 61: "🌦️", 71: "❄️", 95: "⛈️" };
    return icons[code] || "☁️";
}

function suggérerVilles() {
    let input = document.getElementById("ville").value;
    let container = document.getElementById("suggestions");
    if (input.length < 3) { container.innerHTML = ""; return; }

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=5&language=fr`)
        .then(res => res.json())
        .then(data => {
            container.innerHTML = "";
            data.results?.forEach(v => {
                let div = document.createElement("div");
                div.textContent = `${v.name}, ${v.country}`;
                div.onclick = () => { document.getElementById("ville").value = v.name; container.innerHTML = ""; chargerMeteo(); };
                container.appendChild(div);
            });
        });
}

function chargerMeteo() {
    let ville = document.getElementById("ville").value.trim();
    if (!ville) return;

    // Récupère l'heure actuelle (ex: 14 pour 14:45)
    let heureActuelle = new Date().getHours();
    let heureLocaleStr = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    fetch("api.php?ville=" + encodeURIComponent(ville))
        .then(res => res.json())
        .then(data => {
            if (data.erreur) { alert(data.erreur); return; }

            let html = `<h2>${data.ville}</h2>
        <p style="text-align:center; color:#555;">Heure actuelle : <strong>${heureLocaleStr}</strong></p>
        <div class="card" style="background:#e0f7fa; margin-bottom: 20px;">
            <h3>En ce moment</h3>
            <div style="font-size: 2em;">${getIcon(data.current.weather_code)}</div>
            <div style="font-size: 1.5em; font-weight: bold;">${data.current.temperature_2m}°C</div>
            <div>Humidité : ${data.current.relative_humidity_2m}% | Vent : ${data.current.wind_speed_10m} km/h</div>
        </div>`;

            // Prévisions horaires (24h commençant à l'heure actuelle)
            html += `<h3>Prochaines 24h</h3><div class="grid">`;
            for (let i = 0; i < 24; i++) {
                let index = heureActuelle + i;
                // On vérifie que l'index existe dans les données reçues
                if (index < data.hourly.time.length) {
                    // Style spécial pour la première carte (l'heure actuelle)
                    let style = (i === 0) ? "background:#fff9c4; border: 2px solid #fbc02d; min-width: 100px;" : "background:#e0f7fa; min-width: 100px;";

                    html += `
                <div class="card" style="${style}">
                    <div style="font-weight: bold;">${data.hourly.time[index].split('T')[1].substring(0, 5)}</div>
                    <div style="font-size: 1.5em;">${getIcon(data.hourly.weather_code[index])}</div>
                    <div style="font-size: 1.1em; font-weight: bold;">${data.hourly.temperature_2m[index]}°</div>
                </div>`;
                }
            }

            // Prévisions journalières
            html += `</div><h3>7 Prochains jours</h3><div class="grid">`;
            data.daily.time.forEach((d, i) => {
                html += `<div class="card">
                <div>${new Date(d).toLocaleDateString('fr', { weekday: 'short' })}</div>
                <div>${getIcon(data.daily.weather_code[i])}</div>
                <strong>${data.daily.temperature_2m_max[i]}°</strong>/${data.daily.temperature_2m_min[i]}°
            </div>`;
            });

            document.getElementById("resultat").innerHTML = html + `</div>`;
        });
}