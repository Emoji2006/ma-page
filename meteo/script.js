function getIcon(code) {
    const icons = { 0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️", 45: "🌫️", 51: "🌧️", 61: "🌦️", 71: "❄️", 95: "⛈️" };
    return icons[code] || "☁️";
}

function getMoonIcon() {
    const moonPhases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
    const date = new Date();
    const cycle = 29.53;
    const newMoon = new Date(2000, 0, 6, 18, 14);
    const diff = (date - newMoon) / (1000 * 60 * 60 * 24);
    const phase = Math.floor((diff % cycle) / (cycle / 8));
    return moonPhases[phase];
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
    let heureActuelle = new Date().getHours();
    let now = new Date();
    let heureLocaleStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    fetch("api.php?ville=" + encodeURIComponent(ville))
        .then(res => res.json())
        .then(data => {
            if (data.erreur) { alert(data.erreur); return; }

            let sunrise = new Date(data.daily.sunrise[0]).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
            let sunset = new Date(data.daily.sunset[0]).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

            let html = `<h2>${data.ville}</h2>
            <p style="text-align:center; color:#555;">Heure actuelle : <strong>${heureLocaleStr}</strong></p>
            <div class="card" style="background:#e0f7fa; margin-bottom: 20px;">
                <h3>En ce moment</h3>
                <div style="font-size: 2em;">${getIcon(data.current.weather_code)}</div>
                <div style="font-size: 1.5em; font-weight: bold;">${data.current.temperature_2m}°C</div>
                <div>Phase lunaire : ${getMoonIcon()}</div>
            </div>
            <div class="astronomy-info">
                <strong>☀️ Soleil :</strong> Lever ${sunrise} | Coucher ${sunset} <br>
                <strong>🌙 Lune :</strong> Phase actuelle ${getMoonIcon()}
            </div>`;

            html += `<h3>Prochaines 24h</h3><div class="grid">`;
            for (let i = 0; i < 24; i++) {
                let index = heureActuelle + i;
                if (index < data.hourly.time.length) {
                    let style = (i === 0) ? "background:#fff9c4; border: 2px solid #fbc02d; min-width: 100px;" : "background:#e0f7fa; min-width: 100px;";
                    let hour = parseInt(data.hourly.time[index].split('T')[1].substring(0, 2));
                    let icon = (hour < 6 || hour > 20) ? getMoonIcon() : getIcon(data.hourly.weather_code[index]);
                    let prec = data.hourly.precipitation[index];

                    html += `<div class="card" style="${style}">
                        <div style="font-weight: bold;">${data.hourly.time[index].split('T')[1].substring(0, 5)}</div>
                        <div style="font-size: 1.5em;">${icon}</div>
                        <div style="font-size: 1.1em; font-weight: bold;">${data.hourly.temperature_2m[index]}°</div>
                        <div style="font-size: 0.8em; color: #007bff;">${prec > 0 ? prec + 'mm' : '0mm'}</div>
                    </div>`;
                }
            }

            html += `</div><h3>7 Prochains jours</h3><div class="grid">`;
            data.daily.time.forEach((d, i) => {
                html += `<div class="card">
                <div>${new Date(d).toLocaleDateString('fr', { weekday: 'short' })}</div>
                <div>${getIcon(data.daily.weather_code[i])}</div>
                <strong>${data.daily.temperature_2m_max[i]}°</strong>/${data.daily.temperature_2m_min[i]}°
                <div style="font-size: 0.8em; color: #007bff;">${data.daily.precipitation_sum[i]}mm</div>
            </div>`;
            });
            document.getElementById("resultat").innerHTML = html + `</div>`;
        });
}