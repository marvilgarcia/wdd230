const baseURL = "https://marvilgarcia.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('links');

    const ul = document.createElement('ul');

    weeks.forEach(week => {
        const li = document.createElement('li');
        li.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = ` ${link.title}`;
            li.appendChild(a);

            if (index < week.links.length - 1) {
                li.appendChild(document.createTextNode(' |'));
            }
        });

        ul.appendChild(li);
    });

    linksContainer.appendChild(ul);
}

getLinks();
