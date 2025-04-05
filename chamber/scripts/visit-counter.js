document.addEventListener('DOMContentLoaded', function () {
    let visits = localStorage.getItem('pageVisits');
    if (!visits) {
        visits = 0;
    }
    visits++;
    localStorage.setItem('pageVisits', visits);
    document.getElementById('visit-counter').textContent = visits;
});