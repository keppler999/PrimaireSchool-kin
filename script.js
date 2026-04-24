// Basculer entre Création de compte et Connexion
function toggleForm() {
    const regForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    
    regForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
}

// Logique pour "Créer"
function handleRegister() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    if(!name || !email || !password) {
        alert("Veuillez remplir tous les champs Scholarite.");
        return;
    }

    console.log("Tentative de création de compte pour:", name);
    // Ici, tu pourras injecter ton code Supabase : supabase.auth.signUp(...)
    alert("Compte Scholarite créé avec succès pour " + name);
}

// Logique pour "Se connecter"
function handleLogin() {
    const name = document.getElementById('login-name').value;
    const password = document.getElementById('login-password').value;

    if(!name || !password) {
        alert("Veuillez entrer vos identifiants.");
        return;
    }

    console.log("Connexion de :", name);
    // Ici, tu pourras injecter ton code Supabase : supabase.auth.signInWithPassword(...)
    alert("Bienvenue sur Scholarite, " + name);
}
