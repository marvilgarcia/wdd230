const form = document.getElementById('signupForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('passwordError');

form.addEventListener('submit', function (event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault(); // ✋ Detiene el envío del formulario
        errorMessage.style.display = 'block'; // 👁️ Muestra mensaje
        password.value = '';
        confirmPassword.value = '';
        password.focus(); // 🔄 Enfoca el campo para reescribir
    } else {
        errorMessage.style.display = 'none';
    }
});
