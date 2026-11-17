
/* Lab 5 - CV 2.0: Make Your CV Interactive */


/* Task 1 - Dark / Light Mode */

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Light Mode";
        } else {
            themeBtn.textContent = "Dark Mode";
        }

    });
}


/* Task 2 - Show More / Show Less */

const aboutBtn = document.getElementById("about-btn");
const moreAbout = document.getElementById("more-about");

if (aboutBtn && moreAbout) {

    aboutBtn.addEventListener("click", function () {

        moreAbout.hidden = !moreAbout.hidden;

        if (moreAbout.hidden) {
            aboutBtn.textContent = "Show More";
        } else {
            aboutBtn.textContent = "Show Less";
        }

    });
}


/* Task 3 - Dynamic Projects */

const projects = [
    {
        title: "Bus Management System",
        description: "A university bus management system designed to improve transportation services through scheduling, bus tracking, subscription management, and user-friendly mobile interfaces.",
        category: "Programming",
        technologies: ["Java", "SQL"],
        link: "Bus_Management_Interfaces.pdf"
    },
    {
        title: "Personal CV Website",
        description: "A personal CV website that displays my education, skills, projects, and contact information.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];

const projectsContainer = document.getElementById("projects-container");

function renderProjects(category) {

    if (!projectsContainer) {
        return;
    }

    // Clear old cards to avoid duplicates
    projectsContainer.innerHTML = "";

    const filteredProjects = projects.filter(function (project) {
        return category === "All" || project.category === category;
    });

    filteredProjects.forEach(function (project) {

        const card = document.createElement("div");
        card.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const categoryText = document.createElement("p");
        categoryText.textContent = "Category: " + project.category;

        const technologies = document.createElement("p");
        technologies.textContent =
            "Technologies: " + project.technologies.join(", ");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(categoryText);
        card.appendChild(technologies);

        if (project.link) {

            const link = document.createElement("a");
            link.href = project.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View Interfaces";

            card.appendChild(link);
        }

        projectsContainer.appendChild(card);

    });
}

// Display all projects when the page loads
renderProjects("All");


/* Task 4 - Project Filtering */

const allBtn = document.getElementById("all-btn");
const webBtn = document.getElementById("web-btn");
const programmingBtn = document.getElementById("programming-btn");

if (allBtn) {
    allBtn.addEventListener("click", function () {
        renderProjects("All");
    });
}

if (webBtn) {
    webBtn.addEventListener("click", function () {
        renderProjects("Web");
    });
}

if (programmingBtn) {
    programmingBtn.addEventListener("click", function () {
        renderProjects("Programming");
    });
}


/* Task 5 - Print / Save as PDF */

const printBtn = document.getElementById("print-btn");

if (printBtn) {
    printBtn.addEventListener("click", function () {
        window.print();
    });
}
