
const copaTeamDetails = {
    ARG: {
        name: "Argentina",
        code: "ARG",
        image: "./assets/CopaAmerica/argentina.jpg",
        nickname: "La Albiceleste",
        founded: 1893,
        copaTitles: 16,
        worldCupTitles: 3,
        lastTitle: 2024,

        description:
            "One of international football's most successful national teams, known for its legendary players and passionate supporters.",

        historyTitle: "A Legacy of Champions",

        history:
            "Argentina has a rich football history stretching back more than a century. The team won the FIFA World Cup in 1978, 1986 and 2022, and claimed the Copa América title in 2021 and 2024. Legends such as Diego Maradona and Lionel Messi have shaped the team's identity.",

        achievements: [
            {
                title: "16 Copa América Titles",
                description: "The most successful team in Copa América history."
            },
            {
                title: "3 FIFA World Cups",
                description: "World champions in 1978, 1986 and 2022."
            },
            {
                title: "Back-to-Back Copa Wins",
                description: "Won the 2021 and 2024 Copa América tournaments."
            }
        ],

        players: [
            { name: "Lionel Messi", role: "Forward" },
            { name: "Diego Maradona", role: "Attacking Midfielder" },
            { name: "Gabriel Batistuta", role: "Striker" },
            { name: "Ángel Di María", role: "Winger" }
        ]
    },

    BOL: {
        name: "Bolivia",
        code: "BOL",
        image: "./assets/CopaAmerica/bolivia.jpg",
        nickname: "La Verde",
        founded: 1925,
        copaTitles: 1,
        worldCupTitles: 0,
        lastTitle: 1963,

        description:
            "Bolivia represents South American football with a proud identity and a passionate football culture.",

        historyTitle: "Bolivia's Football Journey",

        history:
            "Bolivia won its first and only Copa América title in 1963 while hosting the tournament. The national team continues to compete in South American international football and is known for the challenging conditions of playing at altitude in La Paz.",

        achievements: [
            {
                title: "1963 Champions",
                description: "Won the Copa América on home soil."
            },
            {
                title: "World Cup Qualification",
                description: "Qualified for the FIFA World Cup in 1930, 1950 and 1994."
            },
            {
                title: "Home Advantage",
                description: "La Paz is known for its high-altitude football conditions."
            }
        ],

        players: [
            { name: "Marco Etcheverry", role: "Attacking Midfielder" },
            { name: "Erwin Sánchez", role: "Midfielder" },
            { name: "Joaquín Botero", role: "Striker" },
            { name: "Marcelo Martins", role: "Striker" }
        ]
    },

    BRA: {
        name: "Brazil",
        code: "BRA",
        image: "./assets/CopaAmerica/brazil.jpg",
        nickname: "Seleção / Canarinho",
        founded: 1914,
        copaTitles: 9,
        worldCupTitles: 5,
        lastTitle: 2019,

        description:
            "Brazil is famous worldwide for its attacking football, technical brilliance and generations of iconic players.",

        historyTitle: "The Home of Joga Bonito",

        history:
            "Brazil has won five FIFA World Cup titles and nine Copa América championships. Its football legacy includes legends such as Pelé, Zico, Romário, Ronaldo and Ronaldinho. Brazil last won the Copa América in 2019.",

        achievements: [
            {
                title: "9 Copa América Titles",
                description: "Among the most successful teams in the competition."
            },
            {
                title: "5 FIFA World Cups",
                description: "The only nation to win five men's FIFA World Cup titles."
            },
            {
                title: "2019 Copa Champions",
                description: "Won the tournament as hosts in 2019."
            }
        ],

        players: [
            { name: "Pelé", role: "Forward" },
            { name: "Ronaldo Nazário", role: "Striker" },
            { name: "Ronaldinho", role: "Attacking Midfielder" },
            { name: "Neymar Jr.", role: "Forward" }
        ]
    },

    CHI: {
        name: "Chile",
        code: "CHI",
        image: "./assets/CopaAmerica/chile.jpg",
        nickname: "La Roja",
        founded: 1895,
        copaTitles: 2,
        worldCupTitles: 0,
        lastTitle: 2016,

        description:
            "Chile is known for its energetic football, competitive spirit and memorable golden generation.",

        historyTitle: "Chile's Golden Generation",

        history:
            "Chile won its first two Copa América titles in consecutive tournaments in 2015 and 2016. Players such as Alexis Sánchez, Arturo Vidal and Claudio Bravo played important roles during this successful era.",

        achievements: [
            {
                title: "2015 Copa América",
                description: "Won its first Copa América title on home soil."
            },
            {
                title: "2016 Copa América",
                description: "Defeated Argentina on penalties to retain the title."
            },
            {
                title: "2014 World Cup",
                description: "Reached the Round of 16 at the FIFA World Cup."
            }
        ],

        players: [
            { name: "Alexis Sánchez", role: "Forward" },
            { name: "Arturo Vidal", role: "Midfielder" },
            { name: "Claudio Bravo", role: "Goalkeeper" },
            { name: "Iván Zamorano", role: "Striker" }
        ]
    },

    COL: {
        name: "Colombia",
        code: "COL",
        image: "./assets/CopaAmerica/colombia.webp",
        nickname: "Los Cafeteros",
        founded: 1924,
        copaTitles: 1,
        worldCupTitles: 0,
        lastTitle: 2001,

        description:
            "Colombia combines technical skill, creative attacking play and a passionate football tradition.",

        historyTitle: "A Proud Colombian Tradition",

        history:
            "Colombia won its first Copa América title in 2001 as tournament hosts, completing the competition without conceding a goal. The national team has also produced outstanding players including Carlos Valderrama, Radamel Falcao and James Rodríguez.",

        achievements: [
            {
                title: "2001 Copa Champions",
                description: "Won the tournament on home soil without conceding a goal."
            },
            {
                title: "2024 Finalists",
                description: "Reached the Copa América final in 2024."
            },
            {
                title: "World Cup Quarter-Final",
                description: "Reached the quarter-finals in 2014."
            }
        ],

        players: [
            { name: "Carlos Valderrama", role: "Midfielder" },
            { name: "James Rodríguez", role: "Attacking Midfielder" },
            { name: "Radamel Falcao", role: "Striker" },
            { name: "René Higuita", role: "Goalkeeper" }
        ]
    },

    ECU: {
        name: "Ecuador",
        code: "ECU",
        image: "./assets/CopaAmerica/ecuador.webp",
        nickname: "La Tri",
        founded: 1925,
        copaTitles: 0,
        worldCupTitles: 0,
        lastTitle: null,

        description:
            "Ecuador is an ambitious South American national team known for its pace, physical strength and emerging young talent.",

        historyTitle: "Ecuador's Rise in Football",

        history:
            "Ecuador has steadily developed its international football reputation. The team qualified for its first FIFA World Cup in 2002 and reached the Round of 16 in 2006. Ecuador is still pursuing its first Copa América title.",

        achievements: [
            {
                title: "World Cup Debut",
                description: "Qualified for its first FIFA World Cup in 2002."
            },
            {
                title: "2006 Round of 16",
                description: "Reached the knockout stage at the 2006 World Cup."
            },
            {
                title: "Emerging Talent",
                description: "Continues to develop a new generation of players."
            }
        ],

        players: [
            { name: "Antonio Valencia", role: "Winger / Full-back" },
            { name: "Enner Valencia", role: "Striker" },
            { name: "Álex Aguinaga", role: "Midfielder" },
            { name: "Agustín Delgado", role: "Striker" }
        ]
    },

    PAR: {
        name: "Paraguay",
        code: "PAR",
        image: "./assets/CopaAmerica/paraguay.jpg",
        nickname: "La Albirroja",
        founded: 1906,
        copaTitles: 2,
        worldCupTitles: 0,
        lastTitle: 1979,

        description:
            "Paraguay is recognised for its resilience, disciplined defending and competitive South American football tradition.",

        historyTitle: "The Spirit of La Albirroja",

        history:
            "Paraguay has won the Copa América twice, in 1953 and 1979. The national team has also reached the FIFA World Cup quarter-finals, achieving that milestone in 2010.",

        achievements: [
            {
                title: "1953 Copa Champions",
                description: "Won its first South American continental title."
            },
            {
                title: "1979 Copa Champions",
                description: "Claimed its second Copa América championship."
            },
            {
                title: "2010 World Cup",
                description: "Reached the World Cup quarter-finals."
            }
        ],

        players: [
            { name: "José Luis Chilavert", role: "Goalkeeper" },
            { name: "Roque Santa Cruz", role: "Striker" },
            { name: "Salvador Cabañas", role: "Forward" },
            { name: "Carlos Gamarra", role: "Defender" }
        ]
    },

    PER: {
        name: "Peru",
        code: "PER",
        image: "./assets/CopaAmerica/peru.avif",
        nickname: "La Blanquirroja",
        founded: 1922,
        copaTitles: 2,
        worldCupTitles: 0,
        lastTitle: 1975,

        description:
            "Peru has a rich football culture, technical players and a long history in South American competition.",

        historyTitle: "Peru's Continental Success",

        history:
            "Peru won the Copa América in 1939 and 1975. The national team also reached the quarter-finals of the 1970 FIFA World Cup and returned to the World Cup in 2018 after a long absence.",

        achievements: [
            {
                title: "1939 Champions",
                description: "Won its first Copa América championship."
            },
            {
                title: "1975 Champions",
                description: "Won its second Copa América title."
            },
            {
                title: "2018 World Cup",
                description: "Returned to the FIFA World Cup after 36 years."
            }
        ],

        players: [
            { name: "Teófilo Cubillas", role: "Attacking Midfielder" },
            { name: "Paolo Guerrero", role: "Striker" },
            { name: "Héctor Chumpitaz", role: "Defender" },
            { name: "Claudio Pizarro", role: "Striker" }
        ]
    },

    URU: {
        name: "Uruguay",
        code: "URU",
        image: "./assets/CopaAmerica/uruguay.jpg",
        nickname: "La Celeste",
        founded: 1900,
        copaTitles: 15,
        worldCupTitles: 2,
        lastTitle: 2011,

        description:
            "Uruguay has a historic football identity built on determination, teamwork and success on the international stage.",

        historyTitle: "A Historic Football Nation",

        history:
            "Uruguay won the inaugural Copa América in 1916 and has collected 15 titles in the tournament. The team won the FIFA World Cup in 1930 and 1950, and has produced legends such as Luis Suárez, Diego Forlán and Enzo Francescoli.",

        achievements: [
            {
                title: "15 Copa América Titles",
                description: "One of the most successful nations in the tournament."
            },
            {
                title: "2 FIFA World Cups",
                description: "World champions in 1930 and 1950."
            },
            {
                title: "First Copa Champions",
                description: "Won the inaugural tournament in 1916."
            }
        ],

        players: [
            { name: "Luis Suárez", role: "Striker" },
            { name: "Diego Forlán", role: "Forward" },
            { name: "Enzo Francescoli", role: "Attacking Midfielder" },
            { name: "Edinson Cavani", role: "Striker" }
        ]
    },

    VEN: {
        name: "Venezuela",
        code: "VEN",
        image: "./assets/CopaAmerica/venezuela.jpg",
        nickname: "La Vinotinto",
        founded: 1926,
        copaTitles: 0,
        worldCupTitles: 0,
        lastTitle: null,

        description:
            "Venezuela continues to grow as a competitive football nation, with a developing player pool and ambitious international goals.",

        historyTitle: "Venezuela's Football Development",

        history:
            "Venezuela has yet to win the Copa América or qualify for the men's FIFA World Cup. The national team made an impressive run to the Copa América semi-finals in 2011, marking an important moment in its international history.",

        achievements: [
            {
                title: "2011 Semi-Finalists",
                description: "Reached the Copa América semi-finals for the first time."
            },
            {
                title: "Continental Progress",
                description: "Has continued to improve in South American competition."
            },
            {
                title: "Emerging Players",
                description: "Developing talent for future international tournaments."
            }
        ],

        players: [
            { name: "Juan Arango", role: "Midfielder" },
            { name: "Salomón Rondón", role: "Striker" },
            { name: "Tomás Rincón", role: "Midfielder" },
            { name: "Josef Martínez", role: "Forward" }
        ]
    }
};


