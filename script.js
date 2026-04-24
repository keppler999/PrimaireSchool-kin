// Initialisation de Supabase
const SUPABASE_URL = 'https://dztbxntfsouuyrrigaah.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lNctOhdEyESJGitYGXDsqA_rNLhHNBe'; // Utilise ta clé publique ici
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const authForm = document.getElementById('auth-form');
const messageDisplay = document.getElementById('message');

// Fonction pour se connecter
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    messageDisplay.textContent = "Vérification en cours...";

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        if (error.message.includes("Invalid login credentials")) {
            messageDisplay.textContent = "Vous n'avez pas de compte. Veuillez en créer un.";
        } else {
            messageDisplay.textContent = "Erreur : " + error.message;
        }
    } else {
        messageDisplay.style.color = "#d4af37";
        messageDisplay.textContent = "Connexion réussie ! Bienvenue sur Scholarite.";
        // Redirection vers le dashboard ici
    }
});

// Bouton Créer un compte
document.getElementById('signup-btn').addEventListener('click', () => {
    alert("Redirection vers la page d'inscription...");
    // Tu peux ici ajouter la logique supabase.auth.signUp
});

