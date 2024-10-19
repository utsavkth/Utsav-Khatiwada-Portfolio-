// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover animations for the glowing effect
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('glow-effect');
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('glow-effect');
    });
});
