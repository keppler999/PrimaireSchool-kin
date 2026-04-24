const formTitle = document.getElementById('form-title');
const mainBtn = document.getElementById('main-btn');
const toggleBtn = document.getElementById('toggle-btn');
const switchText = document.getElementById('switch-text');
const nameGroup = document.getElementById('name-group');
const authForm = document.getElementById('auth-form');

let isLoginMode = false;

toggleBtn.addEventListener('click', () => {
    isLoginMode = !isLoginMode;

    if (isLoginMode) {
        formTitle.innerText = "Se connecter";
        mainBtn.innerText = "Connexion";
        switchText.innerText = "Pas encore de compte ?";
        toggleBtn.innerText = "Créer un compte";
        nameGroup.style.display = "none"; // On cache le nom pour la connexion
    } else {
        formTitle.innerText = "Créer un compte";
        mainBtn.innerText = "Créer mon compte";
        switchText.innerText = "Déjà membre ?";
        toggleBtn.innerText = "Se connecter";
        nameGroup.style.display = "block";
    }
});

// Logique prête à être attachée à une API (comme Supabase)
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        name: isLoginMode ? null : document.getElementById('name').value
    };

    if (isLoginMode) {
        console.log("Tentative de connexion avec :", data.email);
        alert("Appel de la fonction de connexion pour : " + data.email);
    } else {
        console.log("Création de compte pour :", data.name);
        alert("Appel de la fonction de création pour : " + data.name);
    }
});

