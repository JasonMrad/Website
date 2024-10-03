document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        // Redirect to special.html when a product card is clicked
        window.location.href = 'test.html';
    });
});
