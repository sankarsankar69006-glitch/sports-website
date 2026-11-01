
/* ==============================
   PLAYZONE PLAYERS DATA
============================== */

const players = [
    {
        id: "pele",
        name: "Pelé",
        country: "Brazil",
        position: "Forward",
        category: "legend",
        careerStart: 1956,
        careerEnd: 1977,
        club: "Santos FC",
        clubs: "Santos FC, New York Cosmos",
        image: "./assets/Players/pele.jpg",
        achievements: [
            "3 FIFA World Cup titles",
            "Santos legend",
            "One of football's greatest icons"
        ],
        bio: "Pelé helped transform football into a global spectacle. His goalscoring ability and performances for Brazil made him one of the most celebrated players in the sport's history."
    },
    {
        id: "maradona",
        name: "Diego Maradona",
        country: "Argentina",
        position: "Attacking Midfielder",
        category: "legend",
        careerStart: 1976,
        careerEnd: 1997,
        club: "Napoli (famous spell)",
        clubs: "Argentinos Juniors, Boca Juniors, Barcelona, Napoli and others",
        image: "./assets/Players/maradona.jpg",
        achievements: [
            "1986 FIFA World Cup winner",
            "Napoli icon",
            "One of Argentina's greatest players"
        ],
        bio: "Diego Maradona was renowned for his extraordinary dribbling, creativity and vision. His performances at the 1986 World Cup became a defining chapter in football history."
    },
    {
        id: "zidane",
        name: "Zinedine Zidane",
        country: "France",
        position: "Midfielder",
        category: "legend",
        careerStart: 1989,
        careerEnd: 2006,
        club: "Retired",
        clubs: "Bordeaux, Juventus, Real Madrid",
        image: "./assets/Players/zidane.jpg",
        achievements: [
            "1998 FIFA World Cup winner",
            "UEFA Euro 2000 winner",
            "2002 UEFA Champions League winner"
        ],
        bio: "Zinedine Zidane was admired for his control, elegance, passing and ability to perform on the biggest stages. He enjoyed major success with France, Juventus and Real Madrid."
    },
    {
        id: "ronaldinho",
        name: "Ronaldinho",
        country: "Brazil",
        position: "Attacking Midfielder",
        category: "legend",
        careerStart: 1998,
        careerEnd: 2015,
        club: "Retired",
        clubs: "PSG, Barcelona, AC Milan and others",
        image: "./assets/Players/ronaldinho.jpg",
        achievements: [
            "2002 FIFA World Cup winner",
            "2005 Ballon d'Or",
            "2006 UEFA Champions League winner"
        ],
        bio: "Ronaldinho brought flair, creativity and joy to football. His exceptional dribbling and inventive skills made him a fan favourite around the world."
    },
    {
        id: "ronaldo-nazario",
        name: "Ronaldo Nazário",
        country: "Brazil",
        position: "Striker",
        category: "legend",
        careerStart: 1993,
        careerEnd: 2011,
        club: "Retired",
        clubs: "Barcelona, Inter Milan, Real Madrid, AC Milan and others",
        image: "./assets/Players/ronaldo-nazario.jpg",
        achievements: [
            "2 FIFA World Cup titles",
            "2 Ballon d'Or awards",
            "2002 FIFA World Cup Golden Boot"
        ],
        bio: "Known as R9 or O Fenômeno, Ronaldo Nazário combined acceleration, close control and clinical finishing. He was one of the most feared strikers of his generation."
    },
    {
        id: "messi",
        name: "Lionel Messi",
        country: "Argentina",
        position: "Forward",
        category: "current",
        careerStart: 2004,
        careerEnd: null,
        club: "Inter Miami",
        clubs: "Barcelona, Paris Saint-Germain, Inter Miami",
        image: "./assets/Players/messi.webp",
        achievements: [
            "2022 FIFA World Cup winner",
            "Multiple Ballon d'Or awards",
            "UEFA Champions League winner"
        ],
        bio: "Lionel Messi is celebrated for his dribbling, vision, playmaking and scoring. He led Argentina to the 2022 FIFA World Cup title and enjoyed a historic career at Barcelona."
    },
    {
        id: "cristiano-ronaldo",
        name: "Cristiano Ronaldo",
        country: "Portugal",
        position: "Forward",
        category: "current",
        careerStart: 2002,
        careerEnd: null,
        club: "Al Nassr",
        clubs: "Sporting CP, Manchester United, Real Madrid, Juventus, Al Nassr",
        image: "./assets/Players/cristiano-ronaldo.webp",
        achievements: [
            "UEFA Euro 2016 winner",
            "Multiple Ballon d'Or awards",
            "Multiple UEFA Champions League titles"
        ],
        bio: "Cristiano Ronaldo is known for his athleticism, finishing, aerial ability and longevity. His career includes major honours in England, Spain, Italy and international football."
    },
    {
        id: "neymar",
        name: "Neymar Jr.",
        country: "Brazil",
        position: "Forward",
        category: "current",
        careerStart: 2009,
        careerEnd: null,
        club: "Santos FC",
        clubs: "Santos FC, Barcelona, Paris Saint-Germain, Al Hilal",
        image: "./assets/Players/neymar.webp",
        achievements: [
            "2015 UEFA Champions League winner",
            "2013 FIFA Confederations Cup winner",
            "2016 Olympic gold medal"
        ],
        bio: "Neymar is known for his close control, creativity and one-on-one dribbling. He has starred for Brazilian and European clubs and represented Brazil at major international tournaments."
    },
    {
        id: "mbappe",
        name: "Kylian Mbappé",
        country: "France",
        position: "Forward",
        category: "current",
        careerStart: 2015,
        careerEnd: null,
        club: "Real Madrid",
        clubs: "Monaco, Paris Saint-Germain, Real Madrid",
        image: "./assets/Players/mbappe.jpg",
        achievements: [
            "2018 FIFA World Cup winner",
            "2022 FIFA World Cup Golden Boot",
            "Multiple domestic league titles"
        ],
        bio: "Kylian Mbappé is renowned for his speed, movement and finishing. He became a world champion with France in 2018 and is among the leading stars of his generation."
    },
    {
        id: "haaland",
        name: "Erling Haaland",
        country: "Norway",
        position: "Striker",
        category: "current",
        careerStart: 2016,
        careerEnd: null,
        club: "Manchester City",
        clubs: "Molde, Red Bull Salzburg, Borussia Dortmund, Manchester City",
        image: "./assets/Players/haaland.jpg",
        achievements: [
            "2022–23 UEFA Champions League winner",
            "Premier League records",
            "Elite goalscoring performances"
        ],
        bio: "Erling Haaland is known for his power, movement and exceptional goalscoring rate. He has become one of the most prominent strikers in modern football."
    },
    {
        id: "salah",
        name: "Mohamed Salah",
        country: "Egypt",
        position: "Forward",
        category: "current",
        careerStart: 2010,
        careerEnd: null,
        club: "Liverpool",
        clubs: "Basel, Chelsea, Fiorentina, Roma, Liverpool",
        image: "./assets/Players/salah.jpg",
        achievements: [
            "2019 UEFA Champions League winner",
            "Premier League champion",
            "Multiple Premier League Golden Boots"
        ],
        bio: "Mohamed Salah is known for his pace, left-footed finishing and attacking movement. He has been one of Liverpool's most influential forwards in the modern era."
    },
    {
        id: "sunil-chhetri",
        name: "Sunil Chhetri",
        country: "India",
        position: "Forward",
        category: "current",
        careerStart: 2002,
        careerEnd: null,
        club: "Bengaluru FC",
        clubs: "Mohun Bagan, Bengaluru FC and other clubs",
        image: "./assets/Players/sunil-chhetri.jpg",
        achievements: [
            "India's leading international goalscorer",
            "Multiple SAFF Championship titles",
            "Long-serving India captain"
        ],
        bio: "Sunil Chhetri is one of Indian football's most influential players. His leadership, consistency and goalscoring have made him a central figure in the national team's history."
    },


    
{
    id: "buffon",
    name: "Gianluigi Buffon",
    country: "Italy",
    position: "Goalkeeper",
    category: "legend",
    careerStart: 1995,
    careerEnd: 2023,
    club: "Retired",
    clubs: "Parma, Juventus, PSG",
    image: "./assets/Players/buffon.jpg",
    achievements: [
        "2006 FIFA World Cup winner",
        "2006 UEFA Club Footballer of the Year",
        "Multiple Serie A titles"
    ],
    bio: "Gianluigi Buffon is one of football's greatest goalkeepers, celebrated for his reflexes, leadership and remarkable longevity."
},
{
    id: "casillas",
    name: "Iker Casillas",
    country: "Spain",
    position: "Goalkeeper",
    category: "legend",
    careerStart: 1999,
    careerEnd: 2020,
    club: "Retired",
    clubs: "Real Madrid, Porto",
    image: "./assets/Players/casillas.jpg",
    achievements: [
        "2010 FIFA World Cup winner",
        "UEFA Euro 2008 and 2012 winner",
        "Multiple UEFA Champions League titles"
    ],
    bio: "Iker Casillas was renowned for his quick reflexes and big-match saves. He captained Spain during its golden era."
},
{
    id: "neuer",
    name: "Manuel Neuer",
    country: "Germany",
    position: "Goalkeeper",
    category: "current",
    careerStart: 2006,
    careerEnd: null,
    club: "Bayern Munich",
    clubs: "Schalke 04, Bayern Munich",
    image: "./assets/Players/neuer.jpg",
    achievements: [
        "2014 FIFA World Cup winner",
        "2013 and 2020 UEFA Champions League winner",
        "Multiple German league titles"
    ],
    bio: "Manuel Neuer helped redefine goalkeeping with his sweeping style, distribution and outstanding shot-stopping."
},
{
    id: "iniesta",
    name: "Andrés Iniesta",
    country: "Spain",
    position: "Midfielder",
    category: "legend",
    careerStart: 2002,
    careerEnd: 2024,
    club: "Retired",
    clubs: "Barcelona, Vissel Kobe, Emirates Club",
    image: "./assets/Players/iniesta.jpg",
    achievements: [
        "2010 FIFA World Cup winner",
        "UEFA Euro 2008 and 2012 winner",
        "Multiple UEFA Champions League titles"
    ],
    bio: "Andrés Iniesta was celebrated for his close control, intelligent movement and composure. He scored Spain's winning goal in the 2010 World Cup final."
},
{
    id: "xavi",
    name: "Xavi Hernández",
    country: "Spain",
    position: "Midfielder",
    category: "legend",
    careerStart: 1998,
    careerEnd: 2019,
    club: "Retired",
    clubs: "Barcelona, Al Sadd",
    image: "./assets/Players/xavi.avif",
    achievements: [
        "2010 FIFA World Cup winner",
        "UEFA Euro 2008 and 2012 winner",
        "Multiple UEFA Champions League titles"
    ],
    bio: "Xavi Hernández mastered passing, positioning and possession-based football. He played a central role in Barcelona and Spain's most successful eras."
},
{
    id: "modric",
    name: "Luka Modrić",
    country: "Croatia",
    position: "Midfielder",
    category: "current",
    careerStart: 2003,
    careerEnd: null,
    club: "AC Milan",
    clubs: "Dinamo Zagreb, Tottenham Hotspur, Real Madrid, AC Milan",
    image: "./assets/Players/modric.jpg",
    achievements: [
        "2018 Ballon d'Or winner",
        "2018 FIFA World Cup finalist",
        "Multiple UEFA Champions League titles"
    ],
    bio: "Luka Modrić is known for his vision, passing range and control of midfield. He helped Croatia reach the 2018 World Cup final."
},
{
    id: "de-bruyne",
    name: "Kevin De Bruyne",
    country: "Belgium",
    position: "Midfielder",
    category: "current",
    careerStart: 2008,
    careerEnd: null,
    club: "Napoli",
    clubs: "Genk, Chelsea, Wolfsburg, Manchester City, Napoli",
    image: "./assets/Players/de-bruyne.jpg",
    achievements: [
        "2022–23 UEFA Champions League winner",
        "Multiple Premier League titles",
        "Renowned playmaker and assist provider"
    ],
    bio: "Kevin De Bruyne is one of modern football's leading playmakers, recognised for his passing, crossing and ability to create scoring opportunities."
},
{
    id: "maldini",
    name: "Paolo Maldini",
    country: "Italy",
    position: "Defender",
    category: "legend",
    careerStart: 1985,
    careerEnd: 2009,
    club: "Retired",
    clubs: "AC Milan",
    image: "./assets/Players/maldini.jpg",
    achievements: [
        "5 European Cup / UEFA Champions League titles",
        "7 Serie A titles",
        "Italy international legend"
    ],
    bio: "Paolo Maldini spent his entire senior club career at AC Milan. His positioning, tackling and leadership made him one of football's most respected defenders."
},
{
    id: "ramos",
    name: "Sergio Ramos",
    country: "Spain",
    position: "Defender",
    category: "current",
    careerStart: 2004,
    careerEnd: null,
    club: "Formerly Monterrey",
    clubs: "Sevilla, Real Madrid, PSG, Monterrey",
    image: "./assets/Players/ramos.jpg",
    achievements: [
        "2010 FIFA World Cup winner",
        "UEFA Euro 2008 and 2012 winner",
        "Multiple UEFA Champions League titles"
    ],
    bio: "Sergio Ramos is known for his defensive aggression, aerial ability and leadership. He was a key part of Spain's World Cup-winning team."
},
{
    id: "van-dijk",
    name: "Virgil van Dijk",
    country: "Netherlands",
    position: "Defender",
    category: "current",
    careerStart: 2011,
    careerEnd: null,
    club: "Liverpool",
    clubs: "Celtic, Southampton, Liverpool",
    image: "./assets/Players/van-dijk.avif",
    achievements: [
        "2019 UEFA Champions League winner",
        "Premier League champion",
        "2019 UEFA Men's Player of the Year"
    ],
    bio: "Virgil van Dijk is admired for his positioning, aerial strength and calm leadership at centre-back."
},
{
    id: "roberto-carlos",
    name: "Roberto Carlos",
    country: "Brazil",
    position: "Defender",
    category: "legend",
    careerStart: 1991,
    careerEnd: 2015,
    club: "Retired",
    clubs: "Inter Milan, Real Madrid, Fenerbahçe and others",
    image: "./assets/Players/roberto-carlos.jpg",
    achievements: [
        "2002 FIFA World Cup winner",
        "1998 FIFA World Cup finalist",
        "3 UEFA Champions League titles"
    ],
    bio: "Roberto Carlos was an explosive attacking left-back, famous for his speed, powerful free kicks and contributions to Brazil and Real Madrid."
}


];


