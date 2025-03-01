document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const messageContainer = document.getElementById('messageContainer');

    if (!messageContainer) {
        console.error("messageContainer not found in the DOM!");
        return;
    }

    function setupPasswordToggle(passwordId, toggleId) {
        const passwordInput = document.getElementById(passwordId);
        const toggleButton = document.getElementById(toggleId);
        
        if (toggleButton && passwordInput) {
            toggleButton.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                toggleButton.classList.toggle('fa-eye');
                toggleButton.classList.toggle('fa-eye-slash');
            });
        }
    }

    setupPasswordToggle('password', 'togglePassword');
    setupPasswordToggle('confirmPassword', 'toggleConfirmPassword');

    function showMessage(message, isError = false) {
        messageContainer.textContent = message;
        messageContainer.className = `message-container ${isError ? 'message-error' : 'message-success'}`;
        messageContainer.style.display = 'block';
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
            showMessage('Please fill in all fields', true);
            return;
        }

        if (password.length < 6) {
            showMessage('Password must be at least 6 characters long', true);
            return;
        }

        if (password !== confirmPassword) {
            showMessage('Passwords do not match', true);
            return;
        }

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showMessage('Please enter a valid email address', true);
            return;
        }

        if (!phone.match(/^\d{10}$/)) {
            showMessage('Please enter a valid 10-digit phone number', true);
            return;
        }

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone: phone,
                    password: password
                })
            });

            const result = await response.text();
            if (response.ok) {
                showMessage('Account created successfully! Redirecting to login...', false);
                form.reset();
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                showMessage(result, true);
            }

        } catch (error) {
            console.error('Error during signup:', error);
            showMessage('An error occurred. Please try again.', true);
        }
    });

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            messageContainer.style.display = 'none';
        });
    });
});
