// Atomic weights example
const atomicWeights = {
    H: 1.008,
    O: 16.00,
    C: 12.01,
    Na: 22.99,
    Cl: 35.45,
    // Add more elements as needed
};

// Parse formula and calculate molar mass
function calculateMolarMass(formula) {
    let regex = /([A-Z][a-z]*)(\d*)/g;
    let match;
    let mass = 0;

    while ((match = regex.exec(formula)) !== null) {
        let element = match[1];
        let count = parseInt(match[2] || "1");
        if (!atomicWeights[element]) {
            alert(`Unknown element: ${element}`);
            return null;
        }
        mass += atomicWeights[element] * count;
    }
    return mass;
}

// Calculate mass based on molarity and volume
function calculateMass(molarity, molarMass, volume) {
    return molarity * molarMass * volume;
}

// Handle form submission
document.getElementById("chemForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formula = document.getElementById("formula").value;
    const volume = parseFloat(document.getElementById("volume").value);

    const molarMass = calculateMolarMass(formula);

    if (molarMass !== null) {
        const molarity = 1; // example default molarity
        const mass = calculateMass(molarity, molarMass, volume);

        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = `
            <p>Molar Mass of ${formula}: ${molarMass.toFixed(2)} g/mol</p>
            <p>Mass required for ${volume} L at ${molarity} M: ${mass.toFixed(2)} g</p>
        `;

        // Save to localStorage
        localStorage.setItem("lastCalculation", JSON.stringify({ formula, volume, molarMass, mass }));
    }
});
