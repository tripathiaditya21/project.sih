document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const captchaInput = document.getElementById('captcha');
    const passwordError = document.getElementById('passwordError');
    const captchaError = document.getElementById('captchaError');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Password validation
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            valid = false;
        } else {
            passwordError.textContent = '';
        }

        // CAPTCHA validation
        if (captchaInput.value !== '12345') {
            captchaError.textContent = 'CAPTCHA is incorrect.';
            valid = false;
        } else {
            captchaError.textContent = '';
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if there are validation errors
        }
    });

    // Real-time password strength check
    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
        } else {
            passwordError.textContent = '';
        }
    });
});
