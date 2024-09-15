// Toggle the FAQ answer visibility with smooth transition
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Check if the answer is already expanded
        if (answer.style.maxHeight) {
            // Collapse the answer
            answer.style.maxHeight = null;
        } else {
            // Expand the answer
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// Live Chat functionality
document.getElementById('startChat').addEventListener('click', () => {
    // Show an alert for live chat functionality
    alert('Starting live chat...');

    // You can replace this with real chat opening code
    // Example:
    // window.open('liveChatPage.html', '_blank', 'width=400,height=600');
});
