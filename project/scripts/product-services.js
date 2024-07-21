document.addEventListener("DOMContentLoaded", async () => {

    try {
        // Fetch products and services data
        const response = await fetch('data/products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayProducts(data.products);
        displayServices(data.services);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    try {
        // Fetch weather data
        await fetchWeatherData();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});

async function fetchWeatherData() {
    const apiKey = '232703aa696071faeec1d93096aeef4c';
    const farmLocation = 'Lagos,Nigeria';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${farmLocation}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayProducts(products) {
    const productsContainer = document.getElementById('productGrid');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
        productsContainer.appendChild(productElement);
    });
}

function displayServices(services) {
    const servicesContainer = document.getElementById('serviceGrid');
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service-item');
        serviceElement.innerHTML = `
            <img src="${service.image}" alt="${service.name}" loading="lazy">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p class="price">$${service.price.toFixed(2)}</p>
        `;
        servicesContainer.appendChild(serviceElement);
    });
}

function displayWeather(weatherData) {
    const weatherContainer = document.getElementById('weatherContainer');
    const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    weatherContainer.innerHTML = `
        <img class="weather-icon" src="${iconUrl}" alt="${weatherData.weather[0].description}" loading="lazy">
        <p class="weather-temp">${weatherData.main.temp}°C</p>
        <p>${weatherData.weather[0].description}</p>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalClose = modal.querySelector('.close');
    const benefitsList = document.getElementById('fullproductServices');

    const productAndServiceDetails = {
        "products": [
            {
                "id": 1,
                "name": "Layer Chicken Cage",
                "description": "Our Layer Chicken Cages are engineered to meet the highest standards of poultry farming. Constructed with durable, rust-resistant materials, these cages provide a hygienic and comfortable environment for layer chickens. Each unit is designed to maximize egg production efficiency, with features that ensure optimal space for the chickens, easy egg collection, and minimal labor for maintenance. The cage design promotes excellent airflow, reducing the risk of disease and ensuring a healthy flock. Ideal for commercial egg production, these cages help farmers achieve high productivity with reduced operational costs.",
                "price": "$120.00",
                "image": "images/layer.jpeg"
            },
            {
                "id": 2,
                "name": "Modern Chicken Cage",
                "description": "The Modern Chicken Cage integrates state-of-the-art technology with thoughtful design to enhance the welfare of your poultry. This cage features advanced ventilation systems to maintain optimal air quality, automated feeding and watering systems to ensure consistent nourishment, and easy-access cleaning mechanisms to simplify maintenance. The cage's modular design allows for flexible configurations, making it suitable for various farm sizes. Its modern aesthetics and functionality are tailored to meet the demands of progressive poultry farmers seeking both efficiency and innovation in their operations.",
                "price": "$150.00",
                "image": "images/modern-chicken-cage.jpg"
            },
            {
                "id": 3,
                "name": "Automatic Chicken Cage",
                "description": "Our Automatic Chicken Cage represents the pinnacle of poultry farming automation. Equipped with cutting-edge systems for feeding, watering, and waste management, this cage significantly reduces the time and effort required for daily farm operations. The automated functions ensure that your chickens receive precise amounts of feed and water, and the integrated cleaning system maintains a sanitary environment with minimal manual intervention. This cage is designed for large-scale poultry farms where efficiency and labor-saving technologies are crucial. With its robust construction and advanced features, it enhances productivity and operational control.",
                "price": "$200.00",
                "image": "images/automatic-chicken-cage.jpg"
            },
            {
                "id": 4,
                "name": "Shed Chicken Cage",
                "description": "The Shed Chicken Cage is designed for poultry farmers with large flocks requiring ample space. This cage offers a spacious interior that supports the chickens' natural behaviors, such as roaming and nesting, contributing to their overall health and well-being. The design includes features such as large access doors for easy management and cleaning, and a sturdy frame that can withstand the rigors of farm life. This cage is ideal for farms looking to expand their operations and accommodate larger groups of birds while maintaining high standards of care and productivity.",
                "price": "$180.00",
                "image": "images/shed-chicken-cage.jpg"
            },
            {
                "id": 5,
                "name": "Chicken Legs",
                "description": "Our Chicken Legs are a popular choice for a variety of culinary uses. They are carefully processed to ensure high quality and freshness. Perfect for grilling, baking, or frying, these chicken legs offer a flavorful and juicy experience. They come from well-fed, healthy poultry to ensure the best taste and texture. Each portion is trimmed and ready for cooking, making meal preparation easy and enjoyable.",
                "price": "$10.00 per kg",
                "image": "images/chicken-legs.jpg"
            },
            {
                "id": 6,
                "name": "Chicken Wings",
                "description": "Our Chicken Wings are a versatile and delicious option for any meal. They are known for their rich flavor and crispy texture when cooked. Ideal for appetizers, snacks, or main courses, these wings are sourced from healthy poultry to ensure premium quality. Each batch is carefully processed and packaged to retain freshness. Whether you're making spicy buffalo wings or honey-glazed treats, our chicken wings deliver a satisfying taste experience.",
                "price": "$12.00 per kg",
                "image": "images/chicken-wings.jpeg"
            },
            {
                "id": 7,
                "name": "Chicken Breasts",
                "description": "Our Chicken Breasts are perfect for a variety of dishes, offering a lean and protein-rich option for health-conscious consumers. These breasts are carefully trimmed and packaged to ensure the highest quality and freshness. Ideal for grilling, baking, or stir-frying, they provide a versatile ingredient for countless recipes. Sourced from well-maintained poultry, our chicken breasts deliver a tender and juicy texture with every bite.",
                "price": "$15.00 per kg",
                "image": "images/chicken-breasts.jpeg"
            },
            {
                "id": 8,
                "name": "Whole Chicken",
                "description": "Our Whole Chicken is perfect for roasting, grilling, or slow-cooking. It offers a complete poultry solution for family meals or gatherings. The chicken is processed with care to maintain freshness and flavor, ensuring a high-quality product. Ideal for a variety of recipes, the whole chicken provides rich, succulent meat with the convenience of a single purchase.",
                "price": "$18.00 each",
                "image": "images/whole-chicken.jpeg"
            },
            {
                "id": 9,
                "name": "Chicken Sausages",
                "description": "Our Chicken Sausages are a delicious and versatile option for any meal. Made from high-quality chicken meat and seasoned to perfection, these sausages are ideal for grilling, frying, or adding to your favorite recipes. They offer a savory flavor and juicy texture, ensuring a satisfying culinary experience.",
                "price": "$14.00 per kg",
                "image": "images/chicken-sausages.jpeg"
            },
            {
                "id": 10,
                "name": "Chicken Thighs",
                "description": "Our Chicken Thighs are known for their rich flavor and tender texture. Perfect for baking, grilling, or slow-cooking, these thighs provide a hearty and satisfying meal. They are carefully trimmed and processed to ensure freshness and quality.",
                "price": "$13.00 per kg",
                "image": "images/chicken-thighs.jpeg"
            },
            {
                "id": 11,
                "name": "Chicken Drumsticks",
                "description": "Our Chicken Drumsticks are a popular choice for hearty meals. They offer a flavorful and juicy experience, perfect for baking, frying, or grilling. Each drumstick is sourced from healthy poultry to ensure top-notch quality.",
                "price": "$11.00 per kg",
                "image": "images/chicken-drumsticks.jpeg"
            }
        ],
        "services": [
            {
                "id": 1,
                "name": "Poultry Farm Consultation",
                "description": "Our Poultry Farm Consultation service offers expert guidance on every aspect of running a successful poultry farm. Our consultants, with extensive industry experience, work with you to develop a tailored plan that addresses your specific needs and goals. This service covers farm layout optimization, cage selection, feed management, and disease prevention strategies. Whether you're starting a new farm or optimizing an existing one, our consultation provides valuable insights and practical solutions to help you achieve optimal performance and efficiency in your poultry operations.",
                "price": "$500.00",
                "image": "images/consulting.jpeg"
            },
            {
                "id": 2,
                "name": "Custom Cage Design",
                "description": "With our Custom Cage Design service, you receive a bespoke solution tailored to the unique requirements of your poultry farm. Our team collaborates closely with you to understand your specific needs, whether it's for space optimization, ease of maintenance, or special features. We provide detailed design plans and recommendations, ensuring that the final product not only meets but exceeds your expectations. This service is ideal for farms with unique challenges or those looking to implement innovative solutions that enhance their operations and improve overall efficiency.",
                "price": "$300.00",
                "image": "images/custom-design.jpg"
            },
            {
                "id": 3,
                "name": "Poultry Health Management",
                "description": "Our Poultry Health Management service focuses on maintaining the well-being of your flock through comprehensive health monitoring and disease prevention strategies. This service includes regular health checks, vaccination programs, and tailored advice on managing common poultry diseases. Our experts provide ongoing support and recommendations to ensure that your poultry remain healthy, productive, and free from illness. With a proactive approach to health management, we help you minimize risks and maintain optimal conditions for your birds.",
                "price": "$400.00",
                "image": "images/poultry-health-management.jpeg"
            },
            {
                "id": 4,
                "name": "Poultry Feed Supply",
                "description": "Our Poultry Feed Supply service offers high-quality, nutritionally balanced feed tailored to the specific needs of your poultry. We provide a range of feed options, including starter, grower, and layer feeds, formulated to support the health and productivity of your flock. Our feed is sourced from reputable suppliers and undergoes rigorous quality control to ensure it meets the highest standards. With our reliable delivery service and expert advice on feed management, we help you maintain a healthy, productive flock with minimal hassle.",
                "price": "$200.00",
                "image": "images/feed-supply.jpeg"
            },
            {
                "id": 5,
                "name": "Poultry Farm Training",
                "description": "Our Poultry Farm Training program provides hands-on education and practical skills for managing and operating a poultry farm. Designed for both new and experienced poultry farmers, the program covers essential topics such as farm management, biosecurity measures, poultry nutrition, and breeding techniques. Participants gain valuable knowledge and insights from industry experts, equipping them with the tools needed to run a successful and efficient poultry operation. This training program helps enhance your skills and confidence in managing all aspects of poultry farming.",
                "price": "$350.00",
                "image": "images/workshop-training.jpeg"
            },
            {
                "id": 6,
                "name": "Farm Equipment Maintenance",
                "description": "Our Farm Equipment Maintenance service ensures that all your poultry farming equipment remains in top working condition. We provide regular maintenance checks, repairs, and adjustments to keep your equipment functioning optimally. Our service helps prevent unexpected breakdowns and extends the lifespan of your equipment, contributing to a smoother and more efficient operation.",
                "price": "$250.00",
                "image": "images/poultry-farm-maintenance.jpeg"
            },
            {
                "id": 7,
                "name": "Biosecurity Audit",
                "description": "Our Biosecurity Audit service offers a thorough assessment of your farm's biosecurity measures. We evaluate current protocols, identify potential risks, and provide recommendations to strengthen your biosecurity practices. This service helps protect your flock from diseases and ensures a safer, more secure farming environment.",
                "price": "$450.00",
                "image": "images/biosecurity.jpeg"
            }
        ]
    };

    function populateProductAndServiceDetails() {
        benefitsList.innerHTML = ''; // Clear previous contents

        // Add products to the modal
        productAndServiceDetails.products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 300px; height: auto;" loading="lazy"/>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
            `;
            benefitsList.appendChild(li);
        });

        // Add services to the modal
        productAndServiceDetails.services.forEach(service => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${service.image}" alt="${service.name}" style="width: 300px; height: auto;" loading="lazy"/>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <p><strong>Price:</strong> ${service.price}</p>
            `;
            benefitsList.appendChild(li);
        });
    }

    // Event listener to open modal
    document.querySelector('#fullproductServicesLink').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        populateProductAndServiceDetails();
        modal.style.display = 'block';
    });

    // Event listener to close modal
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

