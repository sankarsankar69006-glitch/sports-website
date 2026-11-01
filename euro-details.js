
const euroTeamDetails = {
    GER: {
        name: "Germany",
        image: "germany.jpg",
        titles: 3,
        founded: 1900,
        result: "Quarter-finals",
        description: "A historic European football powerhouse known for its discipline, teamwork and winning mentality.",
        history: "Germany won the European Championship in 1972, 1980 and 1996. The national team has built a remarkable tournament legacy through several generations of outstanding players.",
        achievements: [
            "European champions: 1972",
            "European champions: 1980",
            "European champions: 1996",
            "EURO 2024 quarter-finalists"
        ],
        players: [
            ["Franz Beckenbauer", "Defender"],
            ["Miroslav Klose", "Forward"],
            ["Manuel Neuer", "Goalkeeper"]
        ]
    },

    ESP: {
        name: "Spain",
        image: "spain.jpg",
        titles: 4,
        founded: 1913,
        result: "Champions",
        description: "La Roja combines technical excellence, intelligent passing and a tradition of producing world-class footballers.",
        history: "Spain won the European Championship in 1964, 2008, 2012 and 2024. Their 2024 triumph established a record fourth title, following an unbeaten run through all seven matches.",
        achievements: [
            "European champions: 1964",
            "European champions: 2008",
            "European champions: 2012",
            "European champions: 2024"
        ],
        players: [
            ["Andrés Iniesta", "Midfielder"],
            ["Xavi Hernández", "Midfielder"],
            ["Iker Casillas", "Goalkeeper"]
        ]
    },

    ITA: {
        name: "Italy",
        image: "Italy.webp",
        titles: 2,
        founded: 1898,
        result: "Round of 16",
        description: "The Azzurri are famous for tactical intelligence, defensive strength and memorable international performances.",
        history: "Italy lifted the European Championship in 1968 and 2020. Their 2020 tournament victory came after a penalty shoot-out against England in the final played in 2021.",
        achievements: [
            "European champions: 1968",
            "European champions: 2020",
            "EURO 2012 runners-up",
            "EURO 2024 round of 16"
        ],
        players: [
            ["Gianluigi Buffon", "Goalkeeper"],
            ["Andrea Pirlo", "Midfielder"],
            ["Paolo Maldini", "Defender"]
        ]
    },

    FRA: {
        name: "France",
        image: "france.avif",
        titles: 2,
        founded: 1919,
        result: "Semi-finals",
        description: "Les Bleus have produced generations of technically gifted stars and major international tournament winners.",
        history: "France won the European Championship in 1984 and 2000. The country has also reached several other major tournament finals and semi-finals.",
        achievements: [
            "European champions: 1984",
            "European champions: 2000",
            "EURO 2016 runners-up",
            "EURO 2024 semi-finalists"
        ],
        players: [
            ["Zinedine Zidane", "Midfielder"],
            ["Thierry Henry", "Forward"],
            ["Lilian Thuram", "Defender"]
        ]
    },

    POR: {
        name: "Portugal",
        image: "Portugal.png",
        titles: 1,
        founded: 1914,
        result: "Quarter-finals",
        description: "Portugal has developed elite attacking talent and established itself as a regular contender in European football.",
        history: "Portugal claimed its first European Championship in 2016, defeating France in the final. The team has also produced some of the competition's most memorable individual performances.",
        achievements: [
            "European champions: 2016",
            "EURO 2004 runners-up",
            "EURO 2000 semi-finalists",
            "EURO 2024 quarter-finalists"
        ],
        players: [
            ["Cristiano Ronaldo", "Forward"],
            ["Luís Figo", "Winger"],
            ["Rui Costa", "Midfielder"]
        ]
    },

    NED: {
        name: "Netherlands",
        image: "Netherlands.avif",
        titles: 1,
        founded: 1889,
        result: "Semi-finals",
        description: "Oranje is renowned for attacking football, technical skill and a rich tradition of producing legendary players.",
        history: "The Netherlands won the European Championship in 1988. The team has regularly featured among Europe's strongest national sides.",
        achievements: [
            "European champions: 1988",
            "EURO 1976 semi-finalists",
            "EURO 2000 semi-finalists",
            "EURO 2024 semi-finalists"
        ],
        players: [
            ["Johan Cruyff", "Forward"],
            ["Marco van Basten", "Forward"],
            ["Ruud Gullit", "Midfielder"]
        ]
    },

    DEN: {
        name: "Denmark",
        image: "Denmark.jpg",
        titles: 1,
        founded: 1889,
        result: "Round of 16",
        description: "Denmark is celebrated for team spirit, organised play and one of the most memorable underdog victories in football.",
        history: "Denmark won the European Championship in 1992 after entering the tournament as a late replacement. Their victory remains one of the competition's iconic stories.",
        achievements: [
            "European champions: 1992",
            "EURO 1984 semi-finalists",
            "EURO 1988 group stage",
            "EURO 2024 round of 16"
        ],
        players: [
            ["Peter Schmeichel", "Goalkeeper"],
            ["Michael Laudrup", "Forward"],
            ["Brian Laudrup", "Winger"]
        ]
    },

    GRE: {
        name: "Greece",
        image: "Greece.jpg",
        titles: 1,
        founded: 1926,
        result: "Did not qualify",
        description: "Greece is remembered for its disciplined defending and a remarkable upset in international football.",
        history: "Greece shocked Europe by winning EURO 2004, defeating hosts Portugal in the final. It remains the nation's defining international football achievement.",
        achievements: [
            "European champions: 2004",
            "EURO 2004 final victory",
            "EURO 2004 group winners",
            "Historic tournament underdogs"
        ],
        players: [
            ["Theodoros Zagorakis", "Midfielder"],
            ["Angelos Charisteas", "Forward"],
            ["Giorgos Karagounis", "Midfielder"]
        ]
    },

    ENG: {
        name: "England",
        image: "England.webp",
        titles: 0,
        founded: 1863,
        result: "Runners-up",
        description: "The Three Lions are known for passionate supporters, a rich football history and a talented modern generation.",
        history: "England reached the European Championship final in 2020 and 2024, finishing runners-up on both occasions. The country is still seeking its first men's senior EURO title.",
        achievements: [
            "EURO 2020 runners-up",
            "EURO 2024 runners-up",
            "EURO 1996 semi-finalists",
            "World Cup champions: 1966"
        ],
        players: [
            ["Wayne Rooney", "Forward"],
            ["David Beckham", "Midfielder"],
            ["Harry Kane", "Forward"]
        ]
    },

    BEL: {
        name: "Belgium",
        image: "belgium.jpg",
        titles: 0,
        founded: 1895,
        result: "Round of 16",
        description: "Belgium has produced an outstanding generation of technically gifted players and attacking talent.",
        history: "Belgium reached the EURO final in 1980 and finished third in 1972. Its recent golden generation brought the national team back among Europe's elite.",
        achievements: [
            "EURO 1980 runners-up",
            "EURO 1972 third place",
            "World Cup third place: 2018",
            "EURO 2024 round of 16"
        ],
        players: [
            ["Kevin De Bruyne", "Midfielder"],
            ["Eden Hazard", "Winger"],
            ["Romelu Lukaku", "Forward"]
        ]
    },

    CRO: {
        name: "Croatia",
        image: "croatia.jpg",
        titles: 0,
        founded: 1912,
        result: "Group stage",
        description: "Croatia is respected for its midfield quality, resilience and achievements in major international tournaments.",
        history: "Since becoming an independent national team, Croatia has established itself as a strong international competitor. Its achievements include reaching the 2018 World Cup final.",
        achievements: [
            "World Cup runners-up: 2018",
            "World Cup third place: 1998",
            "World Cup third place: 2022",
            "EURO 2024 group stage"
        ],
        players: [
            ["Luka Modrić", "Midfielder"],
            ["Davor Šuker", "Forward"],
            ["Ivan Rakitić", "Midfielder"]
        ]
    },
        SUI: {
        name: "Switzerland",
        image: "Switzerland.jpg",
        titles: 0,
        founded: 1895,
        result: "Quarter-finals",
        description: "Switzerland is known for its disciplined defending, organised teamwork and consistent performances in European football.",
        history: "Switzerland has regularly qualified for major international tournaments. The national team reached the EURO 2020 quarter-finals and the EURO 2024 quarter-finals.",
        achievements: [
            "EURO 2020 quarter-finalists",
            "EURO 2024 quarter-finalists",
            "World Cup quarter-finalists: 1934",
            "Regular European Championship participants"
        ],
        players: [
            ["Alexander Frei", "Forward"],
            ["Granit Xhaka", "Midfielder"],
            ["Xherdan Shaqiri", "Forward"]
        ]
    },

    TUR: {
        name: "Türkiye",
        image: "Turkey.jpg",
        titles: 0,
        founded: 1923,
        result: "Quarter-finals",
        description: "Türkiye brings passionate support, energetic football and technically gifted players to international competitions.",
        history: "Türkiye reached the EURO 2008 semi-finals and the EURO 2024 quarter-finals, establishing memorable runs in European Championship history.",
        achievements: [
            "EURO 2008 semi-finalists",
            "EURO 2024 quarter-finalists",
            "World Cup third place: 2002",
            "EURO 2000 quarter-finalists"
        ],
        players: [
            ["Hakan Şükür", "Forward"],
            ["Arda Turan", "Midfielder"],
            ["Arda Güler", "Midfielder"]
        ]
    },

    AUT: {
        name: "Austria",
        image: "Austria.jpg",
        titles: 0,
        founded: 1904,
        result: "Round of 16",
        description: "Austria combines organised team play with a strong football tradition and an increasingly competitive modern squad.",
        history: "Austria returned to the European Championship in the modern era and topped its group at EURO 2024 before being eliminated in the round of 16.",
        achievements: [
            "EURO 2024 group winners",
            "EURO 2024 round of 16",
            "World Cup third place: 1954",
            "EURO 2020 round of 16"
        ],
        players: [
            ["David Alaba", "Defender"],
            ["Andreas Herzog", "Midfielder"],
            ["Marko Arnautović", "Forward"]
        ]
    },

    SCO: {
        name: "Scotland",
        image: "Scotland.jpg",
        titles: 0,
        founded: 1873,
        result: "Group stage",
        description: "Scotland is one of football's oldest national teams, supported by passionate fans and a proud football culture.",
        history: "Scotland has appeared at several European Championships. The team qualified for EURO 2024 but exited during the group stage.",
        achievements: [
            "EURO 2020 group stage",
            "EURO 2024 group stage",
            "World Cup appearances: 8",
            "One of the oldest national teams"
        ],
        players: [
            ["Kenny Dalglish", "Forward"],
            ["Denis Law", "Forward"],
            ["Andy Robertson", "Defender"]
        ]
    },

    HUN: {
        name: "Hungary",
        image: "Hungary.jpg",
        titles: 0,
        founded: 1901,
        result: "Group stage",
        description: "Hungary has a celebrated football heritage and a history of producing technically gifted international players.",
        history: "Hungary was a major force in European football during the 1950s. The national team has also returned to recent European Championships, including EURO 2024.",
        achievements: [
            "EURO 1964 third place",
            "EURO 1972 fourth place",
            "World Cup runners-up: 1938",
            "World Cup runners-up: 1954"
        ],
        players: [
            ["Ferenc Puskás", "Forward"],
            ["Sándor Kocsis", "Forward"],
            ["Dominik Szoboszlai", "Midfielder"]
        ]
    },

    POL: {
        name: "Poland",
        image: "Poland.jpg",
        titles: 0,
        founded: 1919,
        result: "Group stage",
        description: "Poland is known for its strong attacking tradition and generations of accomplished international footballers.",
        history: "Poland has enjoyed notable success in World Cup competitions and has regularly competed at the European Championship in recent decades.",
        achievements: [
            "EURO 2016 quarter-finalists",
            "EURO 2012 co-hosts",
            "World Cup third place: 1974",
            "World Cup third place: 1982"
        ],
        players: [
            ["Robert Lewandowski", "Forward"],
            ["Zbigniew Boniek", "Midfielder"],
            ["Grzegorz Lato", "Forward"]
        ]
    },

    SRB: {
        name: "Serbia",
        image: "Serbia.jpg",
        titles: 0,
        founded: 1919,
        result: "Group stage",
        description: "Serbia is recognised for its physical strength, technical quality and tradition of producing talented footballers.",
        history: "As an independent national team, Serbia has competed in major international tournaments, including EURO 2024.",
        achievements: [
            "EURO 2024 qualification",
            "World Cup appearances as Serbia",
            "Strong Balkan football heritage",
            "Numerous internationally recognised players"
        ],
        players: [
            ["Dragan Stojković", "Midfielder"],
            ["Nemanja Vidić", "Defender"],
            ["Dušan Vlahović", "Forward"]
        ]
    },

    SVK: {
        name: "Slovakia",
        image: "Slovakia.jpg",
        titles: 0,
        founded: 1938,
        result: "Round of 16",
        description: "Slovakia is a competitive European national team with a reputation for resilience and organised football.",
        history: "Since competing independently, Slovakia has qualified for major tournaments and reached the EURO 2016 and EURO 2024 knockout stages.",
        achievements: [
            "EURO 2016 round of 16",
            "EURO 2024 round of 16",
            "World Cup round of 16: 2010",
            "Independent national team since 1993"
        ],
        players: [
            ["Marek Hamšík", "Midfielder"],
            ["Martin Škrtel", "Defender"],
            ["Stanislav Lobotka", "Midfielder"]
        ]
    },

    SVN: {
        name: "Slovenia",
        image: "Slovenia.jpg",
        titles: 0,
        founded: 1920,
        result: "Round of 16",
        description: "Slovenia is a determined national team that has developed a strong identity in European international football.",
        history: "Slovenia qualified for EURO 2024 and reached the round of 16, where the team lost to Portugal on penalties.",
        achievements: [
            "EURO 2024 round of 16",
            "EURO 2000 group stage",
            "World Cup appearances: 2002 and 2010",
            "Independent national team since 1991"
        ],
        players: [
            ["Jan Oblak", "Goalkeeper"],
            ["Josip Iličić", "Forward"],
            ["Benjamin Šeško", "Forward"]
        ]
    },

    ROU: {
        name: "Romania",
        image: "Romania.webp",
        titles: 0,
        founded: 1909,
        result: "Round of 16",
        description: "Romania has a proud football history, recognised for creative players and memorable European Championship campaigns.",
        history: "Romania's best recent EURO performance came in 2000, when the team reached the quarter-finals. At EURO 2024, Romania topped its group and reached the round of 16.",
        achievements: [
            "EURO 2000 quarter-finalists",
            "EURO 2024 group winners",
            "World Cup quarter-finalists: 1994",
            "EURO 2000 knockout-stage qualification"
        ],
        players: [
            ["Gheorghe Hagi", "Midfielder"],
            ["Gheorghe Popescu", "Defender"],
            ["Adrian Mutu", "Forward"]
        ]
    },

    UKR: {
        name: "Ukraine",
        image: "Ukraine.jpg",
        titles: 0,
        founded: 1991,
        result: "Group stage",
        description: "Ukraine is known for its fighting spirit, technical football and talented players competing across Europe.",
        history: "Ukraine reached the EURO 2020 quarter-finals, its best result at the European Championship as an independent nation. The team also qualified for EURO 2024.",
        achievements: [
            "EURO 2020 quarter-finalists",
            "EURO 2024 qualification",
            "World Cup quarter-finalists: 2006",
            "Independent national team since 1991"
        ],
        players: [
            ["Andriy Shevchenko", "Forward"],
            ["Serhiy Rebrov", "Forward"],
            ["Andriy Yarmolenko", "Winger"]
        ]
    },

    ALB: {
        name: "Albania",
        image: "Albania.jpg",
        titles: 0,
        founded: 1930,
        result: "Group stage",
        description: "Albania has built a competitive national team through determination, tactical organisation and emerging talent.",
        history: "Albania made its European Championship debut at EURO 2016 and returned to the tournament in 2024.",
        achievements: [
            "EURO 2016 qualification",
            "EURO 2024 qualification",
            "First EURO appearance: 2016",
            "Growing presence in European football"
        ],
        players: [
            ["Lorik Cana", "Defender"],
            ["Elseid Hysaj", "Defender"],
            ["Armando Sadiku", "Forward"]
        ]
    },

    CZE: {
        name: "Czechia",
        image: "Czechia.jpg",
        titles: 0,
        founded: 1901,
        result: "Group stage",
        description: "Czechia has a rich football tradition and a history of strong performances in European international competitions.",
        history: "As an independent nation, Czechia reached the EURO 1996 final and the EURO 2004 semi-finals. The team has regularly competed at the European Championship.",
        achievements: [
            "EURO 1996 runners-up",
            "EURO 2004 semi-finalists",
            "EURO 2012 quarter-finalists",
            "EURO 2020 quarter-finalists"
        ],
        players: [
            ["Pavel Nedvěd", "Midfielder"],
            ["Petr Čech", "Goalkeeper"],
            ["Tomáš Rosický", "Midfielder"]
        ]
    }


};



const params = new URLSearchParams(window.location.search);
const code = params.get("team") || "ESP";
const team = euroTeamDetails[code];

if (!team) {
    window.location.replace("uefa-euro.html");
} else {
    document.title = `${team.name} | UEFA Euro | PlayZone`;

    document.getElementById("detailName").textContent = team.name;
    
    document.getElementById("detailFlag").innerHTML =
    `<img src="./assets/Euro/${team.image}" alt="${team.name}">`;

    document.getElementById("detailCode").textContent = code;
    document.getElementById("detailTitles").textContent = team.titles;
    document.getElementById("detailFounded").textContent = team.founded;
    document.getElementById("detailResult").textContent = team.result;
    document.getElementById("detailDescription").textContent = team.description;
    document.getElementById("detailHistory").textContent = team.history;

    document.getElementById("detailAchievements").innerHTML =
        team.achievements.map(item => `<li>${item}</li>`).join("");

    document.getElementById("detailPlayers").innerHTML =
        team.players.map((player, index) => `
            <article class="player-card">
                <span class="player-number">
                    PLAYER 0${index + 1}
                </span>
                <h3>${player[0]}</h3>
                <p>${player[1]}</p>
            </article>
        `).join("");
}
