const hamburgerElement = document.querySelector('#menuButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// footer date information
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

let date = document.lastModified;
document.getElementById("lastmodified").innerHTML = "Last modified: " + date;


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalClose = modal.querySelector('.close');
    const benefitsList = document.getElementById('membershipBenefits');

    const membershipBenefits = [
        "Exclusive Discounts on Products and Services",
        "Access to Networking Events and Industry Forums",
        "Insights and Reports on Industry Trends",
        "Workshops and Training Sessions",
        "Promotional Opportunities for Your Business",
        "Advocacy and Representation for Industry Concerns",
        "Access to Exclusive Resources and Tools",
        "Recognition on Website and Newsletters",
        "Dedicated Support Services",
        "Community Engagement and Networking"
    ];

    function populateBenefits() {
        membershipBenefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
    }

    // Event listener to open modal
    document.querySelector('#membershipLink').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = 'block';
        populateBenefits();
    });

    // Event listener to close modal
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
        benefitsList.innerHTML = ''; // Clear benefits list
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            benefitsList.innerHTML = ''; // Clear benefits list
        }
    });
});

// Thank you page

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve form data from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Function to decode URL parameter value
    const decodeParam = (param) => {
        return decodeURIComponent(param.replace(/\+/g, ' '));
    };
    
    // Get each form field value from URL parameters
    const firstName = decodeParam(urlParams.get('fname'));
    const lastName = decodeParam(urlParams.get('lname'));
    const phone = decodeParam(urlParams.get('phone'));
    const email = decodeParam(urlParams.get('email'));
    const website = decodeParam(urlParams.get('url'));
    
    const businessName = decodeParam(urlParams.get('name'));
    const submissionDate = decodeParam(urlParams.get('dateHidden'));
    const currentTime = decodeParam(urlParams.get('timeHidden'));

    // Update DOM with retrieved form data
    document.getElementById('firstName').textContent = firstName;
    document.getElementById('lastName').textContent = lastName;
    document.getElementById('phone').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('businessName').textContent = businessName;
    document.getElementById('submissionDate').textContent = submissionDate;
    document.getElementById('currentTime').textContent = currentTime;
});

function setDateTime() {
    // Get current date and time
    const now = new Date();
    const dateValue = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const timeValue = now.toTimeString().slice(0, 8); // HH:MM:SS

    // Set hidden input values
    document.getElementById('dateHidden').value = dateValue;
    document.getElementById('timeHidden').value = timeValue;
}
