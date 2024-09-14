// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpkbgAmTYmqvJtltUZWxU9hAgK87jPSJg",
    authDomain: "healing-hands-5a296.firebaseapp.com",
    projectId: "healing-hands-5a296",
    storageBucket: "healing-hands-5a296.appspot.com",
    messagingSenderId: "611917943728",
    appId: "1:611917943728:web:95abeefaddfceed0137c75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get form element
const loginForm = document.getElementById('loginForm');

// Handle login form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form from submitting

    // Get username and password
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sign in with Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            alert("Login successful!");
            window.location.href = "dashboard.html";  // Redirect to dashboard
        })
        .catch((error) => {
            // Handle login errors
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
