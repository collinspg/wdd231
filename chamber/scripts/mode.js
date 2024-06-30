document.getElementById('darkModeToggle').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default action of the link
    document.body.classList.toggle('dark-mode');
    // Optionally, save user preference in localStorage or cookies
});
