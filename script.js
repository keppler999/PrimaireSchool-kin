const authForm = document.getElementById('auth-form');
const toggleBtn = document.getElementById('toggle-btn');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const emailGroup = document.getElementById('email-group');

let isLoginMode = false;

toggleBtn.addEventListener('click', () => {
    isLoginMode = !isLoginMode;

    if (isLoginMode) {
        formTitle.innerText = "Se connecter";
        submitBtn.innerText = "Connexion";
        toggleBtn.innerText = "Pas de compte ? Créer un compte";
        // Masquer l'email pour la connexion selon tes consignes (Nom + Password)
        emailGroup.style.display = "none";
        document.getElementById('email').required = false;
    } else {
        formTitle.innerText = "Créer un compte";
        submitBtn.innerText = "Créer le compte";
        toggleBtn.innerText = "Déjà un compte ? Se connecter";
        emailGroup.style.display = "block";
        document.getElementById('email').required = true;
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('username').value,
        password: document.getElementById('password').value,
        email: !isLoginMode ? document.getElementById('email').value : null
    };

    if (isLoginMode) {
        console.log("Tentative de connexion pour :", formData.name);
        // Ici, tu pourras attacher ta logique de vérification base de données
        alert("Connexion en cours pour " + formData.name);
    } else {
        console.log("Création de compte pour :", formData.name);
        // Ici, tu pourras attacher ta logique d'insertion Supabase
        alert("Compte Scholarite créé pour " + formData.name);
    }
});
