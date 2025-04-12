const baseURL = "https://marvilgarcia.github.io/wdd230/"; // Adjust this to match your GitHub Pages base URL
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

function displayLinks(weeks) {
    const linksDiv = document.querySelector("#links");
    weeks.forEach(week => {
        const weekHeading = document.createElement("h3");
        weekHeading.textContent = week.week;
        linksDiv.appendChild(weekHeading);

        const list = document.createElement("ul");
        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = "_blank"; // optional: open in new tab
            listItem.appendChild(anchor);
            list.appendChild(listItem);
        });
        linksDiv.appendChild(list);
    });
}

getLinks();

