
console.log("PlayZone JavaScript loaded");

document.addEventListener("DOMContentLoaded", () => {

    // ---------------- SEARCH ----------------

    const searchBox = document.getElementById("searchBox");
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const heroSearchForm = document.getElementById("heroSearchForm");
    const heroSearchInput = document.getElementById("heroSearchInput");
    const cards = document.querySelectorAll(".sport-card");
    const noResults = document.getElementById("noResults");

    function filterSports(value) {
        const term = value.trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach((card) => {
            const sport = (card.dataset.sport || "").toLowerCase();
            const heading = card.querySelector("h3");
            const title = heading ? heading.textContent.toLowerCase() : "";

            const show = sport.includes(term) || title.includes(term);

            card.hidden = !show;

            if (show) visibleCount++;
        });

        if (noResults) {
            noResults.hidden = visibleCount !== 0;
        }
    }

    if (searchBtn && searchBox && searchInput) {
        searchBtn.addEventListener("click", () => {
            searchBox.classList.toggle("active");

            if (searchBox.classList.contains("active")) {
                searchInput.focus();
            } else {
                searchInput.value = "";
                filterSports("");
            }
        });

        searchInput.addEventListener("input", (event) => {
            filterSports(event.target.value);
        });
    }

    if (heroSearchForm && heroSearchInput) {
        heroSearchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            filterSports(heroSearchInput.value);

            document.getElementById("popular")
                ?.scrollIntoView({ behavior: "smooth" });
        });
    }


    // ---------------- LOGIN ELEMENTS ----------------

    const userProfile = document.getElementById("userProfile");
    const loginBtn = document.getElementById("loginBtn");
    const authOverlay = document.getElementById("authOverlay");
    const closeAuth = document.getElementById("closeAuth");

    const loginBtnText = document.getElementById("loginBtnText");
    const userName = document.getElementById("userName");

    const signInPage = document.getElementById("signInPage");
    const createPage = document.getElementById("createPage");

    const signInForm = document.getElementById("signInForm");
    const createForm = document.getElementById("createForm");

    const showCreate = document.getElementById("showCreate");
    const showSignIn = document.getElementById("showSignIn");

    const signInMessage = document.getElementById("signInMessage");
    const createMessage = document.getElementById("createMessage");

    const logoutBtn = document.getElementById("logoutBtn");

    if (
        !userProfile || !loginBtn || !authOverlay ||
        !closeAuth || !signInPage || !createPage ||
        !signInForm || !createForm
    ) {
        console.error("PlayZone login HTML elements are missing.");
        return;
    }


    // ---------------- DEMO ACCOUNT STORAGE ----------------
    // Demo only. Do not store real passwords this way.

    const STORAGE_KEY = "playZoneDemoAccounts";
    let currentUser = null;

    function getAccounts() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch (error) {
            return [];
        }
    }

    function saveAccounts(accounts) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
    }


    // ---------------- MESSAGES ----------------

    function showMessage(element, message, type) {
        if (!element) return;

        element.textContent = message;
        element.className = "auth-message " + type;
    }

    function clearMessages() {
        showMessage(signInMessage, "", "");
        showMessage(createMessage, "", "");
    }


    // ---------------- PAGE SWITCHING ----------------

    function showSignInPage() {
        signInPage.hidden = false;
        createPage.hidden = true;
        clearMessages();
    }

    function showCreatePage() {
        signInPage.hidden = true;
        createPage.hidden = false;
        clearMessages();
    }


    // ---------------- OPEN / CLOSE POPUP ----------------

    loginBtn.addEventListener("click", () => {
        if (currentUser) return;

        signInForm.reset();
        showSignInPage();
        authOverlay.classList.add("show");
    });

    closeAuth.addEventListener("click", () => {
        authOverlay.classList.remove("show");
    });

    authOverlay.addEventListener("click", (event) => {
        if (event.target === authOverlay) {
            authOverlay.classList.remove("show");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            authOverlay.classList.remove("show");
        }
    });

    if (showCreate) {
        showCreate.addEventListener("click", () => {
            createForm.reset();
            showCreatePage();
        });
    }

    if (showSignIn) {
        showSignIn.addEventListener("click", () => {
            signInForm.reset();
            showSignInPage();
        });
    }


    // ---------------- CREATE ACCOUNT ----------------

    createForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const identity = document.getElementById("newIdentity")
            .value.trim().toLowerCase();

        const password = document.getElementById("newPassword").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (!name || !identity || !password || !confirmPassword) {
            showMessage(createMessage, "Please fill in all fields.", "error");
            return;
        }

        if (password.length < 8) {
            showMessage(
                createMessage,
                "Password must contain at least 8 characters.",
                "error"
            );
            return;
        }

        if (password !== confirmPassword) {
            showMessage(
                createMessage,
                "Passwords do not match.",
                "error"
            );
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobilePattern = /^[0-9]{10}$/;

        if (
            !emailPattern.test(identity) &&
            !mobilePattern.test(identity)
        ) {
            showMessage(
                createMessage,
                "Enter a valid email or 10-digit mobile number.",
                "error"
            );
            return;
        }

        const accounts = getAccounts();

        if (accounts.some(account => account.identity === identity)) {
            showMessage(
                createMessage,
                "This account already exists. Please sign in.",
                "error"
            );
            return;
        }

        accounts.push({ name, identity, password });

        try {
            saveAccounts(accounts);
        } catch (error) {
            showMessage(
                createMessage,
                "Unable to save the demo account in this browser.",
                "error"
            );
            return;
        }

        createForm.reset();
        showSignInPage();

        document.getElementById("loginIdentity").value = identity;

        showMessage(
            signInMessage,
            "Account created! Please sign in with your new details.",
            "success"
        );
    });


    // ---------------- SIGN IN ----------------

    signInForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const identity = document.getElementById("loginIdentity")
            .value.trim().toLowerCase();

        const password = document.getElementById("loginPassword").value;

        const accounts = getAccounts();

        const account = accounts.find(
            item => item.identity === identity &&
                    item.password === password
        );

        if (!account) {
            showMessage(
                signInMessage,
                "Invalid email/mobile number or password.",
                "error"
            );
            return;
        }

        currentUser = {
            name: account.name,
            identity: account.identity
        };

        userName.textContent = currentUser.name;

        if (loginBtnText) {
            loginBtnText.textContent = "";
        }

        loginBtn.innerHTML = '<i class="fa-solid fa-user"></i>';
        loginBtn.setAttribute("aria-label", "Logged in user");

        userProfile.classList.add("logged-in");

        authOverlay.classList.remove("show");
        signInForm.reset();
        clearMessages();
    });


    // ---------------- LOGOUT ----------------

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            currentUser = null;

            userProfile.classList.remove("logged-in");
            userName.textContent = "";

            loginBtn.innerHTML = `
                <i class="fa-solid fa-user"></i>
                <span id="loginBtnText">Login</span>
            `;

            loginBtn.setAttribute("aria-label", "Login");

            signInForm.reset();
            createForm.reset();

            authOverlay.classList.remove("show");
            showSignInPage();
        });
    }

});
