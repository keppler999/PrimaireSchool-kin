// Remplace par tes clés si besoin (déjà fournies dans ton message)
const SUPABASE_URL = 'https://dztbxntfsouuyrrigaah.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lNctOhdEyESJGitYGXDsqA_rNLhHNBe';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const loginForm = document.getElementById('loginForm');
const messageDisplay = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;

    messageDisplay.textContent = "Vérification...";

    // 1. Tentative de connexion
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        // 2. Si erreur, vérifier si le compte existe du tout
        if (error.message.includes("Invalid login credentials")) {
            messageDisplay.textContent = "Vous n'avez pas de compte. Veuillez en créer un.";
        } else {
            messageDisplay.textContent = "Erreur : " + error.message;
        }
    } else {
        messageDisplay.style.color = "green";
        messageDisplay.textContent = `Bienvenue ${name}, connexion réussie !`;
        // Redirection vers le tableau de bord de Scholarite ici
    }
});

// Bouton Créer un compte
document.getElementById('btnRegister').addEventListener('click', () => {
    alert("Redirection vers la page d'inscription...");
    // window.location.href = "inscription.html";
});
