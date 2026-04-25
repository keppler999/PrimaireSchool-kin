// CONFIGURATION DU GRAPHIQUE GLOBAL
const chartCtx = document.getElementById('mainStatsChart').getContext('2d');
new Chart(chartCtx, {
    type: 'line',
    data: {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        datasets: [{
            data: [45, 60, 55, 80, 70, 90],
            borderColor: '#D4AF37',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            fill: true, tension: 0.4, pointRadius: 2
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { ticks: { color: '#D4AF37' } }, y: { display: false } }
    }
});

// DONNÉES RDC & GÉNÉRATEUR
const classesRDC = ["1ère EP", "2ème EP", "3ème EP", "4ème EP", "5ème EP", "6ème EP", "1ère EB", "2ème EB", "3ème EB", "4ème EB", "5ème EB", "6ème EB"];
const staff = ["M. Kambale", "Mme Julie", "M. Luc", "Mme Sarah", "M. Robert", "M. Alain", "Mme Claire", "M. Jean", "M. Paul", "Mme Lea", "M. Jules", "M. Guy"];
const matieres = ["Maths", "Français", "Sciences", "Civisme", "Histoire", "Géographie", "Dessin", "Calcul", "Dictée", "Sport", "Musique", "Religion"];

function fillLoop(id, generator) {
    const container = document.getElementById(id);
    let html = '<div class="scrolling-content">';
    for(let i=0; i<12; i++) html += generator(i);
    html += html + '</div>'; // Doubler pour boucle infinie
    container.innerHTML = html;
}

// 1. Personnel
fillLoop('staff-loop', (i) => `
    <div class="data-row-black">
        <span>${staff[i]}</span>
        <span class="${i%3==0?'txt-red':i%4==0?'txt-gold':'txt-green'}">${i%3==0?'Absent':i%4==0?'Vacances':'Présent'}</span>
    </div>
`);

// 2. Académique
fillLoop('academy-loop', (i) => `
    <div class="data-row-black">
        <span>${staff[i]}</span><span>${classesRDC[i]}</span>
        <span><span class="txt-yellow">15F</span>/<span class="txt-gold">15G</span></span>
        <span class="txt-green">30</span>
    </div>
`);

// 3. Matières / Live
fillLoop('matiere-loop', (i) => `
    <div class="data-row-black">
        <span>${8+i}h00</span><span>${classesRDC[i]}</span><span>${matieres[i]}</span>
    </div>
`);

// 4. Notes
fillLoop('notes-loop', (i) => `
    <div class="data-row-black">
        <span>${classesRDC[i]}</span><span class="txt-gold">${(Math.random()*40+60).toFixed(1)}%</span>
    </div>
`);

// 5. Finances
fillLoop('finance-loop', (i) => `
    <div class="data-row-black">
        <span class="txt-green">${Math.floor(Math.random()*30+70)}%</span>
        <span class="txt-red">${Math.floor(Math.random()*20)}%</span>
    </div>
`);

// Logo Manager
document.getElementById('logo-input').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = (event) => document.getElementById('school-logo-display').innerHTML = `<img src="${event.target.result}" style="width:100%; border-radius:50%">`;
    reader.readAsDataURL(e.target.files[0]);
});
