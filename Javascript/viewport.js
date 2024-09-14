
function updateMetaTag() {
const metaDescription = document.querySelector('meta[name="viewport"]');
const mediaQuery = window.matchMedia("(max-width: 943px)");

if (mediaQuery.matches) {
  
  metaDescription.setAttribute("content", "width=device-width, initial-scale=0.35, user-scalable=yes"");
} else {
 
  metaDescription.setAttribute("content", "width=device-width, initial-scale=1");
}
    // Remove event listeners so it runs only once
    window.removeEventListener('load', updateMetaTag);
    window.removeEventListener('resize', updateMetaTag);
}

// Run on page load
window.addEventListener('load', updateMetaTag);

// Run on window resize
window.addEventListener('resize', updateMetaTag);

