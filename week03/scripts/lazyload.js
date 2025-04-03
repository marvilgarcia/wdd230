document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img.lazyload");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        observer.observe(img);
    });

    document.getElementById("lastModified").textContent = document.lastModified;
});
