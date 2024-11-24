// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Selectable Service Cards
const serviceCards = document.querySelectorAll('.service-card');
const selectedServiceText = document.getElementById('selected-service');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'selected' class from all cards
        serviceCards.forEach(c => c.classList.remove('selected'));

        // Add 'selected' class to the clicked card
        card.classList.add('selected');

        // Update the selected service message
        const serviceName = card.querySelector('h3').innerText;
        selectedServiceText.textContent = `You selected: ${serviceName}`;
    });
});
