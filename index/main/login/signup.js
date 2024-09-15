document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation: Check if fields are not empty and email contains '@'
    if (name && email.includes('@') && password) {
        // Redirect to the login page
        window.location.href = '../loginaf/index.html';
    } else {
        alert('Please enter valid details.');
    }
});
