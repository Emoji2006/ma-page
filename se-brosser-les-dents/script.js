// let totalTime = 180;
// let timeLeft = totalTime;
// let interval = null;

// const steps = [
//     { text: "Haut gauche", icon: "fa-arrow-up-left" },
//     { text: "Haut droite", icon: "fa-arrow-up-right" },
//     { text: "Bas gauche", icon: "fa-arrow-down-left" },
//     { text: "Bas droite", icon: "fa-arrow-down-right" },
//     { text: "Milieu", icon: "fa-arrow-middle" }
// ];

// const ding = document.getElementById("ding");
// const music = document.getElementById("music");

// function startTimer() {
//     if (interval !== null) return;

//     music.play();

//     interval = setInterval(() => {
//         timeLeft--;

//         let min = Math.floor(timeLeft / 60);
//         let sec = timeLeft % 60;

//         document.getElementById("timer").textContent =
//             String(min).padStart(2, "0") + ":" +
//             String(sec).padStart(2, "0");

//         let percent = ((totalTime - timeLeft) / totalTime) * 100;
//         document.getElementById("progress").style.width = percent + "%";

//         let stepIndex = Math.floor((totalTime - timeLeft) / 30);
//         if (stepIndex < steps.length) {
//             document.getElementById("step").textContent =
//                 "Zone : " + steps[stepIndex].text;

//             document.getElementById("zoneIcon").innerHTML =
//                 `<i class="fa-solid ${steps[stepIndex].icon}"></i>`;
//         }

//         if (timeLeft <= 0) {
//             clearInterval(interval);
//             interval = null;
//             music.pause();
//             ding.play();
//             document.getElementById("step").textContent = "Terminé";
//             document.getElementById("zoneIcon").innerHTML =
//                 `<i class="fa-solid fa-tooth"></i>`;
//             document.getElementById("message").textContent =
//                 "🎉 Bravo, dents propres !";
//         }

//     }, 1000);
// }

// function resetTimer() {
//     clearInterval(interval);
//     interval = null;
//     timeLeft = totalTime;

//     music.pause();
//     music.currentTime = 0;

//     document.getElementById("timer").textContent = "03:00";
//     document.getElementById("progress").style.width = "0%";
//     document.getElementById("step").textContent = "Prêt ?";
//     document.getElementById("zoneIcon").innerHTML =
//         `<i class="fa-solid fa-play"></i>`;
//     document.getElementById("message").textContent = "";
// }

// function toggleMusic() {
//     if (music.paused) {
//         music.play();
//     } else {
//         music.pause();
//     }
// }


let totalTime = 180;
let timeLeft = totalTime;
let interval = null;

// Configuration des icônes par zone
const steps = [
    { text: "Haut Gauche", icon: 'fa-arrow-up-left' },   // Flèche haut-gauche
    { text: "Haut Droite", icon: "fa-arrow-up-right" }, // Flèche haut-droite
    { text: "Bas Gauche", icon: "fa-arrow-down-left" }, // Flèche bas-gauche
    { text: "Bas Droite", icon: "fa-arrow-down-right" }, // Flèche bas-droite
    { text: "Langue & Milieu", icon: "fa-tongue" }      // Icône langue
];

const music = document.getElementById("music");
const ding = document.getElementById("ding");

function updateUI() {
    // Calcul du temps
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    document.getElementById("timer").textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

    // Barre de progression
    let percent = ((totalTime - timeLeft) / totalTime) * 100;
    document.getElementById("progress").style.width = percent + "%";

    // Mise à jour de l'icône et du texte
    if (timeLeft > 0) {
        let stepIndex = Math.floor((totalTime - timeLeft) / 36);
        if (stepIndex < steps.length) {
            document.getElementById("step").textContent = steps[stepIndex].text;
            // On change la classe de l'icône FontAwesome
            document.getElementById("zoneIcon").innerHTML = `<i class="fa-solid ${steps[stepIndex].icon} fa-bounce"></i>`;
        }
    }
}

function startTimer() {
    if (interval) return;
    music.play();
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "inline-block";

    interval = setInterval(() => {
        timeLeft--;
        updateUI();
        if (timeLeft <= 0) {
            clearInterval(interval);
            ding.play();
            music.pause();
            document.getElementById("step").textContent = "Fini !";
            document.getElementById("zoneIcon").innerHTML = `<i class="fa-solid fa-face-smile-beam"></i>`;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
    music.pause();
    document.getElementById("startBtn").style.display = "inline-block";
    document.getElementById("pauseBtn").style.display = "none";
}

function resetTimer() {
    pauseTimer();
    timeLeft = totalTime;
    updateUI();
    document.getElementById("zoneIcon").innerHTML = `<i class="fa-solid fa-play"></i>`;
    document.getElementById("step").textContent = "Prêt ?";
}

function toggleMusic() {
    music.paused ? music.play() : music.pause();
}