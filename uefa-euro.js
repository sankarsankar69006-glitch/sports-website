const euroTeams = [
    { name: "Germany", image: "germany.jpg", titles: 3, code: "GER", founded: 1900 },
    { name: "Spain", image: "spain.jpg", titles: 4, code: "ESP", founded: 1913 },
    { name: "Italy", image: "Italy.webp", titles: 2, code: "ITA", founded: 1898 },
    { name: "France", image: "france.avif", titles: 2, code: "FRA", founded: 1919 },
    { name: "Portugal", image: "portugal.png", titles: 1, code: "POR", founded: 1914 },
    { name: "Netherlands", image: "netherlands.avif", titles: 1, code: "NED", founded: 1889 },
    { name: "Denmark", image: "denmark.jpg", titles: 1, code: "DEN", founded: 1889 },
    { name: "Greece", image: "greece.jpg", titles: 1, code: "GRE", founded: 1926 },
    { name: "England", image: "england.webp", titles: 0, code: "ENG", founded: 1863 },
    { name: "Belgium", image: "belgium.jpg", titles: 0, code: "BEL", founded: 1895 },
    { name: "Croatia", image: "croatia.jpg", titles: 0, code: "CRO", founded: 1912 },
    { name: "Switzerland", image: "switzerland.jpg", titles: 0, code: "SUI", founded: 1895 },
    { name: "Türkiye", image: "turkey.jpg", titles: 0, code: "TUR", founded: 1923 },
    { name: "Austria", image: "austria.jpg", titles: 0, code: "AUT", founded: 1904 },
    { name: "Scotland", image: "scotland.jpg", titles: 0, code: "SCO", founded: 1873 },
    { name: "Hungary", image: "hungary.jpg", titles: 0, code: "HUN", founded: 1901 },
    { name: "Poland", image: "poland.jpg", titles: 0, code: "POL", founded: 1919 },
    { name: "Serbia", image: "serbia.jpg", titles: 0, code: "SRB", founded: 1919 },
    { name: "Slovakia", image: "slovakia.jpg", titles: 0, code: "SVK", founded: 1938 },
    { name: "Slovenia", image: "slovenia.jpg", titles: 0, code: "SVN", founded: 1920 },
    { name: "Romania", image: "romania.webp", titles: 0, code: "ROU", founded: 1909 },
    { name: "Ukraine", image: "ukraine.jpg", titles: 0, code: "UKR", founded: 1991 },
    { name: "Albania", image: "albania.jpg", titles: 0, code: "ALB", founded: 1930 },
    { name: "Czechia", image: "czechia.jpg", titles: 0, code: "CZE", founded: 1901 }
];

const teamGrid = document.getElementById("teamGrid");
const teamCount = document.getElementById("teamCount");

teamCount.textContent = euroTeams.length;

teamGrid.innerHTML = euroTeams.map((team, index) => `
    <article class="team-card">

        <div class="card-top">
            <span class="card-number">
                NATION / ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="card-tag">
                ${team.titles > 0 ? "EURO CHAMPION" : "NATIONAL TEAM"}
            </span>
        </div>

        <div class="team-flag">
    <img src="./assets/Euro/${team.image}" alt="${team.name}"></div>

        <h3 class="team-name">${team.name}</h3>

        <div class="team-meta">
            <div>
                <span>EURO TITLES</span>
                <strong>${team.titles}</strong>
            </div>

            <div>
                <span>COUNTRY CODE</span>
                <strong>${team.code}</strong>
            </div>
        </div>

        <button
            class="view-details"
            onclick="openEuroDetails('${team.code}')">
            View Details <span>↗</span>
        </button>

    </article>
`).join("");

function openEuroDetails(code) {
    window.location.href =
        `euro-details.html?team=${encodeURIComponent(code)}`;
}
