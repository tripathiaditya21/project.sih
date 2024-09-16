    // Navbar hide/show on scroll
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down, hide navbar
            navbar.style.top = `-${navbarHeight}px`;
        } else {
            // Scrolling up, show navbar
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    });

    // Function to open the modal
    function openModal() {
        document.getElementById("modal").style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById("modal").style.display = "none";
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

    // Typing Effect for Hero Section
    const words = ['DOCTORS', 'DENTISTS', 'GYNECOLOGISTS', 'PEDIATRECIANS'];
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

    document.addEventListener('DOMContentLoaded', type);

    // Chatbox toggle functionality
    function toggleChatBox() {
        const chatBox = document.getElementById('chat-box');
        chatBox.classList.toggle('visible');
    }

    // Handle Enter key press for chat input
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    // Function to handle sending messages
    function sendMessage() {
        const inputElement = document.getElementById('chat-input');
        const chatBody = document.getElementById('chat-body');
        const message = inputElement.value.trim();

        if (message === '') return;

        // Display the user's message
        chatBody.innerHTML += `<div class="user-message">${message}</div>`;
        inputElement.value = '';

        // Simulate AI response for testing
        const aiMessage = "This is a simulated AI response.";
        chatBody.innerHTML += `<div class="ai-message">${aiMessage}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    // Function to open the modal
    function openModal() {
        document.getElementById("modal").style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    // Close modal when clicking outside of the modal content
    window.onclick = function(event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            closeModal();
        }
    }
