
/* ==============================
   PLAYZONE FEATURED TEAMS
============================== */

const teams = [

    // EUROPEAN CHAMPIONS

    {
        name: "Real Madrid",
        region: "Spain",
        league: "LaLiga",
        founded: 1902,
        titles: 15,
        achievement: "UEFA Champions League titles",
        image: "./assets/Teams/real-madrid.webp",
        
        featured: "EUROPEAN GIANTS",
        searchNames: "real madrid los blancos"
    },

    {
        name: "AC Milan",
        region: "Italy",
        league: "Serie A",
        founded: 1899,
        titles: 7,
        achievement: "European Cup / Champions League titles",
        image: "./assets/Teams/ac-milan.avif",
        
        featured: "EUROPEAN GIANTS",
        searchNames: "ac milan milan rossoneri"
    },

    {
        name: "Liverpool",
        region: "England",
        league: "Premier League",
        founded: 1892,
        titles: 6,
        achievement: "European Cup / Champions League titles",
        image: "./assets/Teams/bayern-munich.jpg",
        
        featured: "EUROPEAN GIANTS",
        searchNames: "liverpool lfc"
    },

    {
        name: "Bayern Munich",
        region: "Germany",
        league: "Bundesliga",
        founded: 1900,
        titles: 6,
        achievement: "European Cup / Champions League titles",
        image: "./assets/Teams/bayern-munich.jpg",
        
        featured: "GERMAN GIANTS",
        searchNames: "bayern munich bayern"
    },

    {
        name: "Barcelona",
        region: "Spain",
        league: "LaLiga",
        founded: 1899,
        titles: 5,
        achievement: "UEFA Champions League titles",
        image: "./assets/Teams/barcelona.jpg",
        
        featured: "SPANISH GIANTS",
        searchNames: "barcelona fc barcelona barca"
    },

    {
        name: "Ajax",
        region: "Other",
        league: "Eredivisie",
        founded: 1900,
        titles: 4,
        achievement: "European Cup / Champions League titles",
        image: "./assets/Teams/ajax.webp",
        
        featured: "DUTCH LEGENDS",
        searchNames: "ajax amsterdam"
    },

    {
        name: "Manchester United",
        region: "England",
        league: "Premier League",
        founded: 1878,
        titles: 3,
        achievement: "UEFA Champions League titles",
        image: "./assets/Teams/manchester-united.jpg",
        
        featured: "ENGLISH GIANTS",
        searchNames: "manchester united man united man utd mufc"
    },

    {
        name: "Inter Milan",
        region: "Italy",
        league: "Serie A",
        founded: 1908,
        titles: 3,
        achievement: "UEFA Champions League titles",
        image: "./assets/Teams/inter-milan.webp",
        featured: "ITALIAN GIANTS",
        searchNames: "inter milan internazionale"
    },

    {
        name: "Chelsea",
        region: "England",
        league: "Premier League",
        founded: 1905,
        titles: 2,
        achievement: "UEFA Champions League titles",
        image: "./assets/Teams/chelsea.webp",
        
        featured: "ENGLISH GIANTS",
        searchNames: "chelsea chelsea fc"
    },

    {
        name: "Juventus",
        region: "Italy",
        league: "Serie A",
        founded: 1897,
        titles: 2,
        achievement: "European Cup / Champions League titles",
        image: "./assets/Teams/juventus.webp",
        
        featured: "ITALIAN GIANTS",
        searchNames: "juventus juve"
    },

    {
        name: "Nottingham Forest",
        region: "England",
        league: "Premier League",
        founded: 1865,
        titles: 2,
        achievement: "European Cup titles",
        image: "./assets/Teams/nottingham-forest.jpg",
        
        featured: "EUROPEAN LEGENDS",
        searchNames: "nottingham forest"
    },

    {
        name: "Manchester City",
        region: "England",
        league: "Premier League",
        founded: 1880,
        titles: 1,
        achievement: "UEFA Champions League title",
        image: "./assets/Teams/manchester-city.webp",
        
        featured: "ENGLISH GIANTS",
        searchNames: "manchester city man city mcfc"
    },

    {
        name: "Paris Saint-Germain",
        region: "France",
        league: "Ligue 1",
        founded: 1970,
        titles: 1,
        achievement: "UEFA Champions League title",
        image: "./assets/Teams/psg.webp",
        
        featured: "FRENCH GIANTS",
        searchNames: "paris saint germain psg paris"
    },

    // OTHER WORLD FOOTBALL GIANTS

    {
        name: "Boca Juniors",
        region: "Other",
        league: "Argentine Primera División",
        founded: 1905,
        titles: 6,
        achievement: "Copa Libertadores titles",
        image: "./assets/Teams/boca-juniors.jpg",
        featured: "SOUTH AMERICAN LEGENDS",
        searchNames: "boca juniors boca"
    },

    {
        name: "River Plate",
        region: "Other",
        league: "Argentine Primera División",
        founded: 1901,
        titles: 4,
        achievement: "Copa Libertadores titles",
        image: "./assets/Teams/river-plate.webp",
        featured: "SOUTH AMERICAN LEGENDS",
        searchNames: "river plate river"
    },

    // INDIAN FOOTBALL

    {
        name: "Mohun Bagan Super Giant",
        region: "India",
        league: "Indian Football",
        founded: 1889,
        titles: 7,
        achievement: "ISL Cup titles",
        image: "./assets/Teams/mohun-bagan.webp",
        featured: "INDIAN LEGENDS",
        searchNames: "mohun bagan mohun bagan super giant"
    },

    {
        name: "East Bengal",
        region: "India",
        league: "Indian Football",
        founded: 1920,
        titles: 4,
        achievement: "ISL Cup titles",
        image: "./assets/Teams/east-bengal.webp",
        featured: "INDIAN LEGENDS",
        searchNames: "east bengal east bengal fc"
    },

    {
        name: "Chennaiyin FC",
        region: "India",
        league: "Indian Super League",
        founded: 2014,
        titles: 2,
        achievement: "ISL Cup titles",
        image: "./assets/Teams/chennaiyin.webp",
        featured: "INDIAN CHAMPIONS",
        searchNames: "chennaiyin chennaiyin fc"
    },


];


