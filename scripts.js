// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.offsetHeight; // Get the navbar height dynamically

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down, hide navbar
        navbar.style.top = `-${navbarHeight}px`; // Fixed: Use backticks for template literal
    } else {
        // Scrolling up, show navbar
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Your Gemini AI API Key
const API_KEY = 'AIzaSyCQ0HIUxVLiWiQpTfYbmVn3dZkd1CBgvGA';

// Base URL for Gemini AI API (replace with the actual API endpoint)
const BASE_URL = 'https://api.gemini.ai/v1/analyze'; // Replace with actual API endpoint

// Function to open the modal and fetch API data
function openModal() {
    document.getElementById("modal").style.display = "flex";

    // Fetch data from the API when the modal is opened
    fetchAIData();
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Function to fetch AI data using the API key
async function fetchAIData() {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'GET', // Adjust method based on the API documentation
            headers: {
                'Authorization': `Bearer ${API_KEY}`, // Send the API key in the header
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response

        // Display the fetched data inside the modal
        displayModalData(data);

    } catch (error) {
        console.error('Error fetching AI data:', error);
    }
}

// Function to display API data inside the modal
function displayModalData(data) {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`; // Format and display data
}


// Hamburger Menu Toggle
function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
        document.removeEventListener('click', closeMenuOnClickOutside); // Remove event listener when closing
    } else {
        sideMenu.style.width = "250px";
        document.addEventListener('click', closeMenuOnClickOutside); // Add event listener when opening
    }
}

// Function to close the menu when clicking outside
function closeMenuOnClickOutside(event) {
    const sideMenu = document.getElementById("sideMenu");
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    // Check if the click is outside the side menu and the hamburger icon
    if (!sideMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        sideMenu.style.width = "0";
        document.removeEventListener('click', closeMenuOnClickOutside); // Remove the event listener once the menu is closed
    }
}

// Modal Popup
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Typing Effect for Hero Section
const words = ['Doctors', 'Dentists', 'Gynecologists', 'Pediatricians'];
const dynamicText = document.querySelector('.dynamic-text');
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, letterIndex--);
        if (letterIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            letterIndex = 0;
            setTimeout(type, 500); // Pause before typing the next word
            return;
        }
    } else {
        dynamicText.textContent = currentWord.substring(0, letterIndex++);
        if (letterIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000); // Wait before starting to delete
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : 150);
}

// Ensure this runs only once
document.addEventListener('DOMContentLoaded', type);
function toggleChatBox() {
    const chatBox = document.getElementById("chat-box");
    chatBox.classList.toggle("hidden");
}

// Function to handle sending messages
function sendMessage() {
    const input = document.getElementById("chat-input");
    const chatBody = document.querySelector(".chat-body");
    
    // Create a new message element
    const message = document.createElement("div");
    message.className = "message";
    message.textContent = input.value;
    
    // Add the message to the chat body
    chatBody.appendChild(message);
    
    // Clear the input
    input.value = "";
    
    // Scroll to the bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Event listener for the chat button
document.getElementById("chat-button").addEventListener("click", toggleChatBox);
