
const mlsClubs = [
    // EASTERN CONFERENCE
    {
        name: "Atlanta United FC",
        image: "./assets/MLS/atlanta-united.jpg",
        short: "ATL",
        city: "Atlanta, Georgia",
        founded: 2014,
        conference: "Eastern",
        description: "Atlanta United joined MLS in 2017 and quickly built a passionate football culture. The club won the MLS Cup in its second season."
    },
    {
        name: "Charlotte FC",
        image: "./assets/MLS/Charlotte-FC.jpg",
        short: "CLT",
        city: "Charlotte, North Carolina",
        founded: 2019,
        conference: "Eastern",
        description: "Charlotte FC began MLS competition in 2022. The club represents North Carolina and plays its home matches at Bank of America Stadium."
    },
    {
        name: "Chicago Fire FC",
        image: "./assets/MLS/Chicago-Fire-FC.jpg",
        short: "CHI",
        city: "Chicago, Illinois",
        founded: 1997,
        conference: "Eastern",
        description: "Chicago Fire was founded in 1997 and won the MLS Cup in its inaugural season. The club has a notable history in American soccer."
    },
    {
        name: "FC Cincinnati",
        image: "./assets/MLS/FC-Cincinnati.jpg",
        short: "FCC",
        city: "Cincinnati, Ohio",
        founded: 2015,
        conference: "Eastern",
        description: "FC Cincinnati began in the lower divisions before joining MLS in 2019. The club has developed a strong local following."
    },
    {
        name: "Columbus Crew",
        image: "./assets/MLS/Columbus-Crew.jpg",
        short: "CLB",
        city: "Columbus, Ohio",
        founded: 1994,
        conference: "Eastern",
        description: "The Columbus Crew is one of MLS's original clubs. It has won multiple MLS Cups and is known for its dedicated supporters."
    },
    {
        name: "D.C. United",
        image: "./assets/MLS/United.jpg",
        short: "DCU",
        city: "Washington, D.C.",
        founded: 1994,
        conference: "Eastern",
        description: "D.C. United is one of the founding clubs of MLS. The team enjoyed major success in the league's early years, including multiple MLS Cup titles."
    },
    {
        name: "Inter Miami CF",
        image: "./assets/MLS/Inter-Miami-CF.jpg",
        short: "MIA",
        city: "Fort Lauderdale, Florida",
        founded: 2018,
        conference: "Eastern",
        description: "Inter Miami began MLS play in 2020. The club gained global attention with high-profile international players and won the 2023 Leagues Cup."
    },
    {
        name: "CF Montréal",
        image: "./assets/MLS/CF-Montreal.jpg",
        short: "MTL",
        city: "Montreal, Quebec",
        founded: 1992,
        conference: "Eastern",
        description: "CF Montréal has represented Quebec in professional soccer for decades. The club joined MLS in 2012 and has competed in domestic and continental tournaments."
    },
    {
        name: "Nashville SC",
        image: "./assets/MLS/Nashville-SC.jpg",
        short: "NSH",
        city: "Nashville, Tennessee",
        founded: 2016,
        conference: "Eastern",
        description: "Nashville SC entered MLS in 2020. The club is known for its enthusiastic supporters and its home atmosphere at GEODIS Park."
    },
    {
        name: "New England Revolution",
        image: "./assets/MLS/New-England-Revolution.jpg",
        short: "NE",
        city: "Foxborough, Massachusetts",
        founded: 1994,
        conference: "Eastern",
        description: "The New England Revolution is an original MLS club. The team has reached several MLS Cup finals and won the 2021 Supporters' Shield."
    },
    {
        name: "New York City FC",
        image: "./assets/MLS/New-York-City-FC.jpg",
        short: "NYC",
        city: "New York City, New York",
        founded: 2013,
        conference: "Eastern",
        description: "New York City FC joined MLS in 2015 and won its first MLS Cup in 2021. The club represents New York City on the national football stage."
    },
    {
        name: "New York Red Bulls",
        image: "./assets/MLS/New-York-Red-Bulls.jpg",
        short: "RBNY",
        city: "Harrison, New Jersey",
        founded: 1994,
        conference: "Eastern",
        description: "The New York Red Bulls are one of MLS's original clubs. They have regularly competed in the league playoffs and won the Supporters' Shield multiple times."
    },
    {
        name: "Orlando City SC",
        image: "./assets/MLS/Orlando-City-SC.jpg",
        short: "ORL",
        city: "Orlando, Florida",
        founded: 2010,
        conference: "Eastern",
        description: "Orlando City joined MLS in 2015 after building its identity in lower-division football. The club plays at Inter&Co Stadium."
    },
    {
        name: "Philadelphia Union",
        image: "./assets/MLS/Philadelphia-Union.jpg",
        short: "PHI",
        city: "Chester, Pennsylvania",
        founded: 2008,
        conference: "Eastern",
        description: "Philadelphia Union joined MLS in 2010. The club is known for its youth development system and won the Supporters' Shield in 2020."
    },
    {
        name: "Toronto FC",
        image: "./assets/MLS/Toronto-FC.jpg",
        short: "TOR",
        city: "Toronto, Ontario",
        founded: 2005,
        conference: "Eastern",
        description: "Toronto FC became Canada's first MLS club in 2007. The team won the MLS Cup in 2017 after completing a historic domestic treble."
    },

    // WESTERN CONFERENCE
    {
        name: "Austin FC",
        image: "./assets/MLS/Austin-FC.jpg",
        short: "ATX",
        city: "Austin, Texas",
        founded: 2018,
        conference: "Western",
        description: "Austin FC joined MLS in 2021. The club quickly developed a loyal fan base and plays its home matches at Q2 Stadium."
    },
    {
        name: "Colorado Rapids",
        image: "./assets/MLS/Colorado-Rapids.jpg",
        short: "COL",
        city: "Commerce City, Colorado",
        founded: 1995,
        conference: "Western",
        description: "The Colorado Rapids are one of MLS's original clubs. The team won its first MLS Cup in 2010 and represents the Rocky Mountain region."
    },
    {
        name: "FC Dallas",
        image: "./assets/MLS/FC-Dallas.jpg",
        short: "DAL",
        city: "Frisco, Texas",
        founded: 1995,
        conference: "Western",
        description: "FC Dallas is an original MLS club with a strong focus on youth development. The club has won domestic trophies and developed numerous professional players."
    },
    {
        name: "Houston Dynamo FC",
        image: "./assets/MLS/Houston-Dynamo-FC.jpg",
        short: "HOU",
        city: "Houston, Texas",
        founded: 2005,
        conference: "Western",
        description: "Houston Dynamo began play in 2006 and won consecutive MLS Cups in 2006 and 2007. The club is a major part of Houston's sporting culture."
    },
    {
        name: "LA Galaxy",
        image: "./assets/MLS/LA-Galaxy.jpg",
        short: "LAG",
        city: "Carson, California",
        founded: 1994,
        conference: "Western",
        description: "LA Galaxy is one of MLS's most decorated clubs, with multiple MLS Cup titles. The team has featured many famous international football stars."
    },
    {
        name: "Los Angeles FC",
        image: "./assets/MLS/Los-Angeles-FC.jpg",
        short: "LAFC",
        city: "Los Angeles, California",
        founded: 2014,
        conference: "Western",
        description: "Los Angeles FC began MLS play in 2018. The club won the MLS Cup in 2022 and has developed a major rivalry with the LA Galaxy."
    },
    {
        name: "Minnesota United FC",
        image: "./assets/MLS/Minnesota-United-FC.jpg",
        short: "MIN",
        city: "Saint Paul, Minnesota",
        founded: 2010,
        conference: "Western",
        description: "Minnesota United joined MLS in 2017. Known as the Loons, the club represents Minnesota and plays at Allianz Field."
    },
    {
        name: "Portland Timbers",
        image: "./assets/MLS/Portland-Timbers.jpg",
        short: "POR",
        city: "Portland, Oregon",
        founded: 2009,
        conference: "Western",
        description: "The Portland Timbers joined MLS in 2011 and won the MLS Cup in 2015. The club is known for its passionate supporters and distinctive match-day traditions."
    },
    {
        name: "Real Salt Lake",
        image: "./assets/MLS/Real-Salt-Lake.jpg",
        short: "RSL",
        city: "Sandy, Utah",
        founded: 2004,
        conference: "Western",
        description: "Real Salt Lake joined MLS in 2005 and won the MLS Cup in 2009. The club represents Utah and plays at America First Field."
    },
    {
        name: "San Diego FC",
        image: "./assets/MLS/San-Diego-FC.jpg",
        short: "SD",
        city: "San Diego, California",
        founded: 2023,
        conference: "Western",
        description: "San Diego FC joined MLS in 2025 as the league expanded further into Southern California. The club brings a new professional football identity to San Diego."
    },
    {
        name: "San Jose Earthquakes",
        image: "./assets/MLS/San-Jose-Earthquakes.jpg",
        short: "SJ",
        city: "San Jose, California",
        founded: 1994,
        conference: "Western",
        description: "The San Jose Earthquakes are one of MLS's original clubs. The team has won multiple MLS Cups and has a long history in Northern California."
    },
    {
        name: "Seattle Sounders FC",
        image: "./assets/MLS/Seattle-Sounders-FC.jpg",
        short: "SEA",
        city: "Seattle, Washington",
        founded: 2007,
        conference: "Western",
        description: "Seattle Sounders joined MLS in 2009 and have won multiple major trophies, including MLS Cups and the 2022 CONCACAF Champions League."
    },
    {
        name: "Sporting Kansas City",
        image: "./assets/MLS/Sporting-Kansas-City.jpg",
        short: "SKC",
        city: "Kansas City, Kansas",
        founded: 1995,
        conference: "Western",
        description: "Sporting Kansas City is an original MLS club formerly known as the Kansas City Wizards. The team has won MLS Cups and domestic trophies."
    },
    {
        name: "St. Louis CITY SC",
        image: "./assets/MLS/Louis-CITY-SC.jpg",
        short: "STL",
        city: "St. Louis, Missouri",
        founded: 2019,
        conference: "Western",
        description: "St. Louis CITY SC began MLS play in 2023. The club made an immediate impact by finishing first in the Western Conference in its inaugural regular season."
    },
    {
        name: "Vancouver Whitecaps FC",
        image: "./assets/MLS/Vancouver-Whitecaps-FC.jpg",
        short: "VAN",
        city: "Vancouver, British Columbia",
        founded: 2009,
        conference: "Western",
        description: "Vancouver Whitecaps joined MLS in 2011 and carry forward a long football tradition in British Columbia. The club competes in domestic and continental tournaments."
    }
];


