window.onload = function() {
    // Get form elements
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    if (!form || !message) {
        console.error('Required elements not found');
        return;
    }

    form.onsubmit = function(e) {
        e.preventDefault();
        
        // Get input values
        const username = document.getElementById('userInput').value;
        const password = document.getElementById('password').value;

        // Validate inputs
        if (!username || !password) {
            showMessage('Please fill in all fields', 'red');
            return;
        }

        // Check credentials (hardcoded for testing)
        if (username === 'admin' && password === '1234') {
            showMessage('Login successful! Redirecting...', 'green');
            // Save login state
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            // Redirect
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1500);
        } else {
            showMessage('Invalid username or password', 'red');
            document.getElementById('password').value = '';
        }
    };

    function showMessage(text, color) {
        message.style.display = 'block';
        message.style.color = color;
        message.style.padding = '10px';
        message.style.marginBottom = '10px';
        message.style.textAlign = 'center';
        message.textContent = text;
    }
};
