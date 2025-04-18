document.addEventListener('DOMContentLoaded', function () {
    let visits = Number(localStorage.getItem('pageVisits')) || 0;
    visits++;
    localStorage.setItem('pageVisits', visits);
    document.getElementById('visit-counter').textContent = visits;

    const today = Date.now();
    const lastVisit = Number(localStorage.getItem('lastVisit'));
    const messageElement = document.getElementById('visit-message');

    if (lastVisit) {
        const differenceInDays = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
        messageElement.textContent = differenceInDays === 0
            ? "Welcome back! Thanks for visiting again today."
            : `Welcome back! It's been ${differenceInDays} day${differenceInDays > 1 ? 's' : ''} since your last visit.`;
    } else {
        messageElement.textContent = "Welcome! This is your first visit.";
    }

    localStorage.setItem('lastVisit', today);
});
