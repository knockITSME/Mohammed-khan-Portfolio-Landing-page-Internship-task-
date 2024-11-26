// Smooth Scrolling for Navigation
document.querySelectorAll('header .cta, nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault();
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = "Thank you! I'll respond to your message soon.";
    formStatus.style.color = 'green';
    event.target.reset();
});