/* ==============================
   CAREER DURATION
============================== */

function getCareerDuration(player) {
    const endYear = player.careerEnd || 2026;
    return endYear - player.careerStart;
}

function getCareerEndLabel(player) {
    return player.careerEnd || "Present";
}


/* ==============================
   PLAYER CARDS
============================== */

const playersGrid = document.getElementById("playersGrid");

if (playersGrid) {
    const searchInput = document.getElementById("playerSearch");
    const sortSelect = document.getElementById("playerSort");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const playerCount = document.getElementById("playerCount");
    const noPlayers = document.getElementById("noPlayers");

    let activeFilter = "all";

    function displayPlayers() {
        const searchText = searchInput.value.trim().toLowerCase();

        let filteredPlayers = players.filter(player => {
            const matchesSearch = [
                player.name,
                player.country,
                player.position,
                player.club,
                player.clubs
            ].join(" ").toLowerCase().includes(searchText);

           const matchesFilter =
    activeFilter === "all" ||
    player.category === activeFilter ||
    (activeFilter === "forward" &&
        ["Forward", "Striker"].includes(player.position)) ||
    (activeFilter === "midfielder" &&
        player.position.toLowerCase().includes("midfielder")) ||
    (activeFilter === "goalkeeper" &&
        player.position === "Goalkeeper") ||
    (activeFilter === "defender" &&
        player.position === "Defender");

    return matchesSearch && matchesFilter;
});

        const sortValue = sortSelect.value;

        if (sortValue === "oldest") {
            filteredPlayers.sort((a, b) => a.careerStart - b.careerStart);
        } else if (sortValue === "newest") {
            filteredPlayers.sort((a, b) => b.careerStart - a.careerStart);
        } else if (sortValue === "az") {
            filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
        }

        playerCount.textContent = `${filteredPlayers.length} Players`;
        noPlayers.hidden = filteredPlayers.length !== 0;

        playersGrid.innerHTML = filteredPlayers.map(player => `
            <article
                class="player-card"
                tabindex="0"
                role="link"
                aria-label="View ${player.name} details"
                data-player="${player.id}"
            >
                <div class="player-image-wrap">
                    <img
                        class="player-image"
                        src="${player.image}"
                        alt="${player.name}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='https://placehold.co/500x600/0B171D/48E5A1?text=Player+Photo';"
                    >

                    <span class="player-era">
                        ${player.category === "legend" ? "LEGEND" : "CURRENT STAR"}
                    </span>
                </div>

                <div class="player-info">
                    <p class="player-country">${player.country}</p>

                    <h3 class="player-name">${player.name}</h3>

                    <p class="player-position">${player.position}</p>

                    <p class="player-club">
                        Team: ${player.club}
                    </p>

                    <div class="player-career">
                        <span>Career</span>
                        <strong>
                            ${player.careerStart} – ${getCareerEndLabel(player)}
                        </strong>
                    </div>

                    <div class="player-career">
                        <span>Career length</span>
                        <strong>${getCareerDuration(player)} years</strong>
                    </div>

                    <span class="player-view">View Player Details →</span>
                </div>
            </article>
        `).join("");

        document.querySelectorAll(".player-card").forEach(card => {
            function openPlayer() {
                window.location.href =
                    `./player-details.html?player=${encodeURIComponent(card.dataset.player)}`;
            }

            card.addEventListener("click", openPlayer);

            card.addEventListener("keydown", event => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openPlayer();
                }
            });
        });
    }

    searchInput.addEventListener("input", displayPlayers);
    sortSelect.addEventListener("change", displayPlayers);

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(item => item.classList.remove("active"));
            button.classList.add("active");

            activeFilter = button.dataset.filter;
            displayPlayers();
        });
    });

    displayPlayers();
}


