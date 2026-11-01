
const afcTeams = [
    {
        name: "Qatar", code: "QAT", flag: "🇶🇦", group: "A",
         image: "./assets/AFC/qatar.jpg",
         logo: "./assets/AFC/qatar-logo.png",
        capital: "Doha", nickname: "The Maroons", titles: 2,
        description: "Qatar hosted the 2023 AFC Asian Cup and won the tournament, successfully defending their continental title.",
        history: "Qatar won its first AFC Asian Cup in 2019 by defeating Japan in the final. The team successfully defended its title in 2023, becoming a two-time Asian champion."
    },
    {
        name: "China", code: "CHN", flag: "🇨🇳", group: "A",
        image: "./assets/AFC/China.jpg",
        logo: "./assets/AFC/China-logo.png",
        capital: "Beijing", nickname: "Team Dragon", titles: 0,
        description: "China PR has a long history in Asian football and finished as runners-up in the 1984 and 2004 Asian Cups.",
        history: "China reached the AFC Asian Cup final in 1984 and 2004. The national team has participated in several editions and continues to compete in Asian international football."
    },
    {
        name: "Tajikistan", code: "TJK", flag: "🇹🇯", group: "A",
        image: "./assets/AFC/Tajikistan.jpg",
        logo: "./assets/AFC/Tajikistan-logo.png",
        capital: "Dushanbe", nickname: "The Crowns", titles: 0,
        description: "Tajikistan made its senior AFC Asian Cup debut in Qatar 2023 and reached the quarter-finals.",
        history: "Tajikistan made its AFC Asian Cup debut in 2023. The team made an impressive run to the quarter-finals in its first appearance at the tournament."
    },
    {
        name: "Lebanon", code: "LBN", flag: "🇱🇧", group: "A",
        image: "./assets/AFC/Lebanon.jpg",
        logo: "./assets/AFC/Lebanon-logo.png",
        capital: "Beirut", nickname: "The Cedars", titles: 0,
        description: "Lebanon represents West Asia in international football and hosted the AFC Asian Cup in 2000.",
        history: "Lebanon hosted the AFC Asian Cup in 2000 and made its tournament debut that year. The national team has continued to develop its presence in Asian football."
    },

    {
        name: "Australia", code: "AUS", flag: "🇦🇺", group: "B",
        image: "./assets/AFC/Australia.jpg",
        logo: "./assets/AFC/Australia-logo.png",
        capital: "Canberra", nickname: "Socceroos", titles: 1,
        description: "Australia won its first AFC Asian Cup title in 2015 after joining the Asian Football Confederation.",
        history: "Australia joined the Asian Football Confederation in 2006 and won its first AFC Asian Cup title in 2015, defeating South Korea in the final."
    },
    {
        name: "Uzbekistan", code: "UZB", flag: "🇺🇿", group: "B",
        image: "./assets/AFC/Uzbekistan.jpg",
        logo: "./assets/AFC/Uzbekistan-logo.png",
        capital: "Tashkent", nickname: "White Wolves", titles: 0,
        description: "Uzbekistan is a regular Asian Cup contender and reached the semi-finals in 2011.",
        history: "Since gaining independence, Uzbekistan has become a regular participant in the AFC Asian Cup. The team reached the semi-finals in 2011, its best result at the tournament."
    },
    {
        name: "Syria", code: "SYR", flag: "🇸🇾", group: "B",
        image: "./assets/AFC/Syria.jpg",
        logo: "./assets/AFC/Syria-logo.png",
        capital: "Damascus", nickname: "The Qasioun Eagles", titles: 0,
        description: "Syria has competed across several Asian Cup editions and continues to represent West Asian football.",
        history: "Syria has appeared in multiple AFC Asian Cup tournaments. The national team has continued to represent West Asian football while working to reach the competition's later stages."
    },
    {
        name: "India", code: "IND", flag: "🇮🇳", group: "B",
        image: "./assets/AFC/India.jpg",
        logo: "./assets/AFC/India-logo.png",
        capital: "New Delhi", nickname: "The Blue Tigers", titles: 0,
        description: "India were runners-up in the 1964 Asian Cup and have represented South Asia at multiple editions.",
        history: "India finished as runners-up in the 1964 AFC Asian Cup. The Blue Tigers have qualified for several editions, including the 2011, 2019 and 2023 tournaments."
    },

    {
        name: "Iran", code: "IRN", flag: "🇮🇷", group: "C",
        image: "./assets/AFC/Iran.jpg",
        logo: "./assets/AFC/Iran-logo.png",
        capital: "Tehran", nickname: "Team Melli", titles: 3,
        description: "Iran won three consecutive Asian Cup titles from 1968 to 1976 and remains one of the continent's historic powers.",
        history: "Iran won three consecutive AFC Asian Cup titles in 1968, 1972 and 1976. The team remains one of Asia's most successful national sides and has regularly reached the tournament's later stages."
    },
    {
        name: "United Arab Emirates", code: "UAE", flag: "🇦🇪", group: "C",
        image: "./assets/AFC/United-Arab-Emirates.jpg",
        logo: "./assets/AFC/United-Arab-Emirates-logo.png",
        capital: "Abu Dhabi", nickname: "The Whites", titles: 0,
        description: "The UAE finished as runners-up in 1996 and hosted the AFC Asian Cup in 2019.",
        history: "The United Arab Emirates reached the AFC Asian Cup final in 1996 and finished third in 2015. The country also hosted the tournament in 1996 and 2019."
    },
    {
        name: "Hong Kong", code: "HKG", flag: "🇭🇰", group: "C",
        image: "./assets/AFC/Hong-Kong.jpg",
        logo: "./assets/AFC/Hong-Kong-logo.png",
        capital: "Hong Kong", nickname: "The Dragons", titles: 0,
        description: "Hong Kong returned to the AFC Asian Cup in 2023, making its first appearance since 1968.",
        history: "Hong Kong first competed in the AFC Asian Cup in 1956 and finished third in its debut tournament. The team returned to the finals in 2023 after a long absence."
    },
    {
        name: "Palestine", code: "PLE", flag: "🇵🇸", group: "C",
        image: "./assets/AFC/Palestine.jpg",
        logo: "./assets/AFC/Palestine-logo.png",
        capital: "East Jerusalem", nickname: "The Lions of Canaan", titles: 0,
        description: "Palestine reached the knockout stage of the 2023 Asian Cup for the first time.",
        history: "Palestine made its AFC Asian Cup debut in 2015. The team reached the knockout stage for the first time in 2023, marking a significant achievement in its international football history."
    },

    {
        name: "Japan", code: "JPN", flag: "🇯🇵", group: "D",
        image: "./assets/AFC/Japan.jpg",
        logo: "./assets/AFC/Japan-logo.png",
        capital: "Tokyo", nickname: "Samurai Blue", titles: 4,
        description: "Japan is the most successful team in Asian Cup history, having won four championships.",
        history: "Japan won its first AFC Asian Cup in 1992 and later claimed titles in 2000, 2004 and 2011. With four championships, Japan is the most successful team in the tournament's history."
    },
    {
        name: "Indonesia", code: "IDN", flag: "🇮🇩", group: "D",
        image: "./assets/AFC/Indonesia.jpg",
        logo: "./assets/AFC/Indonesia-logo.png",
        capital: "Jakarta", nickname: "Garuda", titles: 0,
        description: "Indonesia made its first Asian Cup appearance in 1996 and reached the round of 16 in 2023.",
        history: "Indonesia first appeared in the AFC Asian Cup in 1996. The national team reached the round of 16 in 2023, recording its best performance in the competition."
    },
    {
        name: "Iraq", code: "IRQ", flag: "🇮🇶", group: "D",
        image: "./assets/AFC/Iraq.jpg",
        logo: "./assets/AFC/Iraq-logo.png",
        capital: "Baghdad", nickname: "Lions of Mesopotamia", titles: 1,
        description: "Iraq won the 2007 AFC Asian Cup, one of the most memorable triumphs in the competition's history.",
        history: "Iraq won the AFC Asian Cup in 2007, defeating Saudi Arabia in the final. The victory became a historic moment for Iraqi football and remains the team's only Asian Cup title."
    },
    {
        name: "Vietnam", code: "VIE", flag: "🇻🇳", group: "D",
        image: "./assets/AFC/Vietnam.jpg",
        logo: "./assets/AFC/Vietnam-logo.png",
        capital: "Hanoi", nickname: "The Golden Star Warriors", titles: 0,
        description: "Vietnam has developed into a competitive force in Southeast Asian football and reached the 2019 quarter-finals.",
        history: "Vietnam's football history at the Asian Cup includes quarter-final appearances in 2007 and 2019. The team has grown into a competitive force in Southeast Asian international football."
    },

    {
        name: "South Korea", code: "KOR", flag: "🇰🇷", group: "E",
        image: "./assets/AFC/South-Korea.jpg",
        logo: "./assets/AFC/South-Korea-logo.png",
        capital: "Seoul", nickname: "The Taegeuk Warriors", titles: 2,
        description: "South Korea won the first two Asian Cup editions in 1956 and 1960.",
        history: "South Korea won the first two AFC Asian Cup tournaments in 1956 and 1960. The team has reached several finals since then and remains one of Asia's historic football powers."
    },
    {
        name: "Malaysia", code: "MAS", flag: "🇲🇾", group: "E",
        image: "./assets/AFC/Malaysia.jpg",
        logo: "./assets/AFC/Malaysia-logo.png",
        capital: "Kuala Lumpur", nickname: "Harimau Malaya", titles: 0,
        description: "Malaysia represents Southeast Asia and returned to the Asian Cup finals in Qatar 2023.",
        history: "Malaysia made its AFC Asian Cup debut in 1976 and has participated in multiple editions. The national team returned to the tournament in 2023 after last appearing in 2007."
    },
    {
        name: "Jordan", code: "JOR", flag: "🇯🇴", group: "E",
        image: "./assets/AFC/Jordan.jpg",
        logo: "./assets/AFC/Jordan-logo.png",
        capital: "Amman", nickname: "Al-Nashama", titles: 0,
        description: "Jordan reached the 2023 Asian Cup final, achieving its best-ever finish in the competition.",
        history: "Jordan reached the quarter-finals in 2004 and 2011 before making history by reaching the AFC Asian Cup final in 2023. The team finished as runner-up in that edition."
    },
    {
        name: "Bahrain", code: "BHR", flag: "🇧🇭", group: "E",
        image: "./assets/AFC/Bahrain.jpg",
        logo: "./assets/AFC/Bahrain-logo.png",
        capital: "Manama", nickname: "The Reds", titles: 0,
        description: "Bahrain achieved a fourth-place finish at the 2004 Asian Cup, its best result in the tournament.",
        history: "Bahrain achieved its best AFC Asian Cup finish in 2004, placing fourth. The national team has since appeared in several editions and continues to compete in Asian football."
    },

    {
        name: "Saudi Arabia", code: "KSA", flag: "🇸🇦", group: "F",
        image: "./assets/AFC/Saudi-Arabia.jpg",
        logo: "./assets/AFC/Saudi-Arabia-logo.png",
        capital: "Riyadh", nickname: "The Green Falcons", titles: 3,
        description: "Saudi Arabia has won three Asian Cup titles, with championships in 1984, 1988 and 1996.",
        history: "Saudi Arabia won AFC Asian Cup titles in 1984, 1988 and 1996. The team has reached multiple finals and established itself as one of the competition's most successful national sides."
    },
    {
        name: "Thailand", code: "THA", flag: "🇹🇭", group: "F",
        image: "./assets/AFC/Thailand.jpg",
        logo: "./assets/AFC/Thailand-logo.png",
        capital: "Bangkok", nickname: "War Elephants", titles: 0,
        description: "Thailand finished third in the 1972 Asian Cup and remains a prominent Southeast Asian football nation.",
        history: "Thailand achieved third place at the 1972 AFC Asian Cup. The national team has participated in several editions and remains an established competitor in Southeast Asian football."
    },
    {
        name: "Kyrgyzstan", code: "KGZ", flag: "🇰🇬", group: "F",
        image: "./assets/AFC/Kyrgyzstan.jpg",
        logo: "./assets/AFC/Kyrgyzstan-logo.png",
        capital: "Bishkek", nickname: "The White Falcons", titles: 0,
        description: "Kyrgyzstan reached the knockout stage in its Asian Cup debut in 2019.",
        history: "Kyrgyzstan made its AFC Asian Cup debut in 2019 and reached the round of 16. The team also competed in the 2023 edition, continuing its progress in Asian international football."
    },
    {
        name: "Oman", code: "OMA", flag: "🇴🇲", group: "F",
        image: "./assets/AFC/Oman.jpg",
        logo: "./assets/AFC/Oman-logo.png",
        capital: "Muscat", nickname: "The Reds", titles: 0,
        description: "Oman has become a consistent competitor in Asian football and made several Asian Cup appearances.",
        history: "Oman made its AFC Asian Cup debut in 2004 and has appeared in several editions since then. The national team has steadily developed into a competitive side in West Asian football."
    }
];

