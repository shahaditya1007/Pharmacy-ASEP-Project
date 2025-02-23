function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let correctUsername = "admin";
    let correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("message").textContent = "Login Successful!";
        document.getElementById("message").style.color = "green";

        // Save login status
        localStorage.setItem("isLoggedIn", "true");

        setTimeout(() => {
            window.location.href = "./home.html"; // Change to your home page

        }, 1500);
    } else {
        document.getElementById("message").textContent = "Invalid Username or Password!";
        document.getElementById("message").style.color = "red";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function() {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        // Toggle the icon class
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
        this.classList.toggle('active');
    });
});
