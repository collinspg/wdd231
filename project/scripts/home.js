document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (path.endsWith('index.html')) {
        var homeLink = document.getElementById('home-link');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
    
    const hamburgerElement = document.querySelector('#menuButton');
    const navElement = document.querySelector('nav ul');
    
    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentYearElement = document.getElementById("currentyear");
    currentYearElement.textContent = currentYear;

    let date = document.lastModified;
    document.getElementById("lastmodified").innerHTML = "Last modified: " + date;
});