/* TEAM CARDS */

const teamGrid = document.getElementById("afcTeamGrid");

const groupFilter = document.getElementById("groupFilter");

function renderTeams(group = "ALL") {
    if (!teamGrid) return;

    const filteredTeams = group === "ALL"
        ? afcTeams
        : afcTeams.filter(team => team.group === group);

    document.getElementById("teamCount").textContent = filteredTeams.length;

    
teamGrid.innerHTML = filteredTeams.map(team => `
    <button class="afc-team-card"
        type="button"
        data-code="${team.code}"
        aria-label="View ${team.name} details"
        style="
            background-image:
                linear-gradient(
                    90deg,
                    rgba(5, 13, 17, 0.88),
                    rgba(5, 13, 17, 0.25)
                ),
                url('${team.image}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        ">

        <div class="card-top">
            <span class="team-flag">${team.flag}</span>
            <span class="group-tag">GROUP ${team.group}</span>
        </div>

        <span class="team-code">${team.code}</span>
        <span class="team-name">${team.name}</span>

        <span class="card-bottom">
            <span>Explore Team</span>
            <i class="fa-solid fa-arrow-right"></i>
        </span>
    </button>
`).join("");

}

if (teamGrid) {
    renderTeams();

    teamGrid.addEventListener("click", event => {
        const card = event.target.closest(".afc-team-card");

        if (!card) return;

        window.location.href =
            `./afc-team-details.html?team=${card.dataset.code}`;
    });
}

