// CONFIGURATION DU GRAPHIQUE (Header)
const ctx = document.getElementById('mainChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
            label: 'Pourcentage (%)',
            data: [65, 82, 70, 95, 88, 75, 90],
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
        scales: { 
            x: { grid: { display: false }, ticks: { color: '#fff' } },
            y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#fff' } }
        }
    }
});

// DONNÉES RDC (12 Classes)
const classes = ["1ère EP", "2ème EP", "3ème EP", "4ème EP", "5ème EP", "6ème EP", "7ème EB", "8ème EB", "1ère Hum", "2ème Hum", "3ème Hum", "4ème Hum"];
const profs = ["M. Kambale", "Mme Sarah", "M. Kabasele", "Mme Bahati", "M. Luvumbu", "M. Diallo", "Mme Zola", "M. Tshimanga", "M. Ndoki", "Mme Malu", "M. Yengo", "Mme Biola"];
const matieresList = ["Maths", "Français", "Sciences", "Histoire", "Civisme", "Calcul", "Dictée", "Géographie", "Dessin", "Musique", "Religion", "Sport"];

// Fonction de remplissage
function fillBox(id, callback) {
    const box = document.getElementById(id);
    let html = '';
    for(let i=0; i < 24; i++) { // Doublé pour la boucle infinie
        html += `<div class="scroll-item">${callback(i % 12)}</div>`;
    }
    box.innerHTML = html;
}

// 1. Personnel
fillBox('loop-personnel', (i) => `
    <span>${profs[i]}</span>
    <span class="${i%3===0 ? 'txt-green' : i%3===1 ? 'txt-red' : 'txt-gold'}">
        ${i%3===0 ? 'PRÉSENT' : i%3===1 ? 'ABSENT' : 'VACANCES'}
    </span>
`);

// 2. Académie
fillBox('loop-academie', (i) => `
    <span>${classes[i]} | ${profs[i]}</span>
    <span>F: <span class="txt-yellow">15</span> / G: <span class="txt-gold">15</span> | Total: 30</span>
`);

// 3. Matières
fillBox('loop-matieres', (i) => `
    <span>${8+i}h00 | ${classes[i]}</span>
    <span>${matieresList[i]} (${profs[i]})</span>
`);

// 4. Enseignants
fillBox('loop-profs', (i) => `
    <span>${profs[i]}</span>
    <span class="${i%2===0 ? 'txt-green' : 'txt-red'}">${i%2===0 ? 'ACTIF' : 'HORS LIGNE'}</span>
`);

// 5. Notes
fillBox('loop-notes', (i) => `
    <span>${classes[i]}</span>
    <span class="txt-gold">Moyenne: ${(Math.random() * 40 + 50).toFixed(1)}%</span>
`);

// 6. Finances
fillBox('loop-finances', (i) => `
    <span>${classes[i]}</span>
    <span>Payé: <span class="txt-green">75%</span> | Reste: <span class="txt-red">25%</span></span>
`);

// 7. Staff
const fonctions = ["Directeur", "Préfet", "Comptable", "Secrétaire", "Intendant", "Sentinelle"];
fillBox('loop-staff', (i) => `
    <span>${profs[i]}</span>
    <span class="txt-gold">${fonctions[i % 6]}</span>
`);

// Gestion Logo
const logoTrigger = document.getElementById('logo-trigger');
const logoInput = document.getElementById('logo-input');
const schoolLogo = document.getElementById('school-logo');

logoTrigger.onclick = () => logoInput.click();
logoInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            schoolLogo.src = ev.target.result;
            schoolLogo.style.display = 'block';
            logoTrigger.querySelector('i').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
};
