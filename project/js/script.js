const destinations = [
    {
        name: "Maasai Mara",
        image: "images/maasai-mara.jpg",
        description: "Famous for wildlife and the Great Migration."
    },
    {
        name: "Diani Beach",
        image: "images/diani.jpg",
        description: "White sandy beaches and crystal clear waters."
    },
    {
        name: "Mount Kenya",
        image: "images/mount-kenya.jpg",
        description: "Africa's second highest mountain."
    }
];

// Function 1: Display destinations
function displayDestinations() {
    const container = document.querySelector("#destinations");

    container.innerHTML = destinations.map(destination => `
        <div class="card">
            <img src="${destination.image}" alt="${destination.name}" loading="lazy">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <button class="save-btn" data-name="${destination.name}">Save</button>
        </div>
    `).join("");
}

// Function 2: Save favorite to localStorage
function saveFavorite(event) {
    if (event.target.classList.contains("save-btn")) {

        const name = event.target.dataset.name;
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (!favorites.includes(name)) {
            favorites.push(name);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert(`${name} added to favorites!`);
        } else {
            alert(`${name} is already saved.`);
        }
    }
}

// Event Listener
document.addEventListener("DOMContentLoaded", () => {
    displayDestinations();
    document.querySelector("#destinations").addEventListener("click", saveFavorite);
});

// Function 3: Handle Contact Form
function handleFormSubmission(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const destination = document.querySelector("#destination").value;
    const message = document.querySelector("#message").value.trim();

    const responseDiv = document.querySelector("#formResponse");

    if (name === "" || email === "" || destination === "" || message === "") {
        responseDiv.innerHTML = `<p>Please fill in all fields.</p>`;
        return;
    }

    const formData = {
        name,
        email,
        destination,
        message
    };

    localStorage.setItem("contactSubmission", JSON.stringify(formData));

    responseDiv.innerHTML = `
        <p>Thank you, ${name}! We will contact you about ${destination} soon.</p>
    `;

    document.querySelector("#contactForm").reset();
}

// Add event listener safely
document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector("#contactForm")) {
        document.querySelector("#contactForm")
            .addEventListener("submit", handleFormSubmission);
    }

});