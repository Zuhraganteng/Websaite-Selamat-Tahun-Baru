const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.draw();
        this.velocity.x *= 0.99;
        this.velocity.y *= 0.99;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.005;
    }
}

function createFirework() {
    const particleCount = 30;
    const angleIncrement = (Math.PI * 2) / particleCount;
    const power = 20;
    const x = canvas.width / 2;
    const y = canvas.height / 2;

    for (let i = 0; i < particleCount; i++) {
        const angle = angleIncrement * i;
        particles.push(new Particle(x, y, 5, `hsl(${Math.random() * 360}, 50%, 50%)`, {
            x: Math.cos(angle) * Math.random() * power,
            y: Math.sin(angle) * Math.random() * power
        }));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
        }
    });
}

setInterval(createFirework, 1000);
animate();
// Pastikan fungsi ini ada di script.js Anda
function createBalloons() {
    for (let i = 0; i < balloonCount; i++) {
        const x = i % 2 === 0 ? 30 : canvas.width - 30;
        const y = canvas.height + Math.random() * 100;
        const radius = 15;
        const color = `hsl(${Math.random() * 360}, 60%, 50%)`;
        const velocity = 1 + Math.random() * 2;
        balloons.push(new Balloon(x, y, radius, color, velocity));
    }
}

// Pastikan fungsi animate termasuk update untuk balon
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
        }
    });

    balloons.forEach((balloon, index) => {
        if (balloon.y + balloon.radius < 0) {
            balloons.splice(index, 1);
        } else {
            balloon.update();
        }
    });
}

createBalloons();
setInterval(createFirework, 1000);
animate();
const texts = [
    "Paragraf 1: Teks untuk paragraf pertama.",
    "Paragraf 2: Teks untuk paragraf kedua.",
    "Paragraf 3: Teks untuk paragraf ketiga."
    // Tambahkan lebih banyak teks jika diperlukan
];

let currentIndex = 0;

function updateText() {
    const textSlider = document.getElementById('textSlider');
    textSlider.innerText = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, 3000); // Ubah teks setiap 3 detik
updateText(); // Inisialisasi teks pertama

