
const copaTeams = [
    {
        name: "Argentina",
        code: "ARG",
        image: "./assets/CopaAmerica/argentina.jpg"
    },
    {
        name: "Bolivia",
        code: "BOL",
        image: "./assets/CopaAmerica/bolivia.jpg"
    },
    {
        name: "Brazil",
        code: "BRA",
        image: "./assets/CopaAmerica/brazil.jpg"
    },
    {
        name: "Chile",
        code: "CHI",
        image: "./assets/CopaAmerica/chile.jpg"
    },
    {
        name: "Colombia",
        code: "COL",
        image: "./assets/CopaAmerica/colombia.webp"
    },
    {
        name: "Ecuador",
        code: "ECU",
        image: "./assets/CopaAmerica/ecuador.webp"
    },
    {
        name: "Paraguay",
        code: "PAR",
        image: "./assets/CopaAmerica/paraguay.jpg"
    },
    {
        name: "Peru",
        code: "PER",
        image: "./assets/CopaAmerica/peru.avif"
    },
    {
        name: "Uruguay",
        code: "URU",
        image: "./assets/CopaAmerica/uruguay.jpg"
    },
    {
        name: "Venezuela",
        code: "VEN",
        image: "./assets/CopaAmerica/venezuela.jpg"
    }
];

const teamsContainer = document.getElementById("copaTeams");
const teamCount = document.getElementById("teamCount");

teamCount.textContent = `${copaTeams.length} National Teams`;

copaTeams.forEach(team => {
    const card = document.createElement("article");

    card.className = "copa-card";

    card.innerHTML = `
        <img
            src="${team.image}"
            alt="${team.name}"
            loading="lazy"
        >

        <div class="card-content">
            <span class="team-code">${team.code}</span>

            <h3>${team.name}</h3>

            <a
                href="copa-details.html?team=${team.code}"
                class="details-link"
            >
                View Details
                <span>&rarr;</span>
            </a>
        </div>
    `;

    const image = card.querySelector("img");

    image.addEventListener("error", () => {
        image.style.display = "none";
    });

    teamsContainer.appendChild(card);
});
