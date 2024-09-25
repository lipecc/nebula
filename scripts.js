// Mouse cursor effect
$(document).mousemove(function (e) {
    $('#cursor-light').css({
        left: e.pageX - 50,
        top: e.pageY - 50,
    });
});

// Nebula background animation
const canvas = document.getElementById('nebulaCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawNebula() {
    const gradient = context.createRadialGradient(Math.random() * canvas.width, Math.random() * canvas.height, 0, Math.random() * canvas.width, Math.random() * canvas.height, 150);
    gradient.addColorStop(0, `rgba(255, 0, 255, ${Math.random()})`);
    gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++) {
        drawNebula();
    }
    requestAnimationFrame(animate);
}

animate();

// Modal Functions
function openClrModal() {
    document.getElementById('clr-data-model').style.display = 'block';
}

function closeClrModal() {
    document.getElementById('clr-data-model').style.display = 'none';
}
