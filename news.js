
const articles = [
    {
        id: "clasico-preview-2026",
        category: "World Football",
        title: "El Clasico: Real Madrid vs Barcelona",
        date: "23 October 2026",
        readTime: "6 min read",
        image: "./assets/News/clasico.jpg",
        summary: "A look at the rivalry, tactics and key battles in one of football's biggest matches.",
        lead: "El Clasico is more than a football match. It brings together history, pressure, tactical battles and world-class players.",
        paragraphs: [
            ["Why this match matters", "Real Madrid and Barcelona have one of football's most famous rivalries. Every meeting attracts attention from supporters around the world. The result can influence confidence, team momentum and the title race."],
            ["The tactical battle", "Midfield control, pressing and defensive organisation can decide the match. Teams must create chances while protecting the space behind their defenders. Quick passing and intelligent movement can help break down a strong defence."],
            ["Players to watch", "Forwards can change a match with one important moment. Midfielders must control possession and create opportunities, while defenders need concentration throughout the game."],
            ["What happens next", "The performance can reveal how well each team is developing. Supporters should look beyond the score and consider chances created, defensive mistakes and tactical changes."]
        ],
        sourceName: "Reuters Football",
        sourceUrl: "https://www.reuters.com/sports/soccer/"
    },
    {
        id: "premier-league-talking-points",
        category: "Premier League",
        title: "Premier League: Weekend Football Analysis",
        date: "26 October 2026",
        readTime: "7 min read",
        image: "./assets/News/premier-league.webp",
        summary: "Explore team performances, tactical decisions, goalkeeping and the latest talking points.",
        lead: "The Premier League is known for its intensity, competitive matches and unpredictable results. Every round gives teams new opportunities and challenges.",
        paragraphs: [
            ["Results and performances", "The final score does not always tell the full story. Teams must create good chances, defend effectively and take advantage of important moments."],
            ["Squad building", "Successful recruitment means finding players who fit the team's style. Clubs must balance experience, youth, squad depth and their available budget."],
            ["The goalkeeper's role", "Modern goalkeepers need excellent reflexes and good distribution. Their passing can help a team build attacks from the back."],
            ["Looking ahead", "Upcoming fixtures will test consistency and squad depth. Injuries, rotation and tactical flexibility may influence the teams' performances."]
        ],
        sourceName: "The Guardian Football",
        sourceUrl: "https://www.theguardian.com/football"
    },
    {
        id: "ucl-matchday",
        category: "Champions League",
        title: "UEFA Champions League: European Football Analysis",
        date: "23 October 2026",
        readTime: "6 min read",
        image: "./assets/News/champions-league.jpg",
        summary: "Explore European football, tactical battles, late goals and the race for qualification.",
        lead: "The Champions League brings together clubs from different leagues and footballing cultures. Teams must adapt to different styles to succeed.",
        paragraphs: [
            ["The importance of every match", "Points gained during the league phase can influence qualification. Consistency is important because one poor performance can make the remaining fixtures more difficult."],
            ["Different tactical styles", "Some teams press high while others defend deep and counterattack. Successful teams need to recognise these approaches and adjust their plans."],
            ["Substitutions and game management", "Fresh players can change the pace of a match. Coaches must decide when to attack, protect a lead or introduce a different tactical approach."],
            ["The road ahead", "European competitions test fitness, concentration and squad depth. Teams competing in several competitions must manage player workloads carefully."]
        ],
        sourceName: "UEFA Champions League",
        sourceUrl: "https://www.uefa.com/uefachampionsleague/"
    },
    {
        id: "isl-football",
        category: "Indian Football",
        title: "Indian Super League: Teams, Players and Season Analysis",
        date: "19 October 2026",
        readTime: "6 min read",
        image: "./assets/News/isl.jpg",
        summary: "Explore Indian football, club performances, young players and the development of the league.",
        lead: "Indian football continues to develop through professional clubs, youth academies and domestic competitions. Consistent performances are important for long-term growth.",
        paragraphs: [
            ["The league campaign", "Teams aim to build momentum through consistent results. Strong defensive organisation and efficient finishing can help clubs collect important points."],
            ["Young Indian players", "Young players benefit from regular competitive minutes. Training, coaching and opportunities at senior level can help them develop their skills."],
            ["Club tactics", "Teams use different formations and playing styles. Pressing, counterattacks and set pieces can all influence the result of a match."],
            ["Growing Indian football", "Academies, better facilities and quality coaching can support the next generation. Supporters can also help by following domestic clubs and youth competitions."]
        ],
        sourceName: "Indian Super League",
        sourceUrl: "https://www.indiansuperleague.com/News"
    },
    {
        id: "indian-youth-football",
        category: "Indian Football",
        title: "Indian Youth Football: Developing the Next Generation",
        date: "26 October 2026",
        readTime: "5 min read",
        image: "./assets/News/indian-youth.png",
        summary: "Why youth competitions, academies and international experience matter for Indian football.",
        lead: "Youth development is an important foundation for the future of Indian football. Young players need good coaching and regular opportunities to compete.",
        paragraphs: [
            ["Youth competitions", "International competitions expose young footballers to new opponents and tactical approaches. These experiences help them improve their decision-making."],
            ["Skills beyond results", "Development includes passing, movement, fitness, communication and understanding of the game. Wins matter, but individual improvement is also important."],
            ["Academy pathways", "A strong pathway connects grassroots football, academies and professional clubs. Players need opportunities to progress to senior football."],
            ["Following young talent", "Supporters can follow official squad announcements, youth tournaments and match reports to discover emerging players."]
        ],
        sourceName: "All India Football Federation",
        sourceUrl: "https://www.the-aiff.com/articles"
    },
    {
        id: "laliga-transfers",
        category: "LaLiga",
        title: "LaLiga: Transfers, Squad Building and the Title Race",
        date: "1 September 2026",
        readTime: "6 min read",
        image: "./assets/News/laliga.webp",
        summary: "How recruitment, new signings and squad depth can influence the Spanish league season.",
        lead: "LaLiga combines technical football, tactical variety and major club rivalries. Recruitment can change how a team plays throughout a season.",
        paragraphs: [
            ["Recruitment and tactics", "A new midfielder can improve ball progression, while a quick forward can stretch opposition defences. The best signings fit the team's tactical needs."],
            ["Integrating new players", "Players need time to understand their teammates and the coach's system. Training and competitive matches help them develop this understanding."],
            ["Competition for places", "Squad depth gives coaches more options. Rotation can help players remain fit during a demanding season."],
            ["The title race", "Consistency, injuries, tactical flexibility and performances in difficult matches can all influence the final standings."]
        ],
        sourceName: "LALIGA Official",
        sourceUrl: "https://www.laliga.com/"
    },
    {
        id: "transfer-rumours",
        category: "Transfers",
        title: "Football Transfer News: Rumours vs Confirmed Deals",
        date: "27 October 2026",
        readTime: "5 min read",
        image: "./assets/News/transfers.jpg",
        summary: "Learn how to evaluate transfer rumours and identify official announcements.",
        lead: "Transfer news spreads quickly across websites and social media. Understanding the difference between speculation and confirmation helps supporters follow the market.",
        paragraphs: [
            ["Understanding transfer reports", "Words such as interested, monitoring and negotiating describe different stages. They do not guarantee that a transfer will happen."],
            ["Checking official sources", "Club announcements and official league registrations are useful confirmation sources. Reports without clear evidence should be treated cautiously."],
            ["Why deals take time", "Transfers can involve fees, personal terms, medical examinations and registration. Negotiations may change before an agreement is completed."],
            ["Following the market", "Check publication dates and original sources. Avoid treating an unconfirmed rumour as a completed transfer."]
        ],
        sourceName: "FootballTransfers",
        sourceUrl: "https://www.footballtransfers.com/"
    },
    {
        id: "tactical-pressing",
        category: "Match Analysis",
        title: "Tactical Analysis: How High Pressing Works",
        date: "24 October 2026",
        readTime: "7 min read",
        image: "./assets/News/tactics.jpg",
        summary: "Understand pressing triggers, passing lanes, team shape and defensive organisation.",
        lead: "High pressing is a coordinated team strategy. Players work together to limit the opponent's passing options and force mistakes.",
        paragraphs: [
            ["Pressing triggers", "A team may begin pressing after a poor first touch or a pass toward the touchline. These triggers help players move together."],
            ["Blocking passing lanes", "Players position themselves to limit easy passes into midfield. This can force opponents into difficult passes or long clearances."],
            ["Supporting the press", "Midfielders and defenders must move forward together. Large gaps between the lines allow opponents to escape pressure."],
            ["When pressing fails", "Teams need to recover into a compact defensive shape when the opposition breaks through. Otherwise, pressing can leave dangerous spaces."]
        ],
        sourceName: "UEFA",
        sourceUrl: "https://www.uefa.com/"
    },
    {
        id: "ballon-dor-analysis",
        category: "World Football",
        title: "Ballon d'Or: How Football's Individual Awards Are Judged",
        date: "26 October 2026",
        readTime: "5 min read",
        image: "./assets/News/ballon-dor.avif",
        summary: "Goals, assists, trophies and consistency all influence discussions about football's best players.",
        lead: "Individual awards recognise outstanding performances, but judging a footballer's contribution requires more than looking at one statistic.",
        paragraphs: [
            ["Why awards create debate", "Supporters value goals, assists, trophies, consistency and influence in important matches. Different priorities can lead to different opinions."],
            ["Looking beyond statistics", "A player's movement, pressing and defensive work can contribute to the team even when they do not score."],
            ["Team and individual success", "Trophies can strengthen an award case, but individual consistency and the player's role also deserve consideration."],
            ["Assessing performances", "Watching matches and considering statistics together gives a more complete picture of a player's contribution."]
        ],
        sourceName: "France Football",
        sourceUrl: "https://www.francefootball.fr/"
    },
    {
        id: "indian-club-development",
        category: "Indian Football",
        title: "Indian Football Clubs: Academies and Long-Term Development",
        date: "22 October 2026",
        readTime: "6 min read",
        image: "./assets/News/indian-clubs.jpg",
        summary: "Why coaching, facilities and opportunities for young players are important for Indian clubs.",
        lead: "The future of Indian football depends on a strong development pathway from grassroots participation to professional competition.",
        paragraphs: [
            ["Building academies", "Academies need qualified coaches, suitable facilities and regular competition. Players also need a clear route into senior teams."],
            ["Creating local connections", "Community activities and accessible matches can help clubs build a loyal supporter base."],
            ["Improving coaching", "Coaches help players develop technique, tactical understanding and decision-making. Continued coach education can improve development."],
            ["A long-term approach", "Consistent investment and opportunities for domestic players can support gradual progress across the football system."]
        ],
        sourceName: "All India Football Federation",
        sourceUrl: "https://www.the-aiff.com/"
    },
    {
        id: "football-data-analysis",
        category: "Match Analysis",
        title: "Beyond Possession: Five Ways to Analyse a Football Match",
        date: "21 October 2026",
        readTime: "6 min read",
        image: "./assets/News/analysis.png",
        summary: "Learn how chance quality, field position, transitions and set pieces help explain match performance.",
        lead: "Possession statistics alone cannot explain a football match. Analysts combine several measures with what they observe on the pitch.",
        paragraphs: [
            ["Chance quality", "The location and quality of shots help explain whether a team created clear scoring opportunities."],
            ["Progressing the ball", "Passes that break defensive lines and carries into dangerous areas can create more attacking opportunities."],
            ["Transitions", "The moments after winning or losing possession can create dangerous attacks if teams are not organised."],
            ["Set pieces", "Corners and free kicks can decide close matches. Preparation and concentration are important in both attacking and defending situations."],
            ["Match context", "The scoreline, opponent and game situation influence statistics. Numbers are most useful when considered alongside the match itself."]
        ],
        sourceName: "UEFA",
        sourceUrl: "https://www.uefa.com/"
    },

 {
    id: "ucl-new-era",
    category: "Champions League",
    title: "Champions League: The Road to European Glory",
    date: "27 October 2026",
    readTime: "6 min read",
    image: "./assets/News/ucl-road.avif",
    summary: "Explore the pressure, preparation and tactical battles that define Europe's elite club competition.",
    lead: "The UEFA Champions League brings together leading clubs in European football, where small details can decide a team's journey.",
    paragraphs: [
        ["A demanding competition", "Teams must perform consistently across the league phase before the decisive knockout rounds."],
        ["Tactical preparation", "Coaches study opponents, identify weaknesses and develop plans for different match situations."],
        ["The importance of squad depth", "Injuries, suspensions and a busy fixture schedule make squad rotation an important factor."],
        ["Fine margins", "Set pieces, individual mistakes and moments of attacking quality can change the direction of a tie."],
        ["The ultimate ambition", "Every club entering the competition hopes to reach the final and lift one of football's most prestigious trophies."]
    ],
    sourceName: "UEFA",
    sourceUrl: "https://www.uefa.com/uefachampionsleague/"
},
{
    id: "premier-league-title-race",
    category: "Premier League",
    title: "Premier League Title Race: What Makes a Champion?",
    date: "26 October 2026",
    readTime: "5 min read",
    image: "./assets/News/title-race.webp",
    summary: "Consistency, squad depth and composure can separate title contenders from the rest.",
    lead: "Winning a league title requires more than a few outstanding performances. Teams need to collect points throughout a demanding season.",
    paragraphs: [
        ["Consistency matters", "Champions regularly find ways to earn points even when they are not playing at their best."],
        ["Handling difficult fixtures", "Matches against direct rivals can have a major influence on the standings and team confidence."],
        ["Squad depth", "A strong bench helps teams cope with injuries and maintain performance across competitions."],
        ["Managing pressure", "Players and managers must respond positively to setbacks rather than allowing one result to affect the next match."],
        ["The final stretch", "As the season progresses, every point becomes important and tactical discipline can make the difference."]
    ],
    sourceName: "Premier League",
    sourceUrl: "https://www.premierleague.com/"
},
{
    id: "football-transfer-strategy",
    category: "Transfers",
    title: "Inside Football Transfers: Building a Balanced Squad",
    date: "25 October 2026",
    readTime: "6 min read",
    image: "./assets/News/transfer-strategy.webp",
    summary: "Discover how clubs balance recruitment, budgets and tactical needs when planning transfers.",
    lead: "Successful recruitment is not simply about signing famous players. Clubs must identify footballers who fit their system and long-term plans.",
    paragraphs: [
        ["Identifying the right profile", "Recruitment teams analyse a player's position, strengths, consistency and suitability for the manager's style."],
        ["Financial planning", "Transfer fees, wages and contract length all influence whether a potential signing makes financial sense."],
        ["Data and scouting", "Statistics can help identify promising players, while scouting provides context about their performances."],
        ["Squad balance", "A club needs suitable options across positions rather than too many players competing for the same role."],
        ["Planning for the future", "Recruiting younger talent alongside experienced players can help clubs maintain continuity over several seasons."]
    ],
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/"
},
{
    id: "football-pressing-explained",
    category: "Match Analysis",
    title: "High Pressing Explained: Winning the Ball Higher Up",
    date: "24 October 2026",
    readTime: "5 min read",
    image: "./assets/News/high-press.jpg",
    summary: "Learn how coordinated pressing can force mistakes and create attacking opportunities.",
    lead: "High pressing is a team strategy designed to put opponents under pressure close to their own goal and regain possession quickly.",
    paragraphs: [
        ["The first defender", "The pressing player directs the opponent towards a less dangerous passing option or a crowded area."],
        ["Team coordination", "Nearby players must move together to close passing lanes and prevent easy escapes."],
        ["Trigger moments", "A poor touch, a backward pass or a pass towards the sideline can signal an opportunity to press."],
        ["The risk of space", "If the first press is bypassed, the defending team may leave large spaces behind its midfield."],
        ["Energy and timing", "Pressing requires fitness, communication and careful decisions about when to engage and when to recover."]
    ],
    sourceName: "UEFA",
    sourceUrl: "https://www.uefa.com/"
},
{
    id: "laliga-midfield-battle",
    category: "LaLiga",
    title: "LaLiga Tactics: Why Midfield Control Matters",
    date: "23 October 2026",
    readTime: "5 min read",
    image: "./assets/News/laliga-midfield.webp",
    summary: "Midfield movement, passing angles and pressure resistance can shape the rhythm of a Spanish league match.",
    lead: "Controlling midfield helps teams dictate tempo, connect defence with attack and limit the opposition's opportunities to progress.",
    paragraphs: [
        ["Creating passing options", "Players move into useful spaces to give teammates multiple options when building attacks."],
        ["Breaking pressure", "Quick combinations and well-timed movements can help a team escape an opponent's press."],
        ["Defensive responsibility", "Midfielders also protect the defence by tracking runners and covering spaces when possession is lost."],
        ["Changing the tempo", "Teams may slow the game down to maintain control or accelerate their passing to exploit an opening."],
        ["Reading the match", "The best midfield performances combine technical ability with awareness of space, timing and risk."]
    ],
    sourceName: "LaLiga",
    sourceUrl: "https://www.laliga.com/"
},
{
    id: "indian-football-development",
    category: "Indian Football",
    title: "Indian Football: Building a Stronger Pathway for Young Players",
    date: "22 October 2026",
    readTime: "6 min read",
    image: "./assets/News/indian-youth-team.webp",
    summary: "Youth coaching, competitive opportunities and better development structures can help Indian football grow.",
    lead: "Developing talented footballers takes years of coaching, match experience and access to a supportive football environment.",
    paragraphs: [
        ["Grassroots participation", "Local clubs and school competitions can give children an early opportunity to learn the game."],
        ["Quality coaching", "Age-appropriate training helps young players improve technique, decision-making and confidence."],
        ["Regular competitive football", "Players benefit from facing different opponents and learning to perform under match pressure."],
        ["A clear development pathway", "Well-connected youth academies and senior teams can help talented players progress between levels."],
        ["Long-term progress", "Sustainable development depends on continued investment, good facilities and opportunities for players across the country."]
    ],
    sourceName: "AIFF",
    sourceUrl: "https://www.the-aiff.com/"
},
{
    id: "football-set-piece-edge",
    category: "Match Analysis",
    title: "Set Pieces: The Small Details That Win Football Matches",
    date: "21 October 2026",
    readTime: "5 min read",
    image: "./assets/News/set-pieces.jpg",
    summary: "Corners, free kicks and throw-ins can provide valuable opportunities when open-play chances are limited.",
    lead: "Set pieces allow teams to prepare specific movements and attacking routines before the ball enters play.",
    paragraphs: [
        ["Corner routines", "Teams use different delivery areas, runs and blocking movements to create space near goal."],
        ["Free-kick decisions", "The distance, angle and defensive wall influence whether a team shoots directly or attempts a pass."],
        ["Defensive organisation", "Clear responsibilities help defenders track opponents and protect dangerous spaces."],
        ["Second balls", "The next phase after the initial delivery can create another shooting opportunity if players react quickly."],
        ["Preparation pays off", "Rehearsed routines and consistent delivery can make set pieces an important part of a team's attacking plan."]
    ],
    sourceName: "UEFA",
    sourceUrl: "https://www.uefa.com/"
},
{
    id: "football-academy-pathway",
    category: "World Football",
    title: "From Academy to First Team: The Journey of a Young Footballer",
    date: "20 October 2026",
    readTime: "6 min read",
    image: "./assets/News/football-academy.avif",
    summary: "A look at the training, competition and personal development involved in progressing through a football academy.",
    lead: "Reaching senior football takes more than natural ability. Young players must develop technically, physically and mentally.",
    paragraphs: [
        ["Learning the fundamentals", "Academy training builds first touch, passing, movement and an understanding of team responsibilities."],
        ["Developing decision-making", "Small-sided games and competitive matches teach players how to react under pressure."],
        ["Physical preparation", "Age-appropriate conditioning helps players build strength, balance and endurance safely."],
        ["Mental resilience", "Players must learn from mistakes, handle competition for places and remain focused on improvement."],
        ["Earning opportunities", "Strong performances, consistency and readiness can help a young player move closer to senior-team football."]
    ],
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/"
},
{
    id: "football-goalkeeper-analysis",
    category: "Match Analysis",
    title: "More Than Saves: How to Analyse a Goalkeeper",
    date: "19 October 2026",
    readTime: "5 min read",
    image: "./assets/News/goalkeeper.png",
    summary: "Shot stopping is crucial, but positioning, distribution and decision-making also shape a goalkeeper's performance.",
    lead: "A goalkeeper's contribution goes beyond spectacular saves. Their decisions can influence how a team defends and builds attacks.",
    paragraphs: [
        ["Positioning", "Good positioning helps a goalkeeper reduce the visible target and respond more effectively to shots."],
        ["Handling and reactions", "Secure handling can prevent rebounds, while quick reactions are important during close-range situations."],
        ["Cross management", "Knowing when to claim, punch or stay on the line requires judgement and communication."],
        ["Distribution", "Accurate throws and passes can start counterattacks or help the team retain possession."],
        ["Communication", "Goalkeepers have a clear view of the pitch and can help organise defensive lines and mark opponents."]
    ],
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/"
},
{
    id: "football-fan-atmosphere",
    category: "World Football",
    title: "The Power of Football Fans: How Stadium Atmosphere Shapes a Match",
    date: "18 October 2026",
    readTime: "4 min read",
    image: "./assets/News/stadium-atmosphere.jpg",
    summary: "Crowd energy, club traditions and home support form an important part of football culture.",
    lead: "Football stadiums are places where sporting competition meets community, identity and shared emotion.",
    paragraphs: [
        ["Home support", "Familiar surroundings and vocal backing can help home players feel connected to their supporters."],
        ["A unique identity", "Songs, colours and traditions give each club's matchday atmosphere its own character."],
        ["Momentum and emotion", "A big tackle, a crucial save or a late goal can transform the mood inside a stadium."],
        ["Respect for the game", "Supporters help create a better football environment when passion is combined with respect for players and rival fans."],
        ["A global community", "Fans around the world connect through their clubs, sharing memories and following teams across generations."]
    ],
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/"
}
];

