
const clubs = [
    {
        name: "Bayern Munich",
        founded: 1900,
        stadium: "Allianz Arena",
        nickname: "The Bavarians",
        location: "Munich, Germany",
        logo: "./assets/Bundesliga/bayern.webp",
        history: "Bayern Munich is one of Germany's most successful football clubs. The club is known for its domestic dominance, passionate supporters and achievements in European football."
    },
    {
        name: "Borussia Dortmund",
        founded: 1909,
        stadium: "Signal Iduna Park",
        nickname: "Die Schwarzgelben",
        location: "Dortmund, Germany",
        logo: "./assets/Bundesliga/dortmund.webp",
        history: "Borussia Dortmund is famous for its passionate Yellow Wall supporters and exciting attacking football. The club has won major German honours and the UEFA Champions League."
    },
    {
        name: "SC Freiburg",
        founded: 1904,
        stadium: "Europa-Park Stadion",
        nickname: "Breisgau-Brasilianer",
        location: "Freiburg, Germany",
        logo: "./assets/Bundesliga/freiburg.jpg",
        history: "SC Freiburg is known for its strong team spirit, organised football and focus on developing young players. The club has established itself as a respected Bundesliga side."
    },
    {
        name: "Bayer Leverkusen",
        founded: 1904,
        stadium: "BayArena",
        nickname: "Die Werkself",
        location: "Leverkusen, Germany",
        logo: "./assets/Bundesliga/leverkusen.jpg",
        history: "Bayer Leverkusen is known for its modern football style and competitive performances in Germany and Europe. The club won its first Bundesliga title in the 2023–24 season."
    },
    {
        name: "Mainz 05",
        founded: 1905,
        stadium: "MEWA ARENA",
        nickname: "Die Nullfünfer",
        location: "Mainz, Germany",
        logo: "./assets/Bundesliga/mainz.webp",
        history: "Mainz 05 has built a reputation for energetic football and developing talented players. The club has competed in the Bundesliga and appeared in European competitions."
    },
    {
        name: "SV Elversberg",
        founded: 1907,
        stadium: "URSAPHARM-Arena",
        nickname: "Die Elv",
        location: "Spiesen-Elversberg, Germany",
        logo: "./assets/Bundesliga/elversberg.jpg",
        history: "SV Elversberg rose through the German football divisions through steady progress and strong team performances. The club reached the Bundesliga for the 2026–27 season."
    },
    {
        name: "RB Leipzig",
        founded: 2009,
        stadium: "Red Bull Arena",
        nickname: "Die Roten Bullen",
        location: "Leipzig, Germany",
        logo: "./assets/Bundesliga/leipzig.jpg",
        history: "RB Leipzig climbed rapidly through the German football system. The club is known for its high-intensity playing style and has become a regular competitor in domestic and European football."
    },
    {
        name: "Werder Bremen",
        founded: 1899,
        stadium: "Weserstadion",
        nickname: "Die Werderaner",
        location: "Bremen, Germany",
        logo: "./assets/Bundesliga/bremen.jpg",
        history: "Werder Bremen is a historic German club with a long tradition of league and cup football. Its supporters and Weserstadion are important parts of the club's identity."
    },
    {
        name: "Hamburger SV",
        founded: 1887,
        stadium: "Volksparkstadion",
        nickname: "Die Rothosen",
        location: "Hamburg, Germany",
        logo: "./assets/Bundesliga/hamburg.jpg",
        history: "Hamburger SV is one of Germany's historic football clubs. The club has won major domestic honours and the European Cup, and returned to the Bundesliga for 2025–26."
    },
    {
        name: "FC Augsburg",
        founded: 1907,
        stadium: "WWK ARENA",
        nickname: "Fuggerstädter",
        location: "Augsburg, Germany",
        logo: "./assets/Bundesliga/augsburg.jpeg",
        history: "FC Augsburg represents the Bavarian city of Augsburg. The club earned promotion to the Bundesliga in 2011 and has worked to establish itself in Germany's top division."
    },
    {
        name: "Eintracht Frankfurt",
        founded: 1899,
        stadium: "Deutsche Bank Park",
        nickname: "Die Adler",
        location: "Frankfurt, Germany",
        logo: "./assets/Bundesliga/frankfurt.jpg",
        history: "Eintracht Frankfurt is known for its passionate fan base and strong European history. The club has won major German honours and the UEFA Europa League in 2022."
    },
    {
        name: "1. FC Köln",
        founded: 1948,
        stadium: "RheinEnergieSTADION",
        nickname: "Die Geißböcke",
        location: "Cologne, Germany",
        logo: "./assets/Bundesliga/Koln.jpg",
        history: "1. FC Köln is a traditional German club with a strong local following. The club won the Bundesliga in its early years and is known for its dedicated supporters."
    },
    {
        name: "TSG Hoffenheim",
        founded: 1899,
        stadium: "SNP Arena",
        nickname: "Die Kraichgauer",
        location: "Sinsheim, Germany",
        logo: "./assets/Bundesliga/hoffenheim.jpg",
        history: "TSG Hoffenheim rose through the German football divisions and reached the Bundesliga in 2008. The club is recognised for its modern facilities and development-focused approach."
    },
    {
        name: "VfB Stuttgart",
        founded: 1893,
        stadium: "MHPArena",
        nickname: "Die Schwaben",
        location: "Stuttgart, Germany",
        logo: "./assets/Bundesliga/stuttgart.jpg",
        history: "VfB Stuttgart is one of Germany's traditional clubs and has won multiple German league titles. The club has a proud history of developing talented German footballers."
    },
    {
        name: "Schalke 04",
        founded: 1904,
        stadium: "VELTINS-Arena",
        nickname: "Die Königsblauen",
        location: "Gelsenkirchen, Germany",
        logo: "./assets/Bundesliga/schalke.jpg",
        history: "Schalke 04 is a historic club with a large and loyal fan base. The club has won German championships and is closely associated with the football culture of the Ruhr region."
    },
    {
        name: "SC Paderborn 07",
        founded: 1907,
        stadium: "Home Deluxe Arena",
        nickname: "Die Ostwestfalen",
        location: "Paderborn, Germany",
        logo: "./assets/Bundesliga/paderborn.jpg",
        history: "SC Paderborn 07 has experienced several promotions and relegations in German football. The club returned to the Bundesliga for the 2026–27 season."
    },
    {
        name: "Union Berlin",
        founded: 1966,
        stadium: "An der Alten Försterei",
        nickname: "Die Eisernen",
        location: "Berlin, Germany",
        logo: "./assets/Bundesliga/union-berlin.jpg",
        history: "Union Berlin is celebrated for its community spirit and passionate supporters. The club reached the Bundesliga in 2019 and later qualified for European competition."
    },
    {
        name: "Borussia Mönchengladbach",
        founded: 1900,
        stadium: "BORUSSIA-PARK",
        nickname: "Die Fohlen",
        location: "Mönchengladbach, Germany",
        logo: "./assets/Bundesliga/gladbach.jpg",
        history: "Borussia Mönchengladbach enjoyed a golden era in the 1970s, winning multiple German league titles and European honours. The club remains an important name in German football."
    }
];

