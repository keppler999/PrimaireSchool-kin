// Configuration Supabase
const supabaseUrl = 'https://dztbxntfsouuyrrigaah.supabase.co';
const supabaseKey = 'sb_publishable_lNctOhdEyESJGitYGXDsqA_rNLhHNBe'; // Utilisation de ta clé publique
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const authForm = document.getElementById('auth-form');
const messageDisplay = document.getElementById('message');

// Fonction pour la Connexion
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await _supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    // ... à l'intérieur de ta fonction de connexion réussie ...
if (!error) {
    // 1. Cacher le portail
    document.getElementById('section-portail').style.display = 'none';
    
    // 2. Afficher le Dashboard
    document.getElementById('section-dashboard').style.display = 'block';
    
    // 3. Optionnel : Supprimer l'image de fond du portail si elle gêne
    document.body.style.backgroundImage = "none"; 
    
    console.log("Bienvenue Verseau, transition vers Scholarite terminée !");
}
    

    if (error) {
        messageDisplay.style.color = "red";
        messageDisplay.innerText = "Erreur : Ce compte n'existe pas ou les identifiants sont incorrects.";
    } else {
        messageDisplay.style.color = "green";
        messageDisplay.innerText = "Connexion réussie ! Bienvenue sur Scholarite.";
        // Ici, redirection vers le tableau de bord
    }
});

// Fonction pour la Création de compte (Redirection ou Logique)
document.getElementById('btn-signup').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!email || !password) {
        messageDisplay.innerText = "Veuillez remplir les champs pour créer un compte.";
        return;
    }

    const { data, error } = await _supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        messageDisplay.style.color = "red";
        messageDisplay.innerText = "Erreur d'inscription : " + error.message;
    } else {
        messageDisplay.style.color = "gold";
        messageDisplay.innerText = "Compte créé ! Vérifiez vos emails pour confirmer.";
    }
});

/* --- GESTION DU MENU LATÉRAL --- */
const menuItems = document.querySelectorAll('.side-menu li');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Retirer la classe active des autres
        menuItems.forEach(i => i.classList.remove('active'));
        // Ajouter la classe active à l'élément cliqué
        this.classList.add('active');
        
        console.log("Navigation vers : " + this.innerText);
        // Ici, on pourra ajouter la logique pour changer le contenu de la fenêtre principale
    });
});

/* --- LOGIQUE DU DASHBOARD (SIMULATION TEMPS RÉEL) --- */

// Fonction pour mettre à jour les statistiques
function updateDashboardStats() {
    // Exemple : mise à jour aléatoire pour simuler le "temps réel"
    // Plus tard, ces données viendront de ta base Platinum_ERP_V2
    const presents = Math.floor(Math.random() * (1300 - 1200) + 1200);
    const absents = Math.floor(Math.random() * 20);

    const presentElement = document.querySelector('.value-green');
    const absentElement = document.querySelector('.value-red');

    if(presentElement) presentElement.innerText = presents.toLocaleString();
    if(absentElement) absentElement.innerText = absents;
}

// Rafraîchir les données toutes les 30 secondes
setInterval(updateDashboardStats, 30000);

/* --- GESTION DES COURS EN TEMPS RÉEL --- */
function updateLiveLessons() {
    const now = new Date();
    const timeString = now.getHours() + "h" + now.getMinutes().toString().padStart(2, '0');
    
    // On peut imaginer ici une requête qui cherche dans l'horaire
    // pour mettre à jour la liste des cours affichés dans la carte "Cours & Matières"
}

// Initialisation au chargement
window.onload = () => {
    updateDashboardStats();
    console.log("Système Scholarite prêt, Verseau à votre service !");
};

