// Change the background color of the CTA on hover
const cta = document.querySelector('.cta');
cta.addEventListener('mouseenter', function() {
    cta.style.color = 'green';
});

cta.addEventListener('mouseleave', function() {
    cta.style.color = '#333';
});

// Show an alert when a product is clicked
document.querySelectorAll('.product img').forEach(function(img) {
    img.addEventListener('click', function() {
        alert('You clicked on ' + img.alt);
    });
});

// Force navigation to the correct page when a nav link is clicked
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link behavior

        // Get the href value of the clicked link
        const targetPage = link.getAttribute('href');

        // Force navigation to the correct page
        window.location.href = targetPage;
    });
});
