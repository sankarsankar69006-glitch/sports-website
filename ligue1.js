
const clubs = [
    {
        name: "Paris Saint-Germain",
        city: "Paris, France",
        founded: 1970,
        stadium: "Parc des Princes",
        nickname: "Les Parisiens",
        image: "./assets/Ligue1/psg.jpg",
        history: "Paris Saint-Germain (PSG) was founded in 1970 and has grown into one of the most successful clubs in French football. The club won its first Ligue 1 title in 1986 and has dominated French football with numerous league championships. PSG continues to build its legacy through star players and major domestic and European achievements."
    },
    {
        name: "Olympique de Marseille",
        city: "Marseille, France",
        founded: 1899,
        stadium: "Stade Vélodrome",
        nickname: "Les Phocéens",
        image: "./assets/Ligue1/marseille.jpg",
        history: "Olympique de Marseille was founded in 1899 and is one of the most historic football clubs in France. The club has won multiple Ligue 1 titles and claimed the UEFA Champions League in 1993, becoming the first French club to win the competition. Marseille is famous for its passionate supporters and the iconic Stade Vélodrome."
    },
    {
        name: "AS Monaco",
        city: "Monaco",
        founded: 1924,
        stadium: "Stade Louis II",
        nickname: "Les Monégasques",
        image: "./assets/Ligue1/monaco.jpg",
        history: "AS Monaco was founded in 1924 and is one of the most successful clubs in French football. The club has won multiple Ligue 1 titles, including a memorable championship in the 2016–17 season. Monaco is also known for developing talented young players and competing in European competitions. Explain why Monaco is distinctiveMake this club description more engaging."
    },
    {
        name: "Olympique Lyonnais",
        city: "Lyon, France",
        founded: 1950,
        stadium: "Groupama Stadium",
        nickname: "Les Gones",
        image: "./assets/Ligue1/lyon.jpg",
        history: "Olympique Lyonnais, commonly known as Lyon, was founded in 1950 and became one of France’s leading football clubs. The club achieved remarkable success by winning seven consecutive Ligue 1 titles from 2002 to 2008. Lyon is also renowned for developing talented players and competing regularly in European competitions."
    },
    {
        name: "Lille OSC",
        city: "Lille, France",
        founded: 1944,
        stadium: "Decathlon Arena",
        nickname: "Les Dogues",
        image: "./assets/Ligue1/lille.jpg",
        history: "Lille OSC, founded in 1944, is one of the well-known football clubs in France. The club has won multiple Ligue 1 titles, including a memorable championship in the 2020–21 season. Lille is also recognised for developing talented young players and competing strongly against France’s top clubs."
    },
    {
        name: "OGC Nice",
        city: "Nice, France",
        founded: 1904,
        stadium: "Allianz Riviera",
        nickname: "Les Aiglons",
        image: "./assets/Ligue1/nice.jpg",
        history: "OGC Nice was founded in 1904 and is one of the historic football clubs in France. The club has won multiple French league titles, with much of its early success coming in the 1950s. OGC Nice continues to compete in Ligue 1 and is known for its passionate supporters and home stadium, Allianz Riviera."
    },
    {
        name: "RC Lens",
        city: "Lens, France",
        founded: 1906,
        stadium: "Stade Bollaert-Delelis",
        nickname: "Les Sang et Or",
        image: "./assets/Ligue1/lens.jpg",
        history: "RC Lens was founded in 1906 and is a historic football club based in Lens, France. The club won its first Ligue 1 title in the 1997–98 season and is known for its passionate supporters and strong community spirit. RC Lens plays its home matches at Stade Bollaert-Delelis and continues to compete in French football."
    },
    {
        name: "Stade Rennais",
        city: "Rennes, France",
        founded: 1901,
        stadium: "Roazhon Park",
        nickname: "Les Rouge et Noir",
        image: "./assets/Ligue1/rennes.jpg",
        history: "Stade Rennais FC was founded in 1901 and is a well-known football club based in Rennes, France. The club has won several domestic trophies, including the Coupe de France, and is recognized for developing talented young players. Stade Rennais competes in Ligue 1 and plays its home matches at Roazhon Park."
    },
    {
        name: "RC Strasbourg Alsace",
        city: "Strasbourg, France",
        founded: 1906,
        stadium: "Stade de la Meinau",
        nickname: "Le Racing",
        image: "./assets/Ligue1/strasbourg.jpg",
        history: "RC Strasbourg Alsace was founded in 1906 and is a historic football club based in Strasbourg, France. The club has won several domestic honours, including the Ligue 1 title in the 1978–79 season and multiple Coupe de France trophies. RC Strasbourg plays its home matches at Stade de la Meinau and is known for its passionate supporters."
    },
    {
        name: "Toulouse FC",
        city: "Toulouse, France",
        founded: 1970,
        stadium: "Stadium de Toulouse",
        nickname: "Les Violets",
        image: "./assets/Ligue1/toulouse.jpg",
        history: "Toulouse FC was founded in 1970 and is a professional football club based in Toulouse, France. The club won the Coupe de France in the 2022–23 season, earning a major trophy in its history. Toulouse FC plays its home matches at Stadium de Toulouse and competes in French professional football."
    },
    {
        name: "Stade Brestois 29",
        city: "Brest, France",
        founded: 1950,
        stadium: "Stade Francis-Le Blé",
        nickname: "Les Pirates",
        image: "./assets/Ligue1/brest.jpg",
        history: "Stade Brestois 29 was founded in 1950 and is a professional football club based in Brest, France. The club achieved a historic milestone by qualifying for the UEFA Champions League for the first time in the 2024–25 season. Stade Brestois plays its home matches at Stade Francis-Le Blé and is known for its passionate supporters."
    },
    {
        name: "FC Nantes",
        city: "Nantes, France",
        founded: 1943,
        stadium: "Stade de la Beaujoire",
        nickname: "Les Canaris",
        image: "./assets/Ligue1/nantes.jpg",
        history: "FC Nantes was founded in 1943 and is a historic football club based in Nantes, France. The club has won multiple Ligue 1 titles and Coupe de France trophies, earning recognition for its attractive playing style and strong youth development. FC Nantes plays its home matches at Stade de la Beaujoire and has a passionate fan base."
    },
    {
        name: "AJ Auxerre",
        city: "Auxerre, France",
        founded: 1905,
        stadium: "Stade de l'Abbé-Deschamps",
        nickname: "AJA",
        image: "./assets/Ligue1/auxerre.jpg",
        history: "AJ Auxerre was founded in 1905 and is a historic football club based in Auxerre, France. The club won the Ligue 1 title in the 1995–96 season and has also lifted the Coupe de France several times. AJ Auxerre plays its home matches at Stade de l’Abbé-Deschamps and is known for its strong youth development tradition."
    },
    {
        name: "Angers SCO",
        city: "Angers, France",
        founded: 1919,
        stadium: "Stade Raymond-Kopa",
        nickname: "Les Scoïstes",
        image: "./assets/Ligue1/angers.jpg",
        history: "Angers SCO was founded in 1919 and is a professional football club based in Angers, France. The club won the Ligue 2 title in the 2023–24 season, securing promotion back to Ligue 1. Angers SCO plays its home matches at Stade Raymond Kopa and is known for its dedicated supporters and competitive spirit."
    },
    {
        name: "Le Havre AC",
        city: "Le Havre, France",
        founded: 1872,
        stadium: "Stade Océane",
        nickname: "Le Club Doyen",
        image: "./assets/Ligue1/lehavre.jpg",
        history: "Le Havre AC was founded in 1872 and is one of the oldest football clubs in France. The club has won Ligue 2 titles and is well known for developing talented young players through its youth academy. Le Havre AC plays its home matches at Stade Océane and competes in French professional football."
    },
    {
        name: "FC Metz",
        city: "Metz, France",
        founded: 1932,
        stadium: "Stade Saint-Symphorien",
        nickname: "Les Grenats",
        image: "./assets/Ligue1/metz.webp",
        history: "FC Metz was founded in 1932 and is a professional football club based in Metz, France. The club has won multiple Ligue 2 titles and the Coupe de la Ligue, building a strong reputation in French football. FC Metz plays its home matches at Stade Saint-Symphorien and is known for its loyal supporters and commitment to developing young talent."
    },
    {
        name: "FC Lorient",
        city: "Lorient, France",
        founded: 1926,
        stadium: "Stade du Moustoir",
        nickname: "Les Merlus",
        image: "./assets/Ligue1/lorient.jpg",
        history: "FC Lorient was founded in 1926 and is a professional football club based in Lorient, France. The club won the Coupe de France in the 2001–02 season, earning its first major national trophy. FC Lorient plays its home matches at Stade du Moustoir and is known for its passionate supporters and competitive spirit."
    },
    {
        name: "Paris FC",
        city: "Paris, France",
        founded: 1969,
        stadium: "Stade Jean-Bouin",
        nickname: "PFC",
        image: "./assets/Ligue1/parisfc.jpg",
    history: "Paris FC was founded in 1969 and is a professional football club based in Paris, France. The club has spent much of its history competing in the lower divisions of French football and has worked to establish itself among the country's top teams. Paris FC plays its home matches at Stade Jean-Bouin and represents the French capital in professional football."
    }
];