// HTML ELEMENTS

const teamGrid = document.getElementById("teamGrid");
const teamSearch = document.getElementById("teamSearch");
const teamCount = document.getElementById("teamCount");
const teamFilters = document.getElementById("teamFilters");
const noResults = document.getElementById("noResults");
const resetFilters = document.getElementById("resetFilters");

let selectedRegion = "All";


// CREATE TEAM CARD

function createTeamCard(team, index) {

    const card = document.createElement("article");

    card.className = "team-card";

    const background = document.createElement("div");
    background.className = "team-card-bg";

    background.style.backgroundImage =
        `linear-gradient(180deg, #122129, #071218)`;

    // Load the team background image.
    const backgroundImage = new Image();

    backgroundImage.onload = function () {
        background.style.backgroundImage =
            `url("${team.image}")`;
    };

    backgroundImage.onerror = function () {
        background.style.backgroundImage =
            "linear-gradient(135deg, #18362E, #071218)";
    };

    backgroundImage.src = team.image;

    const shade = document.createElement("div");
    shade.className = "team-card-shade";

    const rank = document.createElement("div");
    rank.className = "team-rank";

    rank.innerHTML =
        `<i class="fa-solid fa-trophy"></i> ${team.featured}`;

    const logo = document.createElement("img");

    logo.className = "team-logo";
    logo.src = team.logo;
    logo.alt = `${team.name} logo`;
    logo.loading = "lazy";

    // Hide unavailable logo files without breaking the card.
    logo.onerror = function () {
        this.style.display = "none";
    };

    const content = document.createElement("div");
    content.className = "team-card-content";

    const region = document.createElement("div");
    region.className = "team-region";
    region.textContent = `${team.region} / ${team.league}`;

    const name = document.createElement("h3");
    name.textContent = team.name;

    const meta = document.createElement("div");
    meta.className = "team-meta";

    const founded = document.createElement("span");
    founded.textContent = `Founded ${team.founded}`;

    const dot = document.createElement("span");
    dot.className = "meta-dot";

    const league = document.createElement("span");
    league.textContent = team.league;

    meta.append(founded, dot, league);

    const trophy = document.createElement("div");
    trophy.className = "team-trophy";

    const trophyIcon = document.createElement("i");
    trophyIcon.className = "fa-solid fa-trophy";

    const trophyText = document.createElement("div");
    trophyText.className = "trophy-text";

    const trophyNumber = document.createElement("strong");
    const trophyDescription = document.createElement("small");

    if (team.titles === null) {
        trophyNumber.textContent = "Historic Club";
        trophyDescription.textContent = team.achievement;
    } else {
        trophyNumber.textContent =
            `${team.titles} ${team.titles === 1 ? "Titles" : "Titles"}`;

        trophyDescription.textContent = team.achievement;
    }

    trophyText.append(trophyNumber, trophyDescription);
    trophy.append(trophyIcon, trophyText);

    const explore = document.createElement("a");
    explore.className = "explore-club";

    explore.href =
    `./club-details.html?team=${encodeURIComponent(team.name)}&source=featured`;

    explore.innerHTML =
        `Explore Club <i class="fa-solid fa-arrow-right"></i>`;

    content.append(region, name, meta, trophy, explore);

    card.append(background, shade, rank, logo, content);

    return card;
}


