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

    if (error) {
        messageDisplay.style.color = "red";
        messageDisplay.innerText = "Erreur : Ce compte n'existe pas ou les identifiants sont incorrects.";
    } else {
        messageDisplay.style.color = "green";
        messageDisplay.innerText = "Connexion réussie ! Bienvenue sur Scholarite.";
        // Ici, redirection vers le tableau de bord
    }
});

// Fonction pour la Création de compte
document.getElementById('btn-signup').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('username').value; // On récupère le nom

    if(!email || !password || !fullName) {
        messageDisplay.style.color = "orange";
        messageDisplay.innerText = "Veuillez remplir tous les champs (Nom, Email et MDP).";
        return;
    }

    // C'est ici que le changement opère :
    const { data, error } = await _supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                full_name: fullName // On enregistre le nom dans Supabase
            }
        }
    });

    if (error) {
        messageDisplay.style.color = "red";
        messageDisplay.innerText = "Erreur d'inscription : " + error.message;
    } else {
        messageDisplay.style.color = "gold";
        messageDisplay.innerText = "Compte créé ! Vérifiez vos emails pour confirmer.";
    }
});
