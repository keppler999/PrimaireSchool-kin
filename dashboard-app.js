/**
 * SCHOLARITE - Logique du Tableau de Bord
 * Gestion du menu, du logo et des interactions
 */

// --- 1. GESTION DU MENU LATÉRAL (Ouverture/Fermeture au clic) ---
const sidebar = document.querySelector('.sidebar-glass');
const menuToggle = document.querySelector('.menu-toggle');

// On active le menu seulement si les éléments sont présents dans le HTML
if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// --- 2. GESTION DU LOGO DE L'ÉCOLE (Ton code original amélioré) ---
const logoInput = document.getElementById('logo-input');
const schoolLogo = document.getElementById('school-logo');

if (logoInput && schoolLogo) {
    logoInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Mise à jour de l'image sur l'interface
                schoolLogo.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
}

// --- 3. FERMETURE AUTOMATIQUE (Confort d'utilisation) ---
// Si on clique sur le tableau de bord (en dehors du menu), le menu se ferme tout seul
document.addEventListener('click', (e) => {
    if (sidebar && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    }
});

// --- 4. LOGIQUE DES DONNÉES (Pour plus tard) ---
console.log("Scholarite Dashboard : Prêt.");