/* ==============================
   PLAYER DETAILS PAGE
============================== */

const playerDetails = document.getElementById("playerDetails");

if (playerDetails) {
    const params = new URLSearchParams(window.location.search);
    const playerId = params.get("player");
    const player = players.find(item => item.id === playerId);

    if (!player) {
        playerDetails.innerHTML = `
            <div class="details-not-found">
                <h2>Player Not Found</h2>
                <p>Please select a player from the Players page.</p>
                <a href="./players.html" class="details-back">← All Players</a>
            </div>
        `;
    } else {
        document.title = `${player.name} | PlayZone`;

        const careerEnd = getCareerEndLabel(player);
        const duration = getCareerDuration(player);

        playerDetails.innerHTML = `
            <section class="player-profile">
                <div class="profile-image-wrap">
                    <img
                        class="profile-image"
                        src="${player.image}"
                        alt="${player.name}"
                        onerror="this.onerror=null;this.src='https://placehold.co/500x650/0B171D/48E5A1?text=Player+Photo';"
                    >
                </div>

                <div class="profile-content">
                    <p class="section-label">PLAYER PROFILE</p>

                    <h1>${player.name}</h1>

                    <p class="profile-subtitle">
                        ${player.country} · ${player.position}
                    </p>

                    <div class="profile-status">
                        ${player.careerEnd ? "RETIRED LEGEND" : "PROFESSIONAL CAREER"}
                    </div>

                    <p class="profile-bio">${player.bio}</p>

                    <div class="profile-stats">
                        <div>
                            <span>Country</span>
                            <strong>${player.country}</strong>
                        </div>

                        <div>
                            <span>Position</span>
                            <strong>${player.position}</strong>
                        </div>

                        <div>
                            <span>Current / Final Team</span>
                            <strong>${player.club}</strong>
                        </div>

                        <div>
                            <span>Career Started</span>
                            <strong>${player.careerStart}</strong>
                        </div>

                        <div>
                            <span>Career Ended</span>
                            <strong>${careerEnd}</strong>
                        </div>

                        <div>
                            <span>Career Duration</span>
                            <strong>${duration} years</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section class="profile-section">
                <p class="section-label">THE JOURNEY</p>
                <h2>Career <span>Timeline</span></h2>

                <div class="career-timeline">
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div>
                            <h3>${player.careerStart} — Career Begins</h3>
                            <p>
                                The beginning of ${player.name}'s senior
                                professional football career.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div>
                            <h3>${player.careerStart} – ${careerEnd}</h3>
                            <p>
                                Clubs: ${player.clubs}
                            </p>
                            <p>
                                Total professional career span:
                                ${duration} years.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div>
                            <h3>${player.careerEnd ? "Retirement" : "Career Status"}</h3>
                            <p>
                                ${player.careerEnd
                                    ? `Retired from professional football in ${player.careerEnd}.`
                                    : "Listed as an active player. Career duration is calculated through 2026."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="profile-section">
                <p class="section-label">CAREER HIGHLIGHTS</p>
                <h2>Major <span>Achievements</span></h2>

                <div class="achievement-grid">
                    ${player.achievements.map(achievement => `
                        <div class="achievement-card">
                            <span class="achievement-icon">✦</span>
                            <p>${achievement}</p>
                        </div>
                    `).join("")}
                </div>
            </section>

            <div class="details-footer-link">
                <a href="./players.html" class="details-back">
                    ← Back to All Players
                </a>
            </div>
        `;
    }
}

/* ==============================
   MOBILE NAVBAR MENU
============================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}