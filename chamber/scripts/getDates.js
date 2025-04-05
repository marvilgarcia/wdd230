const lastModified = document.lastModified;

const lastModifiedSpan = document.getElementById('last-modified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
}