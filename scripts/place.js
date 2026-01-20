// Footer dates
const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Static weather values
const temperature = 18; // °C
const windSpeed = 10;   // km/h

const windChillSpan = document.getElementById("windchill");

// Wind chill calculation (Metric)
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// Conditions check
if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    windChillSpan.textContent = "N/A";
}