/* GROUP FILTER */

if (groupFilter) {
    groupFilter.addEventListener("click", event => {
        const button = event.target.closest(".filter-btn");

        if (!button) return;

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        renderTeams(button.dataset.group);
    });
}

/* TEAM DETAILS PAGE */

/* TEAM DETAILS PAGE */

const detailsFlag = document.getElementById("detailFlag");

if (detailsFlag) {
    const params = new URLSearchParams(window.location.search);
    const teamCode = params.get("team");
    const team = afcTeams.find(item => item.code === teamCode);

    if (team) {
        document.title = `${team.name} | AFC Asian Cup | PlayZone`;

        detailsFlag.src = team.logo;
        detailsFlag.alt = `${team.name} logo`;

        document.getElementById("detailCode").textContent = team.code;
        document.getElementById("detailName").textContent = team.name;
        document.getElementById("detailNickname").textContent = team.nickname;
        document.getElementById("detailDescription").textContent = team.description;
        document.getElementById("detailWatermark").textContent = team.code;

        document.getElementById("infoCountry").textContent = team.name;
        document.getElementById("infoCapital").textContent = team.capital;
        document.getElementById("infoGroup").textContent = `Group ${team.group}`;
        document.getElementById("infoTitles").textContent = team.titles;

        document.getElementById("historyTitle").textContent =
            `${team.name} Football History`;

        document.getElementById("teamHistory").textContent =
            team.history || "History details coming soon.";

    } else {
        document.getElementById("detailName").textContent = "Team Not Found";
        document.getElementById("detailCode").textContent = "N/A";
        document.getElementById("detailNickname").textContent = "";
        document.getElementById("detailDescription").textContent =
            "This team could not be found. Return to the AFC Asian Cup teams list.";

        detailsFlag.removeAttribute("src");
        detailsFlag.alt = "Team not found";

        document.getElementById("detailWatermark").textContent = "AFC";
        document.getElementById("infoCountry").textContent = "—";
        document.getElementById("infoCapital").textContent = "—";
        document.getElementById("infoGroup").textContent = "—";
        document.getElementById("infoTitles").textContent = "—";
    }
}
