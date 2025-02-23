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
            window.location.href = "home.html"; // Change to your home page

        }, 1500);
    } else {
        document.getElementById("message").textContent = "Invalid Username or Password!";
        document.getElementById("message").style.color = "red";
    }
}
