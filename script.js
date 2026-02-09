// Simple interaction: Console log when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("Kevin Akankwatsa's Portfolio Loaded Successfully");
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});