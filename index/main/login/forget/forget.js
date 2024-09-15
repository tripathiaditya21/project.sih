// Get elements
const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
const modal = document.getElementById('forgotPasswordModal');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.getElementById('submitBtn');

// Open modal when 'Forgot Password?' button is clicked
forgotPasswordBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close modal when 'X' is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when user clicks outside modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission
submitBtn.onclick = function() {
    const email = document.getElementById('email').value;
    if (email) {
        alert('Password reset link has been sent to ' + email);
        modal.style.display = 'none';
    } else {
        alert('Please enter a valid email address.');
    }
}
