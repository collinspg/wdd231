const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching prophet data:', error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // heading for full name
        let birthInfo = document.createElement('div'); // container for birth info
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');

        // Build the h2 content to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set the birth date and place
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Append birth date and place to the birth info container
        birthInfo.appendChild(birthDate);
        birthInfo.appendChild(birthPlace);

        // Build the image portrait by setting all the relevant attributes
        portrait.src = prophet.imageurl;
        portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
        portrait.loading = 'lazy';
        portrait.width = 340;
        portrait.height = 440;

        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(birthInfo); // Append birth info container under full name
        card.appendChild(portrait);

        // Add styling to the card
        card.classList.add('prophet-card');

        // Append the card to the #cards container
        cards.appendChild(card);
    });
};

getProphetData();



