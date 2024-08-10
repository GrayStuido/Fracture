const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

function handleKonamiCode(e) {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            window.location.href = "Achievements.html";
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
}

// Listen for keydown events
document.addEventListener('keydown', handleKonamiCode);