// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// class Particle {
//     constructor(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         // Explosion radiale
//         const angle = Math.random() * Math.PI * 2;
//         const velocity = Math.random() * 6 + 2;
//         this.vx = Math.cos(angle) * velocity;
//         this.vy = Math.sin(angle) * velocity;
//         this.alpha = 1;
//         this.friction = 0.96;
//         this.gravity = 0.15;
//     }

//     draw() {
//         ctx.save();
//         ctx.globalAlpha = this.alpha;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//         ctx.restore();
//     }

//     update() {
//         this.vx *= this.friction;
//         this.vy *= this.friction;
//         this.vy += this.gravity;
//         this.x += this.vx;
//         this.y += this.vy;
//         this.alpha -= 0.012;
//     }
// }

// let particles = [];

// function createFirework(x, y) {
//     const hue = Math.random() * 360;
//     const color = `hsl(${hue}, 100%, 60%)`;
//     for (let i = 0; i < 80; i++) {
//         particles.push(new Particle(x, y, color));
//     }
// }

// function animate() {
//     // Effet de traînée (motion blur)
//     ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     particles.forEach((p, i) => {
//         if (p.alpha > 0) {
//             p.update();
//             p.draw();
//         } else {
//             particles.splice(i, 1);
//         }
//     });
//     requestAnimationFrame(animate);
// }

// // Explosions automatiques
// setInterval(() => {
//     createFirework(Math.random() * canvas.width, Math.random() * canvas.height * 0.7);
// }, 1000);

// // Explosion au clic
// window.addEventListener('mousedown', (e) => {
//     createFirework(e.clientX, e.clientY);
// });

// // Redimensionnement
// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

// animate();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const music = document.getElementById('bgMusic');
const instruction = document.getElementById('instruction');

let musicStarted = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 6 + 2;
        this.vx = Math.cos(angle) * velocity;
        this.vy = Math.sin(angle) * velocity;
        this.alpha = 1;
        this.friction = 0.96;
        this.gravity = 0.15;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.012;
    }
}

let particles = [];

function createFirework(x, y) {
    // Démarre ta musique "Feu d'artifice.mp3" au premier clic
    if (!musicStarted) {
        music.play().catch(e => console.log("Lecture en attente d'interaction"));
        musicStarted = true;
        if(instruction) instruction.style.display = 'none';
    }

    const hue = Math.random() * 360;
    const color = `hsl(${hue}, 100%, 60%)`;
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle(x, y, color));
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        if (p.alpha > 0) {
            p.update();
            p.draw();
        } else {
            particles.splice(i, 1);
        }
    });
    requestAnimationFrame(animate);
}

// Explosions automatiques
setInterval(() => {
    if (musicStarted) {
        createFirework(Math.random() * canvas.width, Math.random() * canvas.height * 0.7);
    }
}, 1000);

window.addEventListener('mousedown', (e) => {
    createFirework(e.clientX, e.clientY);
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();