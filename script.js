document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.toggle('hidden');
    startConfettiRain();
});

function startConfettiRain() {
    const numConfetti = 200; // Reduzi um pouco para não ficar exagerado
    const duration = 5000; // Confetes caem por 5 segundos

    for (let i = 0; i < numConfetti; i++) {
        createConfettiPiece();
    }

    setTimeout(() => {
        document.querySelectorAll('.confete').forEach(confete => confete.remove());
    }, duration);
}

function createConfettiPiece() {
    const confete = document.createElement('div');
    confete.classList.add('confete');
    
    confete.style.left = Math.random() * 100 + 'vw'; 
    confete.style.top = Math.random() * -10 + 'vh';
    confete.style.backgroundColor = getRandomColor();
    confete.style.animationDuration = (Math.random() * 3 + 2) + 's'; 
    confete.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confete);

    confete.addEventListener('animationend', () => {
        confete.remove();
    });
}

function getRandomColor() {
    const colors = ['#0077cc', '#005fa3', '#004488', '#003366']; // Tons de azul
    return colors[Math.floor(Math.random() * colors.length)];
}
