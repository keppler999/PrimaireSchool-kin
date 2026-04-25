// 1. GÉNÉRATION DU GRAPHIQUE STATISTIQUE
const ctx = document.getElementById('headerChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        datasets: [{
            label: 'Présence globale %',
            data: [92, 88, 95, 91, 85, 98],
            borderColor: '#D4AF37',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
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

// 2. DONNÉES CONGOLAISES (Simulation des 12 classes/profs)
const classes = ["1ère EP", "2ème EP", "3ème EP", "4ème EP", "5ème EP", "6ème EP", "7ème EB", "8ème EB", "1ère Hum", "2ème Hum", "3ème Hum", "4ème Hum"];
const profs = ["M. Kambale", "Mme Musau", "M. Bolamba", "Mme Ifeka", "M. Kalala", "Mme Ngoya", "M. Mwamba", "Mme Zola", "M. Bakari", "Mme Kabasele", "M. Tshimbulu", "Mme Panzu"];
const cours = ["Mathématiques", "Français", "Éveil", "Religion", "Sciences", "Géographie", "Histoire", "Dessin", "Éducation Physique", "Anglais", "Civisme", "Technologie"];

// Injecter Académie
const academieScroll = document.getElementById('academie-scroll');
classes.forEach((c, i) => {
    academieScroll.innerHTML += `
        <div class="step-box">
            <b>${c}</b> - Prof: ${profs[i]}<br>
            <span class="txt-yellow">15 F</span> | <span class="txt-gold">15 G</span> | Total: 30
        </div>`;
});

// Injecter Live Cours
const liveScroll = document.getElementById('live-scroll');
classes.forEach((c, i) => {
    liveScroll.innerHTML += `
        <div class="step-box">
            <span class="txt-gold">08:30</span> - ${c}<br>
            Cours: ${cours[i]}
        </div>`;
});

// Injecter Notes
const notesScroll = document.getElementById('notes-scroll');
classes.forEach((c, i) => {
    let note = Math.floor(Math.random() * (95 - 60) + 60);
    notesScroll.innerHTML += `<div class="step-box">${c}: <span class="txt-green">${note}%</span></div>`;
});

// 3. GESTION LOGO
const logoInput = document.getElementById('logo-input');
const schoolLogo = document.getElementById('school-logo');
const logoContainer = document.getElementById('school-logo-container');

logoContainer.onclick = () => logoInput.click();
logoInput.onchange = (e) => {
    const reader = new FileReader();
    reader.onload = (ev) => schoolLogo.src = ev.target.result;
    reader.readAsDataURL(e.target.files[0]);
};

// Récupérer le nom de l'utilisateur stocké (si tu l'as depuis ta page login)
const userName = localStorage.getItem('user_full_name') || "Jean Dupont";
document.getElementById('user-display-name').innerText = userName;
                