// GET TEAM CODE FROM URL

const params = new URLSearchParams(window.location.search);
const teamCode = params.get("team");

const team = copaTeamDetails[teamCode];


// CHECK TEAM

if (!team) {
    document.querySelector(".details-page").innerHTML = `
        <section class="content-section">
            <h1>Team Not Found</h1>
            <p>Sorry, the selected team details are unavailable.</p>
            <a href="copa-america.html" class="back-home">
                Back to Copa América
            </a>
        </section>
    `;
} else {

    // PAGE TITLE

    document.title = `${team.name} | PlayZone`;


    // HERO DETAILS

    document.getElementById("teamHero").style.backgroundImage =
    `url("${team.image}")`;

    document.getElementById("teamName").textContent = team.name;
    document.getElementById("teamCode").textContent = team.code;
    document.getElementById("teamNickname").textContent = team.nickname;
    document.getElementById("teamDescription").textContent = team.description;

    


    // TEAM STATISTICS

    document.getElementById("copaTitles").textContent = team.copaTitles;

    document.getElementById("worldCupTitles").textContent =
        team.worldCupTitles;

    document.getElementById("teamFounded").textContent = team.founded;

    document.getElementById("lastTitle").textContent =
        team.lastTitle ?? "Not yet";


    // TEAM HISTORY

    document.getElementById("historyTitle").textContent =
        team.historyTitle;

    document.getElementById("teamHistory").textContent =
        team.history;


    // ACHIEVEMENTS

    const achievementList = document.getElementById("achievementList");

    team.achievements.forEach(achievement => {

        const card = document.createElement("article");

        card.className = "achievement-card";

        const icon = document.createElement("span");
        icon.textContent = "🏆";

        const title = document.createElement("h3");
        title.textContent = achievement.title;

        const description = document.createElement("p");
        description.textContent = achievement.description;

        card.append(icon, title, description);

        achievementList.appendChild(card);
    });


    // FAMOUS PLAYERS

    const playersList = document.getElementById("playersList");

    team.players.forEach((player, index) => {

        const card = document.createElement("article");

        card.className = "player-card";

        const number = document.createElement("div");
        number.className = "player-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const name = document.createElement("h3");
        name.textContent = player.name;

        const role = document.createElement("p");
        role.textContent = player.role;

        card.append(number, name, role);

        playersList.appendChild(card);
    });

}
