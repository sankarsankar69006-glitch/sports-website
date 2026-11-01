console.log("PlayZone JavaScript loaded");
const serieATeams = [
    {
        name: "Atalanta",
        city: "Bergamo",
        founded: 1907,
        slug: "atalanta",
        logo: "./assets/Serie-A/atalanta.jpg"
    },
    {
        name: "Bologna",
        city: "Bologna",
        founded: 1909,
        slug: "bologna",
        logo: "./assets/Serie-A/bologna.jpg"
    },
    {
        name: "Cagliari",
        city: "Cagliari",
        founded: 1920,
        slug: "cagliari",
        logo: "./assets/Serie-A/cagliari.jpg"
    },
    {
        name: "Como",
        city: "Como",
        founded: 1907,
        slug: "como",
        logo: "./assets/Serie-A/como.jpg"
    },
    {
        name: "Fiorentina",
        city: "Florence",
        founded: 1926,
        slug: "fiorentina",
        logo: "./assets/Serie-A/fiorentina.jpg"
    },
    {
        name: "Frosinone",
        city: "Frosinone",
        founded: 1912,
        slug: "frosinone",
        logo: "./assets/Serie-A/frosinone.jpg"
    },
    {
        name: "Genoa",
        city: "Genoa",
        founded: 1893,
        slug: "genoa",
        logo: "./assets/Serie-A/genoa.jpg"
    },
    {
        name: "Inter Milan",
        city: "Milan",
        founded: 1908,
        slug: "inter-milan",
        logo: "./assets/Serie-A/inter-milan.jpg"
    },
    {
        name: "Juventus",
        city: "Turin",
        founded: 1897,
        slug: "juventus",
        logo: "./assets/Serie-A/juventus.jpg"
    },
    {
        name: "Lazio",
        city: "Rome",
        founded: 1900,
        slug: "lazio",
        logo: "./assets/Serie-A/lazio.jpg"
    },
    {
        name: "Lecce",
        city: "Lecce",
        founded: 1908,
        slug: "lecce",
        logo: "./assets/Serie-A/lecce.jpg"
    },
    {
        name: "AC Milan",
        city: "Milan",
        founded: 1899,
        slug: "ac-milan",
        logo: "./assets/Serie-A/ac-milan.jpg"
    },
    {
        name: "Monza",
        city: "Monza",
        founded: 1912,
        slug: "monza",
        logo: "./assets/Serie-A/monza.jpg"
    },
    {
        name: "Napoli",
        city: "Naples",
        founded: 1926,
        slug: "napoli",
        logo: "./assets/Serie-A/napoli.jpg"
    },
    {
        name: "Parma",
        city: "Parma",
        founded: 1913,
        slug: "parma",
        logo: "./assets/Serie-A/parma.jpg"
    },
    {
        name: "AS Roma",
        city: "Rome",
        founded: 1927,
        slug: "as-roma",
        logo: "./assets/Serie-A/as-roma.jpg"
    },
    {
        name: "Sassuolo",
        city: "Sassuolo",
        founded: 1920,
        slug: "sassuolo",
        logo: "./assets/Serie-A/sassuolo.jpg"
    },
    {
        name: "Torino",
        city: "Turin",
        founded: 1906,
        slug: "torino",
        logo: "./assets/Serie-A/torino.jpg"
    },
    {
        name: "Udinese",
        city: "Udine",
        founded: 1896,
        slug: "udinese",
        logo: "./assets/Serie-A/udinese.jpg"
    },
    {
        name: "Venezia",
        city: "Venice",
        founded: 1907,
        slug: "venezia",
        logo: "./assets/Serie-A/venezia.jpg"
    }
];

const serieGrid = document.getElementById("serieGrid");
const teamSearch = document.getElementById("teamSearch");
const clubCount = document.getElementById("clubCount");
const noClubs = document.getElementById("noClubs");

function displayTeams(teams) {

    if (!serieGrid || !clubCount || !noClubs) {
        return;
    }

    serieGrid.innerHTML = "";

    teams.forEach((team, index) => {

        const card = document.createElement("article");
        card.className = "serie-card";

        card.innerHTML = `
            <div class="serie-card-top">
                <span class="serie-card-number">
                    CLUB ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="serie-card-label">SERIE A</span>
            </div>

            <div class="serie-logo-area">
                <img
                    src="${team.logo}"
                    alt="${team.name} logo"
                    loading="lazy"
                >
            </div>

            <div class="serie-card-info">
                <h3>${team.name}</h3>

                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    ${team.city}, Italy
                </p>

                <span class="serie-founded">
                    Founded ${team.founded}
                </span>

                <a class="serie-card-link" href="./club-details.html?team=${team.slug}&from=serie-a">
                    View Club Details
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `;

        const logo = card.querySelector("img");

        logo.addEventListener("error", () => {
            logo.style.display = "none";

            const logoArea = card.querySelector(".serie-logo-area");
            logoArea.innerHTML = `
                <span style="
                    color:#48E5A1;
                    font-size:13px;
                    text-align:center;
                ">
                    Add club logo
                </span>
            `;
        });

        serieGrid.appendChild(card);
    });

    clubCount.textContent = `${teams.length} CLUBS`;

    noClubs.style.display =
        teams.length === 0 ? "block" : "none";
}

/* Serie A page code - run only when Serie A elements exist */

if (serieGrid && teamSearch && clubCount && noClubs) {

    teamSearch.addEventListener("input", () => {

        const searchText = teamSearch.value
            .trim()
            .toLowerCase();

        const filteredTeams = serieATeams.filter(team =>
            team.name.toLowerCase().includes(searchText) ||
            team.city.toLowerCase().includes(searchText)
        );

        displayTeams(filteredTeams);
    });

    displayTeams(serieATeams);
}