// DISPLAY TEAMS

function displayTeams() {

    const searchValue = teamSearch.value
        .trim()
        .toLowerCase();

    const filteredTeams = teams.filter(function (team) {

        const matchesRegion =
            selectedRegion === "All" ||
            (
                selectedRegion === "Other"
                    ? team.region === "Other"
                    : team.region === selectedRegion
            );

        const searchableText =
            `${team.name} ${team.league} ${team.region} ${team.searchNames}`
                .toLowerCase();

        const matchesSearch =
            searchableText.includes(searchValue);

        return matchesRegion && matchesSearch;
    });

    teamGrid.replaceChildren();

    filteredTeams.forEach(function (team, index) {
        teamGrid.appendChild(createTeamCard(team, index));
    });

    teamCount.textContent = filteredTeams.length;

    noResults.hidden = filteredTeams.length !== 0;

    teamGrid.hidden = filteredTeams.length === 0;
}


// REGION FILTERS

teamFilters.addEventListener("click", function (event) {

    const button = event.target.closest(".filter-btn");

    if (!button) {
        return;
    }

    selectedRegion = button.dataset.region;

    document.querySelectorAll(".filter-btn").forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    displayTeams();
});


// SEARCH

teamSearch.addEventListener("input", displayTeams);


// RESET FILTERS

resetFilters.addEventListener("click", function () {

    selectedRegion = "All";
    teamSearch.value = "";

    document.querySelectorAll(".filter-btn").forEach(function (btn) {
        btn.classList.toggle(
            "active",
            btn.dataset.region === "All"
        );
    });

    displayTeams();
});


// INITIAL DISPLAY

displayTeams();

console.log("PlayZone Featured Teams loaded successfully!");


// FEATURED TEAMS BACK BUTTON

(function () {
    const featuredParams =
        new URLSearchParams(window.location.search);

    const featuredBackButton =
        document.getElementById("backLink");

    if (featuredBackButton && featuredParams.get("source") === "featured") {
        featuredBackButton.href = "./team.html";
        featuredBackButton.textContent = "← Back to Featured Teams";
    }
})();