const bundesGrid = document.getElementById("bundesGrid");
const clubSearch = document.getElementById("clubSearch");
const clubCount = document.getElementById("clubCount");
const noResults = document.getElementById("noResults");

const clubModal = document.getElementById("clubModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalBackBtn = document.getElementById("modalBackBtn");

const modalLogo = document.getElementById("modalLogo");
const modalClubName = document.getElementById("modalClubName");
const modalLocation = document.getElementById("modalLocation");
const modalFounded = document.getElementById("modalFounded");
const modalStadium = document.getElementById("modalStadium");
const modalNickname = document.getElementById("modalNickname");
const modalHistory = document.getElementById("modalHistory");

// DISPLAY CLUB CARDS

function displayClubs(clubList) {
    bundesGrid.innerHTML = "";

    clubCount.textContent = `${clubList.length} Clubs`;

    noResults.style.display =
        clubList.length === 0 ? "block" : "none";

    clubList.forEach((club) => {
        const originalIndex = clubs.indexOf(club);

        const card = document.createElement("article");
        card.className = "bundes-card";

        card.innerHTML = `
            <span class="club-number">
                ${(originalIndex + 1).toString().padStart(2, "0")}
            </span>

            <div class="club-logo-wrap">
                <img
                    src="${club.logo}"
                    alt="${club.name} logo"
                    loading="lazy"
                >
            </div>

            <span class="club-country">GERMANY</span>

            <h3>${club.name}</h3>

            <p class="club-meta">
                <i class="fa-regular fa-calendar"></i>
                Founded ${club.founded}
            </p>

            <p class="club-meta club-stadium">
                <i class="fa-solid fa-location-dot"></i>
                ${club.stadium}
            </p>

            <button class="view-details-btn" type="button"
                    data-club-index="${originalIndex}">
                View Details
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;

        bundesGrid.appendChild(card);
    });
}

// OPEN CLUB DETAILS

function showClubDetails(club) {
    modalLogo.src = club.logo;
    modalLogo.alt = `${club.name} logo`;

    modalClubName.textContent = club.name;
    modalLocation.textContent = club.location;
    modalFounded.textContent = club.founded;
    modalStadium.textContent = club.stadium;
    modalNickname.textContent = club.nickname;
    modalHistory.textContent = club.history;

    clubModal.classList.add("active");
    clubModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    modalClose.focus();
}

// CLOSE CLUB DETAILS

function closeClubDetails() {
    clubModal.classList.remove("active");
    clubModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

// SEARCH CLUBS

clubSearch.addEventListener("input", function () {
    const searchText = this.value.trim().toLowerCase();

    const filteredClubs = clubs.filter((club) => {
        return (
            club.name.toLowerCase().includes(searchText) ||
            club.stadium.toLowerCase().includes(searchText) ||
            club.location.toLowerCase().includes(searchText)
        );
    });

    displayClubs(filteredClubs);
});

// VIEW DETAILS BUTTON

bundesGrid.addEventListener("click", function (event) {
    const button = event.target.closest(".view-details-btn");

    if (!button) {
        return;
    }

    const index = Number(button.dataset.clubIndex);
    showClubDetails(clubs[index]);
});

// CLOSE BUTTONS

modalClose.addEventListener("click", closeClubDetails);
modalBackBtn.addEventListener("click", closeClubDetails);
modalOverlay.addEventListener("click", closeClubDetails);

// CLOSE WITH ESCAPE KEY

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && clubModal.classList.contains("active")) {
        closeClubDetails();
    }
});

// INITIAL DISPLAY

displayClubs(clubs);
