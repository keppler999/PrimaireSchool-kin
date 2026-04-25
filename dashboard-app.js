// Gestion du logo de l'école
const logoInput = document.getElementById('logo-input');
const schoolLogo = document.getElementById('school-logo');

logoInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            schoolLogo.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
