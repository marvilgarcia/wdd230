
const visitDisplay = document.getElementById('visit-message');
const MILLISECONDS_PER_DAY = 86400000;

let lastVisit = Number(localStorage.getItem("lastVisit-ls")) || null;
let now = Date.now();

if (!lastVisit) {
    visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    let daysDiff = Math.floor((now - lastVisit) / MILLISECONDS_PER_DAY);
    if (daysDiff < 1) {
        visitDisplay.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        visitDisplay.textContent = `You last visited 1 day ago.`;
    } else {
        visitDisplay.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

localStorage.setItem("lastVisit-ls", now);