const grid = document.getElementById("ligueGrid");
const searchInput = document.getElementById("clubSearch");
const clubCount = document.getElementById("clubCount");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("clubModal");
const modalLogo = document.getElementById("modalLogo");
const modalClubName = document.getElementById("modalClubName");
const modalLocation = document.getElementById("modalLocation");
const modalFounded = document.getElementById("modalFounded");
const modalStadium = document.getElementById("modalStadium");
const modalNickname = document.getElementById("modalNickname");
const modalHistory = document.getElementById("modalHistory");

function displayClubs(list) {
    grid.innerHTML = "";

    list.forEach((club, index) => {
        const card = document.createElement("article");
        card.className = "ligue-card";

        card.innerHTML = `
            <div class="card-image">
                <img src="${club.image}"
                     alt="${club.name}"
                     loading="lazy">
            </div>

            <div class="card-body">
                <span class="club-country">FRENCH FOOTBALL</span>

                <h3>${club.name}</h3>

                <div class="club-meta">
                    <i class="fa-regular fa-calendar"></i>
                    Founded ${club.founded}
                </div>

                <button class="view-details-btn" type="button">
                    View Details
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;

        card.querySelector(".view-details-btn").addEventListener("click", () => {
            showClubDetails(club);
        });

        grid.appendChild(card);
    });

    clubCount.textContent = `${list.length} Clubs`;
    noResults.style.display = list.length === 0 ? "block" : "none";
}

function showClubDetails(club) {
    modalLogo.src = club.image;
    modalLogo.alt = club.name;
    modalClubName.textContent = club.name;
    modalLocation.textContent = club.city;
    modalFounded.textContent = club.founded;
    modalStadium.textContent = club.stadium;
    modalNickname.textContent = club.nickname;
    modalHistory.textContent = club.history;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeClubDetails() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredClubs = clubs.filter(club =>
        club.name.toLowerCase().includes(searchText)
    );

    displayClubs(filteredClubs);
});

document.getElementById("modalClose")
    .addEventListener("click", closeClubDetails);

document.getElementById("modalBackBtn")
    .addEventListener("click", closeClubDetails);

document.getElementById("modalOverlay")
    .addEventListener("click", closeClubDetails);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeClubDetails();
    }
});

displayClubs(clubs);
