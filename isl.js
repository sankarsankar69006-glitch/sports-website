
const teams = [
    {
        name: "Mumbai City FC",
        founded: "2014",
        city: "Mumbai, Maharashtra",
        stadium: "Mumbai Football Arena",
        image: "./assets/ISL/mumbai-city.jpg",
        description: "Mumbai City FC is a professional football club based in Mumbai. The club has won the ISL League Winners' Shield and ISL Cup and is known for its competitive performances."
    },
    {
        name: "Mohun Bagan Super Giant",
        founded: "1889",
        city: "Kolkata, West Bengal",
        stadium: "Vivekananda Yuba Bharati Krirangan",
        image: "./assets/ISL/mohun-bagan.jpg",
        description: "Mohun Bagan is one of India's oldest and most historic football clubs. Its modern team, Mohun Bagan Super Giant, competes in the Indian Super League and has a passionate fan base."
    },
    {
        name: "East Bengal FC",
        founded: "1920",
        city: "Kolkata, West Bengal",
        stadium: "Vivekananda Yuba Bharati Krirangan",
        image: "./assets/ISL/east-bengal.jpg",
        description: "East Bengal FC is a historic Kolkata football club known for its red and gold colours. The club has a long-standing rivalry with Mohun Bagan and a rich history in Indian football."
    },
    {
        name: "Bengaluru FC",
        founded: "2013",
        city: "Bengaluru, Karnataka",
        stadium: "Sree Kanteerava Stadium",
        image: "./assets/ISL/bengaluru.jpg",
        description: "Bengaluru FC was established in 2013 and quickly became a major force in Indian football. The club has won national league titles and the Indian Super League championship."
    },
    {
        name: "Chennaiyin FC",
        founded: "2014",
        city: "Chennai, Tamil Nadu",
        stadium: "Jawaharlal Nehru Stadium",
        image: "./assets/ISL/chennaiyin.jpg",
        description: "Chennaiyin FC represents Chennai in the Indian Super League. The club has won the ISL championship twice and is supported by passionate football fans across Tamil Nadu."
    },
    {
        name: "Kerala Blasters FC",
        founded: "2014",
        city: "Kochi, Kerala",
        stadium: "Jawaharlal Nehru Stadium, Kochi",
        image: "./assets/ISL/kerala-blasters.jpg",
        description: "Kerala Blasters FC is based in Kochi and is known for its energetic supporters and yellow team colours. The club has reached several ISL finals and enjoys a strong fan following."
    },
    {
        name: "FC Goa",
        founded: "2014",
        city: "Margao, Goa",
        stadium: "Fatorda Stadium",
        image: "./assets/ISL/fc-goa.jpg",
        description: "FC Goa represents the football-loving state of Goa. The club is recognised for its attacking style and has won the ISL League Winners' Shield and other domestic honours."
    },
    {
        name: "Jamshedpur FC",
        founded: "2017",
        city: "Jamshedpur, Jharkhand",
        stadium: "JRD Tata Sports Complex",
        image: "./assets/ISL/jamshedpur.jpg",
        description: "Jamshedpur FC is based in Jharkhand and represents the city's strong sporting culture. The club won the ISL League Winners' Shield in the 2021–22 season."
    },
    {
        name: "Odisha FC",
        founded: "2019",
        city: "Bhubaneswar, Odisha",
        stadium: "Kalinga Stadium",
        image: "./assets/ISL/odisha.jpg",
        description: "Odisha FC is based in Bhubaneswar and plays its home matches at Kalinga Stadium. The club has developed its presence in Indian football through domestic and continental competitions."
    },
    {
        name: "Punjab FC",
        founded: "2005",
        city: "Punjab, India",
        stadium: "Jawaharlal Nehru Stadium, Delhi",
        image: "./assets/ISL/punjab.jpg",
        description: "Punjab FC has its roots in Punjab's football tradition and progressed through India's football divisions. The club earned promotion to the Indian Super League in 2023."
    },
    {
        name: "NorthEast United FC",
        founded: "2014",
        city: "Guwahati, Assam",
        stadium: "Indira Gandhi Athletic Stadium",
        image: "./assets/ISL/northeast-united.jpg",
        description: "NorthEast United FC represents India's northeastern region. Based in Guwahati, the club brings together supporters from several northeastern states and won its first ISL Cup in 2024."
    },
    {
        name: "Hyderabad FC",
        founded: "2019",
        city: "Hyderabad, Telangana",
        stadium: "G. M. C. Balayogi Athletic Stadium",
        image: "./assets/ISL/hyderabad.jpg",
        description: "Hyderabad FC was established in 2019 and won the Indian Super League championship in the 2021–22 season. Its participation and current status should be checked before presenting it as an active league club."
    },
    {
        name: "Mohammedan SC",
        founded: "1891",
        city: "Kolkata, West Bengal",
        stadium: "Vivekananda Yuba Bharati Krirangan",
        image: "./assets/ISL/mohammedan.jpg",
        description: "Mohammedan Sporting Club is one of India's historic football clubs. Based in Kolkata, the club has a long tradition in domestic competitions and earned promotion to the ISL in 2024."
    }
];

// HTML elements
const teamGrid = document.getElementById("teamGrid");
const teamCount = document.getElementById("teamCount");

const detailsOverlay = document.getElementById("detailsOverlay");
const closeDetails = document.getElementById("closeDetails");
const doneBtn = document.getElementById("doneBtn");

// Display team cards
function displayTeams() {

    teamGrid.innerHTML = "";

    teams.forEach((team, index) => {

        const card = document.createElement("article");

        card.className = "team-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `View ${team.name} details`);

        card.innerHTML = `
            <img src="${team.image}"
                 alt="${team.name}"
                 loading="lazy">

            <div class="team-overlay">
                <h3>${team.name}</h3>
                <p>Founded ${team.founded}</p>
                <span class="view-details">
                    View Details →
                </span>
            </div>
        `;

        card.addEventListener("click", () => {
            showDetails(index);
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                showDetails(index);
            }
        });

        teamGrid.appendChild(card);
    });

    teamCount.textContent = `${teams.length} Clubs`;
}

// Show selected club details
function showDetails(index) {

    const team = teams[index];

    document.getElementById("detailImage").src = team.image;
    document.getElementById("detailImage").alt = team.name;

    document.getElementById("detailName").textContent = team.name;
    document.getElementById("detailFounded").textContent = team.founded;
    document.getElementById("detailStadium").textContent = team.stadium;
    document.getElementById("detailCity").textContent = team.city;
    document.getElementById("detailDescription").textContent =
        team.description;

    detailsOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    closeDetails.focus();
}

// Close popup
function hideDetails() {

    detailsOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

closeDetails.addEventListener("click", hideDetails);
doneBtn.addEventListener("click", hideDetails);

// Close when clicking outside the popup
detailsOverlay.addEventListener("click", (event) => {

    if (event.target === detailsOverlay) {
        hideDetails();
    }
});

// Close using Escape key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        hideDetails();
    }
});

// Load teams
displayTeams();
