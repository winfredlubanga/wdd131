// ===============================
// Temple Data Array
// ===============================
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temples
    {
        templeName: "Nairobi Kenya",
        location: "Nairobi, Kenya",
        dedicated: "2019-10-13",
        area: 18600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nairobi-kenya/400x250/nairobi-kenya-temple-exterior.jpg"
    },
    {
        templeName: "Kampala Uganda",
        location: "Kampala, Uganda",
        dedicated: "2008-03-01",
        area: 15000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kampala-uganda/400x250/kampala-uganda-temple-exterior.jpg"
    },
    {
        templeName: "Dar es Salaam Tanzania",
        location: "Dar es Salaam, Tanzania",
        dedicated: "2022-06-05",
        area: 14000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dar-es-salaam-tanzania/400x250/dar-es-salaam-tanzania-temple-exterior.jpg"
    }
];

// ===============================
// Display Temple Cards
// ===============================
function displayTemples(filteredTemples) {
    const container = document.getElementById('temple-cards');
    container.innerHTML = ''; // Clear previous content

    filteredTemples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// ===============================
// Filter Buttons
// ===============================
document.getElementById('homeBtn').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link from navigating
    displayTemples(temples);
});

document.getElementById('oldBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const oldTemples = temples.filter(t => new Date(t.dedicated) < new Date('1900-01-01'));
    displayTemples(oldTemples);
});

document.getElementById('newBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const newTemples = temples.filter(t => new Date(t.dedicated) > new Date('2000-01-01'));
    displayTemples(newTemples);
});

document.getElementById('largeBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById('smallBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

// ===============================
// Footer Dynamic Content
// ===============================
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// ===============================
// Hamburger Menu
// ===============================
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// ===============================
// Initial Load - show all temples
// ===============================
displayTemples(temples);

