// 1. LE GRAPHIQUE (Header)
const ctx = document.getElementById('mainChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7'],
        datasets: [{
            data: [40, 60, 55, 80, 75, 90, 100],
            borderColor: '#D4AF37',
            backgroundColor: 'rgba(212, 175, 55, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
    }
});

// 2. GÉNÉRATEUR DE DONNÉES (Programme RDC)
const classesRDC = ["1ère EP", "2ème EP", "3ème EP", "4ème EP", "5ème EP", "6ème EP", "1ère EB", "2ème EB", "3ème EB", "4ème EB", "5ème EB", "6ème EB"];
const staffNames = ["M. Kambale", "Mme Sarah", "M. Jean", "Mme Bahati", "M. Luc", "Mme Rose", "M. Pierre", "Mme Julie", "M. Eric", "Mme Sophie", "M. Marc", "Mme Lea"];
const matieres = ["Maths", "Français", "Sciences", "Civisme", "Histoire", "Calcul", "Dessin", "Géo", "Dictée", "Relig.", "Sport", "Musique"];

// Fonction pour injecter les lignes
const populate = (id, callback) => {
    const el = document.getElementById(id);
    for(let i=0; i<12; i++) {
        const div = document.createElement('div');
        div.className = 'step-item';
        div.innerHTML = callback(i);
        el.appendChild(div);
    }
};

// Remplissage Personnel
populate('track-personnel', (i) => `
    <span>${staffNames[i]}</span>
    <span class="${i%3==0 ? 'txt-red' : 'txt-green'}">${i%3==0 ? 'ABSENT' : 'PRÉSENT'}</span>
`);

// Académie
populate('track-academie', (i) => `
    <span>${classesRDC[i]} | ${staffNames[i]}</span>
    <span><span class="txt-yellow">15F</span> / <span class="txt-gold">15G</span> | Total: 30</span>
`);

// Live Cours
populate('track-live', (i) => `
    <span>${8+i}h00 : ${classesRDC[i]}</span>
    <span>${matieres[i]} (${staffNames[i]})</span>
`);

// Notes
populate('track-notes', (i) => `
    <span>Classe: ${classesRDC[i]}</span>
    <span class="txt-gold">Moyenne: ${(Math.random()*40 + 50).toFixed(1)}%</span>
`);

// Finances
populate('track-finances', (i) => `
    <span>Finance ${classesRDC[i]}</span>
    <span>Payé: <span class="txt-green">${Math.floor(Math.random()*40 + 60)}%</span></span>
`);

// Staff
populate('track-staff', (i) => `
    <span>${staffNames[i]}</span>
    <small>FONCTION: ENSEIGNANT</small>
`);

// 3. LOGO UPLOAD
document.getElementById('logo-input').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = (event) => document.getElementById('school-logo').src = event.target.result;
    reader.readAsDataURL(e.target.files[0]);
});

