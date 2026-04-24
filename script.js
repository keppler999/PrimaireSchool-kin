// ============================================================
// 1. CONFIGURATION SUPABASE (Base : Platinum_ERP_V2)
// ============================================================
const SUPABASE_URL = "https://dztbxntfsouuyrrigaah.supabase.co";
const SUPABASE_KEY = "sb_publishable_lNctOhdEyESJGitYGXDsqA_rNLhHNBe"; 
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// 2. LOGIQUE DE BASCULEMENT (NAVIGATION)
// ============================================================
// Cette fonction gère l'illusion d'optique en cachant/affichant les formulaires
function toggleForm() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm && loginForm) {
        registerForm.classList.toggle('hidden');
        loginForm.classList.toggle('hidden');
    } else {
        console.error("Verseau : Erreur d'ID. Vérifie que tes div s'appellent 'register-form' et 'login-form'");
    }
}

// ============================================================
// 3. FONCTION : CRÉER UN COMPTE (INSCRIPTION)
// ============================================================
async function signUp() {
    const name = document.querySelector('#register-form input[type="text"]').value;
    const email = document.querySelector('#register-form input[type="email"]').value;
    const password = document.querySelector('#register-form input[type="password"]').value;

    if (!email || !password) return alert("Veuillez remplir tous les champs.");

    // Création du compte dans Supabase Auth
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { display_name: name } // Enregistre le nom dans les métadonnées
        }
    });

    if (error) {
        alert("Erreur d'inscription : " + error.message);
    } else {
        alert("Succès ! Un email de confirmation a été envoyé.");
        console.log("Utilisateur créé :", data);
    }
}

// ============================================================
// 4. FONCTION : SE CONNECTER (CONNEXION)
// ============================================================
async function signIn() {
    // On cible spécifiquement les champs du formulaire de connexion
    const emailField = document.querySelector('#login-form input[type="email"]');
    const passwordField = document.querySelector('#login-form input[type="password"]');

    if (!emailField || !emailField.value) {
        return alert("Veuillez entrer votre adresse email.");
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailField.value,
        password: passwordField.value,
    });

    if (error) {
        alert("Erreur de connexion : " + error.message);
    } else {
        alert("Bienvenue sur Scholarite !");
        // Redirection vers ton tableau de bord
        window.location.href = "dashboard.html"; 
    }
}

// ============================================================
// 5. INITIALISATION ET ÉCOUTEURS (EVENT LISTENERS)
// ============================================================
// On attend que la page soit totalement chargée avant d'écouter les clics
document.addEventListener('DOMContentLoaded', () => {
    
    // Bouton CRÉER
    const btnSignUp = document.querySelector('#register-form .btn-main');
    if(btnSignUp) btnSignUp.addEventListener('click', signUp);

    // Bouton SE CONNECTER
    const btnSignIn = document.querySelector('#login-form .btn-main');
    if(btnSignIn) btnSignIn.addEventListener('click', signIn);
    
    // Note : Pour le basculement (toggleForm), 
    // assure-toi que ton HTML contient bien : onclick="toggleForm()"
});
  
