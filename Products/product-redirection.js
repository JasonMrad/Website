       // Select the product card
        const productCard = document.querySelector('.product-card');
    
        // Event listener for clicking the product card
        productCard.addEventListener('click', function() {
            window.location.href = 'product-specialisation.html'; // Redirect to test.html
        });
    
        // Find the buttons inside the card and add click event listeners
        const favoriteButton = productCard.querySelector('.favorite-btn');
     
        // Prevent click event from bubbling up for the favorite button
        if (favoriteButton) {
            favoriteButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent the card click event from firing
            });
        }
    
