const destinations = [
    {
        name: "Maasai Mara",
        image: "images/maasai-mara.jpg",
        description: "Experience the world-famous Great Migration and diverse wildlife in Kenya’s most iconic national reserve."
    },
    {
        name: "Diani Beach",
        image: "images/diani-beach.jpg",
        description: "Relax on white sandy beaches and enjoy turquoise waters along Kenya’s beautiful coastline."
    },
    {
        name: "Mount Kenya",
        image: "images/mount-kenya.jpg",
        description: "Climb Africa’s second-highest mountain and explore breathtaking alpine landscapes."
    }
];

function displayDestinations() {
    const container = document.querySelector("#destinations");

    if (!container) return;

    container.innerHTML = destinations.map(destination => `
        <article class="card">
            <img src="${destination.image}" 
                 alt="Scenic view of ${destination.name}" 
                 loading="lazy">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <button class="save-btn" data-name="${destination.name}">
                Save Destination
            </button>
        </article>
    `).join("");
}

function saveFavorite(event) {
    if (event.target.classList.contains("save-btn")) {

        const name = event.target.dataset.name;
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (!favorites.includes(name)) {
            favorites.push(name);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert(`${name} has been added to your favorites.`);
        } else {
            alert(`${name} is already in your favorites list.`);
        }
    }
}

function handleFormSubmission(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const destination = document.querySelector("#destination").value;
    const message = document.querySelector("#message").value.trim();
    const responseDiv = document.querySelector("#formResponse");

    if (!name || !email || !destination || !message) {
        responseDiv.innerHTML = `<p>Please complete all required fields before submitting.</p>`;
        return;
    }

    const submission = { name, email, destination, message };

    localStorage.setItem("contactSubmission", JSON.stringify(submission));

    responseDiv.innerHTML = `
        <p>Thank you, ${name}. We will contact you shortly regarding ${destination}.</p>
    `;

    document.querySelector("#contactForm").reset();
}

document.addEventListener("DOMContentLoaded", () => {
    displayDestinations();

    const destinationContainer = document.querySelector("#destinations");
    if (destinationContainer) {
        destinationContainer.addEventListener("click", saveFavorite);
    }

    const form = document.querySelector("#contactForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmission);
    }
});