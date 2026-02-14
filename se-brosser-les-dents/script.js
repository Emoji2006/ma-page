let totalTime = 180;
let timeLeft = totalTime;
let interval = null;

const steps = [
    { text: "Haut gauche", icon: "fa-arrow-up-left" },
    { text: "Haut droite", icon: "fa-arrow-up-right" },
    { text: "Bas gauche", icon: "fa-arrow-down-left" },
    { text: "Bas droite", icon: "fa-arrow-down-right" },
    { text: "Milieu", icon: "fa-arrow-middle" }
];

const ding = document.getElementById("ding");
const music = document.getElementById("music");

function startTimer() {
    if (interval !== null) return;

    music.play();

    interval = setInterval(() => {
        timeLeft--;

        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;

        document.getElementById("timer").textContent =
            String(min).padStart(2, "0") + ":" +
            String(sec).padStart(2, "0");

        let percent = ((totalTime - timeLeft) / totalTime) * 100;
        document.getElementById("progress").style.width = percent + "%";

        let stepIndex = Math.floor((totalTime - timeLeft) / 30);
        if (stepIndex < steps.length) {
            document.getElementById("step").textContent =
                "Zone : " + steps[stepIndex].text;

            document.getElementById("zoneIcon").innerHTML =
                `<i class="fa-solid ${steps[stepIndex].icon}"></i>`;
        }

        if (timeLeft <= 0) {
            clearInterval(interval);
            interval = null;
            music.pause();
            ding.play();
            document.getElementById("step").textContent = "Terminé";
            document.getElementById("zoneIcon").innerHTML =
                `<i class="fa-solid fa-tooth"></i>`;
            document.getElementById("message").textContent =
                "🎉 Bravo, dents propres !";
        }

    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    timeLeft = totalTime;

    music.pause();
    music.currentTime = 0;

    document.getElementById("timer").textContent = "03:00";
    document.getElementById("progress").style.width = "0%";
    document.getElementById("step").textContent = "Prêt ?";
    document.getElementById("zoneIcon").innerHTML =
        `<i class="fa-solid fa-play"></i>`;
    document.getElementById("message").textContent = "";
}

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
