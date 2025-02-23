document.addEventListener('DOMContentLoaded', function() {
    // Password toggle functionality
    const togglePassword = document.querySelector('#togglePassword');
    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');

    function togglePasswordVisibility(toggleBtn, inputField) {
        toggleBtn.addEventListener('click', function() {
            const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
            inputField.setAttribute('type', type);
            
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
            this.classList.toggle('active');
        });
    }

    togglePasswordVisibility(togglePassword, password);
    togglePasswordVisibility(toggleConfirmPassword, confirmPassword);

    // Form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match!');
            return;
        }
        
        // Add your signup logic here
        console.log('Form submitted successfully');
    });
});
