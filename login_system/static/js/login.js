window.onload = function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    if (!form || !message) {
        console.error('Required elements not found');
        return;
    }

    form.onsubmit = function(e) {
        e.preventDefault();
        
        const username = document.getElementById('userInput').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            showMessage('Please fill in all fields', 'red');
            return;
        }

        if (username === 'admin' && password === '1234') {
            showMessage('Login successful! Redirecting...', 'green');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
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
