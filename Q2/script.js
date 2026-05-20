// Modal Functions
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Canvas Drawing
const canvas = document.getElementById('myCanvas');

if (canvas) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#2563eb';
    ctx.fillRect(40, 60, 60, 100);

    ctx.fillStyle = '#9333ea';
    ctx.fillRect(150, 30, 60, 130);

    ctx.fillStyle = '#16a34a';
    ctx.fillRect(260, 90, 60, 70);

    ctx.font = '16px Poppins';
    ctx.fillStyle = 'black';
    ctx.fillText('Course Activity Graph', 100, 20);
}