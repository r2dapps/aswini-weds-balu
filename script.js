// ========== 3D Tilt Effect ==========
const card = document.getElementById("tilt-card");
const textLayer = document.getElementById("text-tilt");
const imgLayer = document.getElementById("image-tilt");

function handleTilt(x, y) {
    const rx = (y - 0.5) * 30;  // max ±15°
    const ry = (x - 0.5) * -30;

    const imgRx = (y - 0.5) * 15;
    const imgRy = (x - 0.5) * -15;


    card.querySelector('.card-inner').style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    textLayer.style.transform = `translateZ(20px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    imgLayer.style.transform = `translateZ(10px) rotateX(${imgRx}deg) rotateY(${imgRy}deg)`;
}

// Mouse movement
document.addEventListener("mousemove", e => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    handleTilt(x, y);
});


// Mobile device orientation
window.addEventListener("deviceorientation", e => {
    let x = e.gamma / 45;
    let y = e.beta / 45;

    x = Math.max(-1, Math.min(1, x));
    y = Math.max(-1, Math.min(1, y));

    x = (x + 1) / 2;
    y = (y + 1) / 2;

    handleTilt(x, y);
});

// Betrothal Countdown
const betrothalDate = new Date("2025-07-26T12:00:00").getTime();

const betrothalCountdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = betrothalDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownBetrothal = document.getElementById("countdown-betrothal");
    if (distance < 0) {
        clearInterval(betrothalCountdown);
        countdownBetrothal.innerHTML = "🎉 Betrothal Day!";
    } else {
        countdownBetrothal.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;
    }
}, 1000);


// ========== Countdown Timer ==========
const target = new Date("2025-07-27T11:00:00");
const cd = document.getElementById("countdown");

function updateCountdown() {
    const diff = target - new Date();
    if (diff <= 0) return cd.innerText = "Today is the day!";
    const d = Math.floor(diff / 864e5);
    const h = Math.floor((diff % 864e5) / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const s = Math.floor((diff % 6e4) / 1000);
    cd.innerText = `⏳ ${d}d ${h}h ${m}m ${s}s left`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ========== Emoji Galaxy Particles ==========
// const EMOJIS = ['💖', '💫', '🌸', '💍', '🌟'];
const EMOJIS = ['💖', '🌸', '✨', '🌟', '💫', '❤️', '💍', '🎉', '🌹', '💐', '🥂', '🍾', '🎶'];

const galaxy = document.getElementById("emoji-galaxy");

function spawnEmoji() {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerText = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = (Math.random() * 1 + 0.8) + "rem";
    emoji.style.animationDuration = (7 + Math.random() * 4) + "s";
    galaxy.appendChild(emoji);
    setTimeout(() => galaxy.removeChild(emoji), 12000);
}

setInterval(spawnEmoji, 500);

// ========== Confetti Effect (Upward Only) ==========
function burstConfetti() {
    // Confetti
    confetti({ particleCount: 100, spread: 70, origin: { x: 0.5, y: 0.2 } });
}

window.addEventListener("load", () => {
    burstConfetti(); // Fire once on load
    setInterval(burstConfetti, 10000); // Fire every 10s
});


// ========== Background Music Autoplay ==========
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

function updateButton() {
    if (music.paused) {
        musicToggle.textContent = '►';  // play icon
        musicToggle.classList.add('paused');
    } else {
        musicToggle.textContent = '❚❚'; // pause icon
        musicToggle.classList.remove('paused');
    }
}

musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play().catch(() => { });
    } else {
        music.pause();
    }
    updateButton();
});

// Sync button on music end/pause/play events
music.addEventListener('play', updateButton);
music.addEventListener('pause', updateButton);

// Init button state on load
window.addEventListener('load', () => {
    updateButton();
});


// Betrothal Countdown
