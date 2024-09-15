// script.js

// Function to handle adding a new address
function addAddress() {
    const addressField = document.getElementById('address');
    if (addressField.value.trim() === '') {
        alert('Please enter an address.');
        return;
    }

    // For demonstration purposes, we'll just log the address to the console
    console.log('Address added:', addressField.value);
    
    // Clear the address field
    addressField.value = '';
    
    // Add a new address option (dummy data for demonstration)
    const defaultAddressSelect = document.getElementById('default-address');
    const newOption = document.createElement('option');
    newOption.value = addressField.value;
    newOption.textContent = addressField.value;
    defaultAddressSelect.appendChild(newOption);
}

// Function to handle user logout
function logout() {
    // For demonstration purposes, we'll just show an alert
    alert('You have been logged out.');
    
    // Perform actual logout functionality here, e.g., redirect to login page
    // window.location.href = 'login.html'; // Uncomment this line to redirect
}

// Example of handling form submissions
document.getElementById('personal-info-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Personal Information updated.');
});

document.getElementById('password-management-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Password changed.');
});

document.getElementById('notification-preferences-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Notification preferences updated.');
});

document.getElementById('privacy-settings-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Privacy settings updated.');
});

document.getElementById('security-settings-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Security settings updated.');
});
