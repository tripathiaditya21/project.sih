// Your Firebase config here (ensure this is configured)
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get username, password, and role
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    
    // Sign in with Firebase Authentication
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            const user = userCredential.user;
            
            // Redirect based on role
            if (role === 'user') {
                window.location.href = 'user-dashboard.html'; // Redirect to user dashboard
            } else if (role === 'doctor') {
                window.location.href = 'doctor-dashboard.html'; // Redirect to doctor dashboard
            } else if (role === 'admin') {
                window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
            }
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert("Login failed: " + errorMessage);
        });
});
