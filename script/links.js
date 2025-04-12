const baseURL = 'https://marvilgarcia.github.io/wdd230/';
const linksURL = 'data/links.json';

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error al obtener los enlaces:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('links');
    const ul = document.createElement('ul');
    ul.classList.add('activity-list'); // Aplica la clase al <ul>

    weeks.forEach(week => {
        const li = document.createElement('li');
        li.classList.add('activity-item'); // Aplica la clase al <li>

        const weekTitle = document.createElement('span');
        weekTitle.textContent = `${week.week}: `;
        li.appendChild(weekTitle);

        week.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = baseURL + link.url;
            a.textContent = link.title;
            a.classList.add('activity-link'); // Aplica la clase al <a>
            li.appendChild(a);

            if (index < week.links.length - 1) {
                const separator = document.createTextNode(' | ');
                li.appendChild(separator);
            }
        });

        ul.appendChild(li);
    });

    linksContainer.appendChild(ul);
}

getLinks();
