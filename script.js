// Example: Preventing form default submission for demonstration purposes
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login button clicked!');
});
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
}// Example: Preventing form default submission for demonstration purposes
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login button clicked!');
});
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Predefined valid username and password (for demo purposes)
    const validUsername = "user123";
    const validPassword = "password123";

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the dashboard page (or any other page)
        window.location.href = "home.html";
    } else {
        // Show an error message
        document.getElementById('errorMsg').textContent = "Invalid username or password!";
    }
});

// Optional: Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleText = document.querySelector(".toggle-password");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleText.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleText.textContent = "Show";
    }
}

