// Get the current year
var currentYear = new Date().getFullYear();

// Set the copyright year in the footer's first paragraph
var copyrightYearElement = document.querySelector('footer p:first-of-type');
copyrightYearElement.textContent = "Copyright © Marvil Garcia | Dominican Republic " + currentYear;

// Get the document's last modified date
var lastModified = document.lastModified;

// Set the last modified date in the footer's second paragraph
var lastModifiedElement = document.querySelector('footer p:last-of-type');
lastModifiedElement.textContent = "Last Modified: " + lastModified;