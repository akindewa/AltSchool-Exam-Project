document.getElementById('learnMoreBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const hiddenContent = document.querySelector('.hidden-content');
    hiddenContent.classList.toggle('visible');
    
    // Change button text
    this.textContent = hiddenContent.classList.contains('visible') 
        ? ' Collapse' 
        : '🌟 Learn More';
});

// Theme toggle function
function changeTheme() {
    document.body.classList.toggle('dark-mode');
}