// Configuration de ta base de données Platinum_ERP_V2
const SUPABASE_URL = "https://dztbxntfsouuyrrigaah.supabase.co";
const SUPABASE_KEY = "sb_publishable_lNctOhdEyESJGitYGXDsqA_rNLhHNBe"; // Ta clé publique
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Basculer entre les formulaires
function toggleForm() {
    document.getElementById('register-form').classList.toggle('hidden');
    document.getElementById('login-form').classList.toggle('hidden');
}

// --- FONCTION : CRÉER UN COMPTE ---
async function signUp() {
    const name = document.querySelector('#register-form input[type="text"]').value;
    const email = document.querySelector('#register-form input[type="email"]').value;
    const password = document.querySelector('#register-form input[type="password"]').value;

    if (!email || !password) return alert("Veuillez remplir les champs.");

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { display_name: name } // Stocke le nom dans les métadonnées
        }
    });

    if (error) {
        alert("Erreur d'inscription : " + error.message);
    } else {
        alert("Succès ! Vérifiez votre email pour confirmer l'inscription.");
        console.log("Utilisateur créé :", data);
    }
}

// --- FONCTION : SE CONNECTER ---
async function signIn() {
    const email = document.querySelector('#login-form input[type="email"]')?.value || ""; // Note: Ajoute un type="email" au login form
    const name = document.querySelector('#login-form input[type="text"]').value;
    const password = document.querySelector('#login-form input[type="password"]').value;

    // Supabase utilise l'email pour le login. 
    // Si tu veux utiliser le nom, il faudra une table personnalisée, 
    // mais par défaut, l'Auth utilise l'Email.
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email: name, // Ici, j'utilise le premier champ pour l'identifiant
        password: password,
    });

    if (error) {
        alert("Erreur de connexion : " + error.message);
    } else {
        alert("Bienvenue sur Scholarite !");
        window.location.href = "/dashboard.html"; // Redirection après connexion
    }
}

// Liaison des boutons aux fonctions
document.querySelector('#register-form .btn-main').addEventListener('click', signUp);
document.querySelector('#login-form .btn-main').addEventListener('click', signIn);

