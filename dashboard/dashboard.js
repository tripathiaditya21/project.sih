document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.dashboard .card');

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'blink' class from all cards
            cards.forEach(c => c.classList.remove('blink'));
            // Add 'blink' class to the clicked card
            card.classList.add('blink');
            // Remove 'blink' class after animation
            setTimeout(() => {
                card.classList.remove('blink');
            }, 500); // Match this duration to the blink animation
        });
    });
});