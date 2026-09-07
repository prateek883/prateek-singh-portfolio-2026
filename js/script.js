const experience = [
    {
        company: "Wordlyft Content Services",
        role: "Founder",
        duration: "January 2026 – Present",
        location: "Navi Mumbai"
    },
    {
        company: "ESDS Software Solution Limited",
        role: "Marketing Content Specialist",
        duration: "October 2024 – Present",
        location: "Navi Mumbai"
    },
    {
        company: "ESDS Software Solution Limited",
        role: "Content Writer",
        duration: "March 2024 – October 2024",
        location: "Navi Mumbai"
    },
    {
        company: "Tyche Softwares",
        role: "Technical Content Writer",
        duration: "June 2023 – January 2024",
        location: "Navi Mumbai"
    },
    {
        company: "Arcons Technology",
        role: "Technical Writer",
        duration: "October 2022 – May 2023",
        location: "Seattle, WA"
    },
    {
        company: "OpenReplay",
        role: "Contract Technical Writer",
        duration: "September 2020 – November 2021",
        location: ""
    },
    {
        company: "codedamn",
        role: "Content Writer",
        duration: "November 2019 – August 2020",
        location: "Mumbai, Maharashtra, India"
    }
];

const publications = [
    "10 Most Important React.js Interview Questions [2022 Updated]",
    "Front End Developer — What is Front End Development?",
    "How to Capture Email Address from URL in WooCommerce?",
    "GitHub Actions: Automate Your Workflow [Beginners Guide]",
    "Rollup Vs. Webpack — A Comparison"
];

const education = [
    {
        institution: "University of Pennsylvania",
        course: "Introduction to Marketing, Marketing",
        duration: "February 2026 – May 2026"
    },
    {
        institution: "Savitribai Phule Pune University (SPPU)",
        course: "Master of Computer Applications, Computer/Information Technology Administration and Management",
        duration: "August 2016 – July 2018"
    },
    {
        institution: "University of Mumbai",
        course: "Bachelor of Science — Information Technology",
        duration: "August 2013 – May 2015"
    }
];

function renderExperience() {
    const container = document.querySelector("#experience-list");

    container.innerHTML = experience.map(item => `
        <article class="timeline-item">
            <h3>${item.role}</h3>
            <h4>${item.company}</h4>
            <p>${item.duration}</p>
            ${item.location ? `<small>${item.location}</small>` : ""}
        </article>
    `).join("");
}

function renderPublications() {
    const container = document.querySelector("#publication-list");

    container.innerHTML = publications.map((publication, index) => `
        <article class="publication-card">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${publication}</h3>
        </article>
    `).join("");
}

function renderEducation() {
    const container = document.querySelector("#education-list");

    container.innerHTML = education.map(item => `
        <article class="education-item">
            <h3>${item.institution}</h3>
            <p>${item.course}</p>
            <small>${item.duration}</small>
        </article>
    `).join("");
}

function enableSmoothNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

function initializePortfolio() {
    renderExperience();
    renderPublications();
    renderEducation();
    enableSmoothNavigation();

    document.querySelector("#current-year").textContent =
        new Date().getFullYear();
}

function initializeThemeToggle() {
    const toggle = document.querySelector("#theme-toggle");
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (!toggle) return;

    if (savedTheme === "dragon") {
        document.body.classList.add("dragon-theme");
        toggle.textContent = "☀️ White theme";
    }

    toggle.addEventListener("click", () => {
        const dragonTheme = document.body.classList.toggle("dragon-theme");

        localStorage.setItem(
            "portfolio-theme",
            dragonTheme ? "dragon" : "white"
        );

        toggle.textContent = dragonTheme
            ? "☀️ White theme"
            : "🌙 Dragon theme";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initializePortfolio();

    const themeToggle = document.querySelector("#theme-toggle");

    if (!themeToggle) return;

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dragon") {
        document.body.classList.add("dragon-theme");
    }

    updateThemeButton();

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dragon-theme");

        const isDragon = document.body.classList.contains("dragon-theme");
        localStorage.setItem("portfolio-theme", isDragon ? "dragon" : "white");

        updateThemeButton();
    });

    function updateThemeButton() {
        const isDragon = document.body.classList.contains("dragon-theme");

        themeToggle.textContent = isDragon
            ? "☀️ White theme"
            : "🌙 Dragon theme";

        themeToggle.setAttribute("aria-pressed", String(isDragon));
    }
});