const clubsGrid = document.getElementById("clubsGrid");
const clubSearch = document.getElementById("clubSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const clubCount = document.getElementById("clubCount");
const noResults = document.getElementById("noResults");

const clubModal = document.getElementById("clubModal");
const modalClose = document.getElementById("modalClose");
const modalDone = document.getElementById("modalDone");

let currentFilter = "all";


// DISPLAY CLUB CARDS
function displayClubs() {

    const searchText = clubSearch.value.toLowerCase().trim();

    const filteredClubs = mlsClubs.filter(club => {

        const matchesSearch =
            club.name.toLowerCase().includes(searchText) ||
            club.city.toLowerCase().includes(searchText);

        const matchesConference =
            currentFilter === "all" ||
            club.conference === currentFilter;

        return matchesSearch && matchesConference;
    });


    clubsGrid.innerHTML = filteredClubs.map((club, index) => {

        return `
            <article class="club-card" style="--card-glow: ${index % 2 === 0 ? "#173a31" : "#192d40"}">

                <div class="card-top">
                    <span class="conference-tag">
                        ${club.conference.toUpperCase()} CONFERENCE
                    </span>

                    <div class="club-crest">
                        ${club.short}
                    </div>
                </div>



                  <div class="club-image-box">
    <img
        src="${club.image}"
        alt="${club.name} Logo"
        class="club-logo"
    >
</div>
                <h3>${club.name}</h3>





                <p class="club-city">${club.city}</p>

                <div class="card-bottom">
                    <span class="founded">EST. ${club.founded}</span>

                    <button class="view-club" data-club="${club.short}">
                        Club Info <span>↗</span>
                    </button>
                </div>

            </article>
        `;
    }).join("");


    clubCount.textContent = `${filteredClubs.length} CLUBS`;

    noResults.style.display =
        filteredClubs.length === 0 ? "block" : "none";
}


// OPEN CLUB DETAILS
function showClubDetails(shortName) {

    const club = mlsClubs.find(item => item.short === shortName);

    if (!club) return;

    document.getElementById("modalCrest").innerHTML = `
    <img src="${club.image || './assets/MLS/default.jpg'}"
        alt="${club.name} Logo"
        class="profile-club-logo">
`;
    document.getElementById("modalName").textContent = club.name;
    document.getElementById("modalCity").textContent = club.city;

    document.getElementById("modalConference").textContent =
        club.conference;

    document.getElementById("modalLocation").textContent =
        club.city;

    document.getElementById("modalFounded").textContent =
        club.founded;

    document.getElementById("modalDescription").textContent =
        club.description;

    clubModal.classList.add("show");
    document.body.style.overflow = "hidden";
}


// CLOSE MODAL
function closeClubModal() {
    clubModal.classList.remove("show");
    document.body.style.overflow = "";
}


// SEARCH
clubSearch.addEventListener("input", displayClubs);


// CONFERENCE FILTER
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        displayClubs();
    });
});


// CLUB INFO BUTTONS
clubsGrid.addEventListener("click", event => {

    const button = event.target.closest(".view-club");

    if (!button) return;

    showClubDetails(button.dataset.club);
});


// MODAL CLOSE EVENTS
modalClose.addEventListener("click", closeClubModal);
modalDone.addEventListener("click", closeClubModal);

clubModal.addEventListener("click", event => {

    if (event.target === clubModal) {
        closeClubModal();
    }
});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeClubModal();
    }
});


// INITIAL DISPLAY
displayClubs();


