// ==========================================
// CONFIGURATION SUPABASE (Base : Platinum_ERP_V2)
// ==========================================
// C'est ici que tu modifies les clés si tu changes de projet Supabase à l'avenir.
const SUPABASE_URL = "https://dztbxntfsouuyrrigaah.supabase.co";
const SUPABASE_KEY = "sb_publishable_lNctOhdEyESJGitYGXDsqA_rNLhHNBe"; 
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================================
// NAVIGATION : BASCULEMENT DES FORMULAIRES
// ==========================================
// Cette fonction permet de cacher un formulaire et d'afficher l'autre.
function toggleForm() {
    document.getElementById('register-form').classList.toggle('hidden');
    document.getElementById('login-form').classList.toggle('hidden');
}

// ==========================================
// FONCTION : CRÉER UN COMPTE (SIGN UP)
// ==========================================
async function signUp() {
    // On récupère les valeurs saisies par l'utilisateur
    const name = document.querySelector('#register-form input[type="text"]').value;
    const email = document.querySelector('#register-form input[type="email"]').value;
    const password = document.querySelector('#register-form input[type="password"]').value;

    // Vérification simple pour éviter d'envoyer des champs vides
    if (!email || !password) return alert("Veuillez remplir les champs.");

    // Appel à Supabase pour créer l'utilisateur
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            // "display_name" est sauvegardé dans les métadonnées de l'utilisateur
            data: { display_name: name } 
        }
    });

    if (error) {
        alert("Erreur d'inscription : " + error.message);
    } else {
        alert("Succès ! Vérifiez votre email pour confirmer l'inscription.");
        console.log("Utilisateur créé :", data);
    }
}

// ==========================================
// FONCTION : SE CONNECTER (SIGN IN)
// ==========================================
async function signIn() {
    // IMPORTANT : Ici, on cible bien l'input email du formulaire de connexion
    // Si tu changes l'ID dans le HTML, modifie le sélecteur ci-dessous.
    const emailField = document.querySelector('#login-form input[type="email"]');
    const passwordField = document.querySelector('#login-form input[type="password"]');

    if (!emailField.value || !passwordField.value) {
        return alert("Veuillez entrer votre email et votre mot de passe.");
    }

    // Connexion via l'email et le mot de passe
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailField.value,
        password: passwordField.value,
    });

    if (error) {
        alert("Erreur de connexion : " + error.message);
    } else {
        alert("Bienvenue sur Scholarite !");
        
        // MODIFICATION ICI : Remplace "dashboard.html" par l'URL de ta page d'accueil
        window.location.href = "dashboard.html"; 
    }
}

// ==========================================
// ÉCOUTEURS D'ÉVÉNEMENTS (INTERACTIONS)
// ==========================================
// Ces lignes "écoutent" le clic sur les boutons et lancent les fonctions.

// Bouton Créer (Formulaire inscription)
document.querySelector('#register-form .btn-main').addEventListener('click', signUp);

// Bouton Se Connecter (Formulaire connexion)
document.querySelector('#login-form .btn-main').addEventListener('click', signIn);
