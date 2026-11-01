// WORLD CUP TEAM DATA

const worldCupTeams = [
    {
        name: "Argentina",
        image: "./assets/WorldCup/argentina.jpg",
        logo: "./assets/WorldCup/argentina-logo.png",
        titles: 3,
        bestResult: "Champions",
        firstTitle: "1978",
        confederation: "CONMEBOL",
        nickname: "La Albiceleste",
        description:"Argentina are one of international football's most successful teams. Their World Cup triumphs came in 1978, 1986 and 2022, with legendary players shaping their history."
    },

    {
        name: "Brazil",
        image: "./assets/WorldCup/brazil.jpg",
        logo: "./assets/WorldCup/brazil-logo.png",
        titles: 5,
        bestResult: "Champions",
        firstTitle: "1958",
        confederation: "CONMEBOL",
        nickname: "Seleção",
        description:
            "Brazil are the most successful men's FIFA World Cup team by title count, winning five championships. Their football history is known for creativity, attacking quality and legendary players."
    },

    {
        name: "France",
        image: "./assets/WorldCup/france.avif",
        logo: "./assets/WorldCup/france-logo.png",
        titles: 2,
        bestResult: "Champions",
        firstTitle: "1998",
        confederation: "UEFA",
        nickname: "Les Bleus",
        description:
            "France won their first World Cup on home soil in 1998 and lifted the trophy again in 2018. They have also reached several other major international finals."
    },

    {
        name: "Germany",
        image: "./assets/WorldCup/germany.jpg",
        logo: "./assets/WorldCup/germany-logo.png",
        titles: 4,
        bestResult: "Champions",
        firstTitle: "1954",
        confederation: "UEFA",
        nickname: "Die Mannschaft",
        description:
            "Germany have won four men's World Cup titles. Famous for their competitive spirit and tournament consistency, they have been a major force in international football."
    },

    {
        name: "Italy",
        image: "./assets/WorldCup/italy.webp",
        logo: "./assets/WorldCup/italy-logo.png",
        titles: 4,
        bestResult: "Champions",
        firstTitle: "1934",
        confederation: "UEFA",
        nickname: "Azzurri",
        description:
            "Italy have won four World Cup titles, with championships in 1934, 1938, 1982 and 2006. Their football tradition is particularly associated with tactical organisation and defensive strength."
    },

    {
        name: "Spain",
        image: "./assets/WorldCup/spain.jpg",
        logo: "./assets/WorldCup/spain-logo.png",
        titles: 2,
        bestResult: "Champions",
        firstTitle: "2010",
        confederation: "UEFA",
        nickname: "La Roja",
        description:
            "Spain won their first men's World Cup in 2010 with a celebrated possession-based style. They added another championship in 2026, further strengthening their international record."
    },

    {
        name: "Uruguay",
        image: "./assets/WorldCup/uruguay.jpg",
        logo: "./assets/WorldCup/uruguay-logo.png",
        titles: 2,
        bestResult: "Champions",
        firstTitle: "1930",
        confederation: "CONMEBOL",
        nickname: "La Celeste",
        description:
            "Uruguay won the inaugural men's FIFA World Cup in 1930 and claimed another title in 1950. Despite their relatively small population, they have a rich football heritage."
    },

    {
        name: "England",
        image: "./assets/WorldCup/england.webp",
        logo: "./assets/WorldCup/england-logo.png",
        titles: 1,
        bestResult: "Champions",
        firstTitle: "1966",
        confederation: "UEFA",
        nickname: "The Three Lions",
        description:
            "England won their only men's World Cup title in 1966 as hosts. The national team remains one of the most followed teams in international football."
    },

    {
        name: "Portugal",
        image: "./assets/WorldCup/portugal.png",
        logo: "./assets/WorldCup/portugal-logo.png",
        titles: 0,
        bestResult: "Third Place",
        firstTitle: "Not won",
        confederation: "UEFA",
        nickname: "A Seleção",
        description:
            "Portugal have produced many outstanding international players. Their best men's World Cup finish was third place in 1966, during their debut tournament."
    },

    {
        name: "Netherlands",
        image: "./assets/WorldCup/netherlands.avif",
        logo: "./assets/WorldCup/netherlands-logo.png",
        titles: 0,
        bestResult: "Runners-up",
        firstTitle: "Not won",
        confederation: "UEFA",
        nickname: "Oranje",
        description:
            "The Netherlands are famous for their influential football philosophy and attacking play. They reached the men's World Cup final in 1974, 1978 and 2010 but have never won the title."
    },

    {
        name: "Croatia",
        image: "./assets/WorldCup/croatia.jpg",
        logo: "./assets/WorldCup/croatia-logo.png",
        titles: 0,
        bestResult: "Runners-up",
        firstTitle: "Not won",
        confederation: "UEFA",
        nickname: "Vatreni",
        description:
            "Croatia emerged as a major international force after independence. Their best men's World Cup finish was second place in 2018, followed by a third-place finish in 2022."
    },

    {
        name: "Morocco",
        image: "./assets/WorldCup/morocco.webp",
        logo: "./assets/WorldCup/morocco-logo.png",
        titles: 0,
        bestResult: "Semi-final",
        firstTitle: "Not won",
        confederation: "CAF",
        nickname: "Atlas Lions",
        description:
            "Morocco made history at the 2022 World Cup by becoming the first African team to reach the men's tournament semi-finals. Their achievement inspired football fans across Africa and beyond."
    }
];