const newsList = document.getElementById("newsList");
const articleContent = document.getElementById("articleContent");
const filterBar = document.getElementById("filterBar");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

let activeCategory = "All News";

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));
}

function getFilteredArticles() {
    const searchText = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    return articles.filter(article => {
        const categoryMatches =
            activeCategory === "All News" ||
            article.category === activeCategory;

        const articleText = [
            article.title,
            article.category,
            article.summary,
            article.lead,
            ...article.paragraphs.flat()
        ].join(" ").toLowerCase();

        const searchMatches =
            !searchText || articleText.includes(searchText);

        return categoryMatches && searchMatches;
    });
}

function renderNews() {
    if (!newsList) return;

    const filtered = getFilteredArticles();

    newsList.innerHTML = filtered.map((article, index) => `
        <article class="news-row ${index % 2 === 1 ? "reverse" : ""}">

            <a class="news-image-wrap"
               href="article.html?id=${encodeURIComponent(article.id)}"
               aria-label="Read ${escapeHTML(article.title)}">

                <img
                    class="news-image"
                    src="${escapeHTML(article.image)}"
                    alt="${escapeHTML(article.title)}"
                    loading="eager">
            </a>

            <div class="news-copy">
                <span class="category-label">
                    ${escapeHTML(article.category)}
                </span>

                <h3>
                    <a href="article.html?id=${encodeURIComponent(article.id)}">
                        ${escapeHTML(article.title)}
                    </a>
                </h3>

                <p>${escapeHTML(article.summary)}</p>

                <div class="news-meta">
                    <span>▣ ${escapeHTML(article.date)}</span>
                    <span>◷ ${escapeHTML(article.readTime)}</span>
                </div>

                <a class="read-more"
                   href="article.html?id=${encodeURIComponent(article.id)}">
                    Read Full Article <span>→</span>
                </a>
            </div>
        </article>
    `).join("");

    if (emptyState) {
        emptyState.hidden = filtered.length !== 0;
    }

    const title = document.getElementById("feedTitle");

    if (title) {
        title.textContent = activeCategory === "All News"
            ? "Latest Football Stories"
            : activeCategory;
    }
}

