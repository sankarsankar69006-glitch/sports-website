# PlayZone — Premium World Football & Sports Hub

Welcome to **PlayZone**, a modern, responsive, and feature-rich sports web application dedicated to world football. PlayZone delivers comprehensive coverage across top international tournaments, domestic leagues, legendary & contemporary players, club profiles, and women's football.

---

## 🌟 Features

- **Global Tournaments Coverage**: Dedicated hubs for FIFA World Cup, UEFA Champions League, UEFA Euro, AFC Asian Cup, and Copa América.
- **Top Domestic Leagues**: Deep-dive pages for the English Premier League, Spanish LaLiga, German Bundesliga, French Ligue 1, Italian Serie A, MLS, and the Indian Super League (ISL).
- **Club Profiles & Squad Details**: Interactive club details with trophy counts, stadiums, and featured star player rosters (`club-details.html`).
- **Player Archives**: Searchable and filterable database of world football legends and current superstars with career timelines and major achievements (`players.html`, `player-details.html`).
- **Women's Football**: Dedicated section covering the Women's Super League (WSL), Liga F, NWSL, and Frauen-Bundesliga (`womens-football.html`).
- **Football News & Long-form Analysis**: Categorized news feeds, search filters, and article reading experience (`news.html`, `article.html`).
- **Modern Dark UI**: Signature PlayZone theme featuring deep cyan/black gradients (`#050D11`), neon mint green accents (`#48E5A1`), and smooth micro-animations.
- **Fully Responsive**: Mobile-first responsive layouts tested across 320px to 1920px viewports with zero horizontal overflow.

---

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5 with complete SEO meta tags, OpenGraph data, and accessibility attributes.
- **Styling**: Vanilla CSS3 design system with CSS custom variables, flexbox, CSS grid, and responsive media queries.
- **Frameworks & Libraries**:
  - Bootstrap 5.3.3 (Responsive Grid & Navbar)
  - FontAwesome 6.7.2 (Icons)
  - Google Fonts (Outfit, Inter, Poppins)
- **Logic & Interactions**: Vanilla ES6+ JavaScript (zero build step required).

---

## 📁 Project Structure

```text
Sports/
├── assets/                  # High-resolution logos, player photos, stadium backgrounds
│   ├── AFC/                 # Asian Cup team assets
│   ├── Copa-America/        # Copa América flags and badges
│   ├── Euro/                # UEFA Euro team images
│   ├── Leagues/             # Domestic league badges and headers
│   ├── News/                # Editorial article thumbnails
│   ├── players/             # Player profile images and headshots
│   ├── Premier-League/      # Premier League club logos
│   ├── Serie-A/             # Serie A club imagery
│   ├── Teams/               # Global club badges
│   ├── Womens/              # Women's football clubs and leagues
│   └── Worldcup/            # FIFA World Cup national teams
│
├── index.html               # Main homepage & portal
├── style.css                # Global styles and design system tokens
├── script.js                # Core interactive logic (search, auth modals)
│
├── leagues.html             # All leagues portal
├── premier-league.html      # Premier League teams and standings
├── laliga.html              # LaLiga teams and fixtures
├── bundesliga.html          # Bundesliga team showcase
├── serie-a.html             # Serie A clubs hub
├── ligue1.html              # Ligue 1 clubs overview
├── mls.html                 # Major League Soccer portal
├── isl.html                 # Indian Super League clubs
│
├── Champions-League.html    # UEFA Champions League tournament hub
├── fifa.html                # FIFA World Cup hub
├── uefa-euro.html           # UEFA Euro tournament hub
├── euro-details.html        # Euro team details view
├── afc-asian-cup.html       # AFC Asian Cup tournament hub
├── afc-team-details.html    # AFC team details view
├── copa-america.html        # Copa América hub
├── copa-details.html        # Copa América team details view
│
├── team.html                # Featured continental clubs
├── club-details.html        # Individual club detail page
│
├── players.html             # Searchable player roster
├── player-details.html      # Deep-dive player profile & timeline
│
├── news.html                # Football news feed with category filter
├── article.html             # Full article reading template
├── womens-football.html     # Women's football showcase
├── about.html               # About PlayZone & Contact
│
├── .gitignore               # Standard gitignore for web projects
└── README.md                # Documentation and guide
```

---

## 🚀 Running Locally

No installation or build tools are required! You can open and run this project immediately:

### Option 1: Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will automatically launch at `http://127.0.0.1:5500/`.

### Option 2: Python HTTP Server
Open your terminal in the project directory and run:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000/` in any browser.

### Option 3: Node.js
If you have Node.js installed:
```bash
npx serve .
```

---

## 🌐 Deploying to GitHub Pages

1. Create a new GitHub repository named `sports-website` (or any preferred name).
2. Push your project files to the `main` branch.
3. In your GitHub repository, navigate to **Settings** > **Pages**.
4. Under **Source**, select `Deploy from a branch`.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. In a few moments, your website will be live at:
   `https://<your-username>.github.io/<repository-name>/`

---

## 📄 License & Credits

- Designed & curated for football enthusiasts worldwide.
- Built for educational, personal, and portfolio demonstration purposes.