// HTML ELEMENTS

const teamGrid = document.getElementById("teamGrid");
const teamCount = document.getElementById("teamCount");
const teamSearch = document.getElementById("teamSearch");
const noResults = document.getElementById("noResults");

const teamsSection = document.getElementById("teamsSection");
const teamDetails = document.getElementById("teamDetails");
const detailsContent = document.getElementById("detailsContent");
const backTeamsBtn = document.getElementById("backTeamsBtn");


// DISPLAY TEAM CARDS

function displayTeams(teams) {

    teamGrid.innerHTML = "";

    teamCount.textContent = `${teams.length} National Teams`;

    noResults.style.display = teams.length === 0 ? "block" : "none";

    teams.forEach((team) => {

        const card = document.createElement("article");

        card.className = "fifa-team-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `View ${team.name} details`);

        card.innerHTML = `
            <img src="${team.image}" alt="${team.name} national team">

            <div class="fifa-card-overlay">

                <span class="card-tag">
                    ${team.titles > 0
                        ? `${team.titles} WORLD CUP TITLES`
                        : "WORLD CUP TEAM"}
                </span>

                <h3>${team.name}</h3>

                <p>
                    ${team.bestResult}
                    <span> | </span>
                    ${team.confederation}
                </p>

                <div class="card-view-details">
                    <span>View Details</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>

            </div>
        `;

        card.addEventListener("click", () => {
            showTeamDetails(team);
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                showTeamDetails(team);
            }
        });

        teamGrid.appendChild(card);
    });
}


// SHOW SELECTED TEAM DETAILS

function showTeamDetails(team) {

    teamsSection.style.display = "none";
    teamDetails.classList.add("active");

    detailsContent.innerHTML = `

        <div class="details-banner">

            <img src="${team.image}" alt="${team.name} national team">

            <div class="details-banner-content">

                <p class="details-kicker">
                    FIFA WORLD CUP NATIONAL TEAM
                </p>

                <h2>${team.name}</h2>

                <p>
                    ${team.description}
                </p>

            </div>

        </div>


        <div class="team-logo-section">
    <img src="${team.logo}"
         alt="${team.name} logo"
         class="team-national-logo">
</div>


        <div class="details-info-grid">

            <div class="info-card">
                <i class="fa-solid fa-trophy"></i>
                <h3>World Cup Titles</h3>
                <p>${team.titles}</p>
            </div>

            <div class="info-card">
                <i class="fa-solid fa-medal"></i>
                <h3>Best World Cup Result</h3>
                <p>${team.bestResult}</p>
            </div>

            <div class="info-card">
                <i class="fa-solid fa-calendar-days"></i>
                <h3>First Title</h3>
                <p>${team.firstTitle}</p>
            </div>

            <div class="info-card">
                <i class="fa-solid fa-earth-americas"></i>
                <h3>Confederation</h3>
                <p>${team.confederation}</p>
            </div>

            <div class="info-card">
                <i class="fa-solid fa-flag"></i>
                <h3>Team Nickname</h3>
                <p>${team.nickname}</p>
            </div>

            <div class="info-card">
                <i class="fa-solid fa-futbol"></i>
                <h3>Competition</h3>
                <p>FIFA World Cup</p>
            </div>

        </div>


        <div class="team-history">

            <h3>Team <span>History</span></h3>

            <p>${team.description}</p>

        </div>

    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// BACK TO WORLD CUP TEAMS

backTeamsBtn.addEventListener("click", () => {

    teamDetails.classList.remove("active");
    teamsSection.style.display = "block";

    window.scrollTo({
        top: teamsSection.offsetTop - 20,
        behavior: "smooth"
    });
});


// SEARCH TEAMS

teamSearch.addEventListener("input", () => {

    const searchText = teamSearch.value.toLowerCase().trim();

    const filteredTeams = worldCupTeams.filter((team) => {
        return (
            team.name.toLowerCase().includes(searchText) ||
            team.confederation.toLowerCase().includes(searchText)
        );
    });

    displayTeams(filteredTeams);
});


// INITIAL DISPLAY

displayTeams(worldCupTeams);