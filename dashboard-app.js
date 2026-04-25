// INITIALISATION DU GRAPHIQUE GLOBAL (Header)
const ctx = document.getElementById('globalChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr'],
        datasets: [{
            label: 'Activité Scolaire',
            data: [65, 80, 75, 95],
            borderColor: '#D4AF37',
            backgroundColor: 'rgba(212, 175, 55, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
    }
});

// Ton code pour le logo et autres fonctions ici...

