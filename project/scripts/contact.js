document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (path.endsWith('contact.html')) {
        var contactLink = document.getElementById('contact-link');
        if (contactLink) {
            contactLink.classList.add('active');
        }
    }

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentYearElement = document.getElementById("currentyear");
    currentYearElement.textContent = currentYear;

    let date = document.lastModified;
    document.getElementById("lastmodified").innerHTML = "Last modified: " + date;

    // Move these lines inside the DOMContentLoaded event listener
    const hamburgerElement = document.querySelector('#menuButton');
    const navElement = document.querySelector('#animateme');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });
});