function renderArticle() {
    if (!articleContent) return;

    const params = new URLSearchParams(window.location.search);
    const article = articles.find(
        item => item.id === params.get("id")
    );

    if (!article) {
        articleContent.innerHTML = `
            <h1>Article not found</h1>
            <p>
                Please return to
                <a href="news.html">News & Analysis</a>.
            </p>
        `;
        return;
    }

    document.title = `${article.title} | PlayZone`;

    articleContent.innerHTML = `
        <img
            class="article-cover"
            src="${escapeHTML(article.image)}"
            alt="${escapeHTML(article.title)}">

        <header class="article-heading">
            <span class="category-label">
                ${escapeHTML(article.category)}
            </span>

            <h1>${escapeHTML(article.title)}</h1>

            <p class="article-lead">
                ${escapeHTML(article.lead)}
            </p>

            <div class="news-meta">
                <span>▣ ${escapeHTML(article.date)}</span>
                <span>◷ ${escapeHTML(article.readTime)}</span>
                <span>PlayZone Editorial</span>
            </div>
        </header>

        <div class="article-body">
            ${article.paragraphs.map(part => `
                <section>
                    <h2>${escapeHTML(part[0])}</h2>
                    <p>${escapeHTML(part[1])}</p>
                </section>
            `).join("")}
        </div>

        <div class="source-box">
            <h3>Source / Further Reading</h3>
            <p>
                This is a PlayZone football explainer.
                Visit the linked source for official updates.
            </p>
            <a href="${escapeHTML(article.sourceUrl)}"
               target="_blank"
               rel="noopener noreferrer">
                ${escapeHTML(article.sourceName)} ↗
            </a>
        </div>

        <a class="back-link" href="news.html">
            ← Back to News & Analysis
        </a>
    `;
}

if (filterBar) {
    filterBar.addEventListener("click", event => {
        const button = event.target.closest(".filter-btn");

        if (!button) return;

        filterBar.querySelectorAll(".filter-btn")
            .forEach(item => item.classList.remove("active"));

        button.classList.add("active");
        activeCategory = button.dataset.category;

        renderNews();
    });
}

if (searchInput) {
    searchInput.addEventListener("input", renderNews);
}

renderNews();
renderArticle();
