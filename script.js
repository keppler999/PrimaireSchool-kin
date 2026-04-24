// script.js
function toggleForm() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm.classList.contains('hidden')) {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    } else {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
}

// Note pour l'intégration future : 
// Ici, tu pourras ajouter tes appels API vers ton nouveau backend 
// pour gérer la création réelle des comptes.

