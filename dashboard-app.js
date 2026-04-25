// 1. LE GRAPHIQUE STYLE TRADING (Header)
const ctx = document.getElementById('tradingChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        datasets: [{
            data: [40, 65, 55, 90, 85, 95],
            borderColor: '#D4AF37',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
    }
});

// 2. DONNÉES RDC (12 Classes)
const rdcClasses = ["1ère EP", "2ème EP", "3ème EP", "4ème EP", "5ème EP", "6ème EP", "7ème EB", "8ème EB", "1ère Hum", "2ème Hum", "3ème Hum", "4ème Hum"];
const staffNames = ["M. Kambale", "Mme Musau", "M. Kabasele", "Mme Bahati", "M. Luvumbu", "M. Diallo", "Mme Zola", "M. Tshimanga", "M. Ndoki", "Mme Malu", "M. Yengo", "Mme Biola"];

// Fonction d'injection
function fillStep(elementId, contentGenerator) {
    const engine = document.getElementById(elementId);
    for(let i=0; i<12; i++) {
        engine.innerHTML += `<div class="line-item">${contentGenerator(i)}</div>`;
    }
}

// Académique
fillStep('engine-academy', (i) => `
    <span>${rdcClasses[i]} | ${staffNames[i]}</span>
    <span style="font-size:0.9rem"><span class="txt-yellow">15F</span> / <span class="txt-blue">15G</span> | Total: <span class="txt-green">30</span></span>
`);

// Live Cours
const courses = ["Maths", "Français", "Sciences", "Histoire", "Dessin", "Civisme", "Géo", "Calcul", "Dictée", "Sport", "Musique", "Religion"];
fillStep('engine-live', (i) => `
    <span><span class="txt-blue">${8+i}h00</span> : ${courses[i]}</span>
    <span style="font-size:0.8rem">Prof: ${staffNames[i]}</span>
`);

// Personnel Statut
fillStep('engine-personnel', (i) => `
    <span>${staffNames[i]}</span>
    <span class="${i%3==0?'txt-green':i%3==1?'txt-red':'txt-gold'}">${i%3==0?'PRÉSENT':i%3==1?'ABSENT':'VACANCES'}</span>
`);

// Notes
fillStep('engine-notes', (i) => `
    <span>${rdcClasses[i]}</span>
    <span class="txt-gold">Réussite: ${(Math.random()*40 + 60).toFixed(1)}%</span>
`);

// Finances
fillStep('engine-finance', (i) => `
    <span>${rdcClasses[i]}</span>
    <span>Payé: <span class="txt-green">${Math.floor(Math.random()*50+50)}%</span> | Reste: <span class="txt-red">${Math.floor(Math.random()*20)}%</span></span>
`);

// Staff Fonctions
const fonctions = ["Directeur", "Comptable", "Secrétaire", "Préfet", "Sentinelle", "Ouvrier", "Titulaire", "Titulaire", "Bibliothécaire", "Informaticien", "Coach", "Cantine"];
fillStep('engine-staff-list', (i) => `
    <span>${staffNames[i]}</span>
    <span style="font-size:0.8rem; color:var(--gold)">${fonctions[i]}</span>
`);

// Import Logo
document.getElementById('logo-upload').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = (event) => document.getElementById('display-logo').src = event.target.result;
    reader.readAsDataURL(e.target.files[0]);
});

