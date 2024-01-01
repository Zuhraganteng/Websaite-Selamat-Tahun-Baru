window.onload = function() {
    particlesJS.load('particles', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    setTimeout(function() {
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('backgroundMusic').play();
    }, 5000); // Menampilkan teks dan memutar musik setelah 5 detik
};
