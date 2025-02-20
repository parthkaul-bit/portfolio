// projects.js
const projectsData = [
  {
    id: 9,
    title: "Ten-AgenticWorkflow",
    image: "./public/bolt-old.png",
    imageAlt: "Ten-AgenticWorkflow Project",
    link: "https://agentic-workflow.vercel.app/",
    technologies: ["MERN", "StackBlitz", "GroqAI", "NetlifyAPI"],
  },
  {
    id: 11,
    title: "Ten-AllEngine",
    image: "./public/allengine.png",
    imageAlt: "Ten-AllEngine Project",
    link: "https://edu-everything-engine.vercel.app/",
    technologies: ["MERN", "GeminiAI", "Flowbite"],
  },
  {
    id: 12,
    title: "Ten-HealthEngine",
    image: "./public/ten-healthengine.png",
    imageAlt: "Ten-HealthEngine Project",
    link: "https://ten-health-engine-ten.vercel.app/",
    technologies: ["MERN", "Health", "GeminiAI", "TailwindCSS"],
  },
  {
    id: 10,
    title: "Ten-Fashion",
    image: "./public/ten-fashion.png",
    imageAlt: "Ten-Fashion Project",
    link: "https://ten-fashion.vercel.app/",
    technologies: ["MERN", "E-commerce", "Flowbite"],
  },
  {
    id: 1,
    title: "Dev.io - A Blog Website",
    image: "./public/dev.jpeg",
    imageAlt: "Dev.io Image",
    link: "https://dev-io-fe.onrender.com",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 13,
    title: "Guess The Word",
    image: "./public/guesstheword.png",
    imageAlt: "Guess The Word Game",
    link: "https://guessthelanguage.vercel.app/",
    technologies: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Centsible - An Expense Tracker",
    image: "./public/centsible.jpeg",
    imageAlt: "Centsible Project",
    link: "https://centsible-nu.vercel.app",
    technologies: ["React", "Material UI"],
  },
  {
    id: 3,
    title: "Amazia - Amazon Clone",
    image: "./public/amazia.jpeg",
    imageAlt: "Amazia Project",
    link: "https://amazia.vercel.app/index.html",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Pokedex",
    image: "./public/pokedex.jpeg",
    imageAlt: "Pokedex Project Image",
    link: "https://pokedexworld.netlify.app/",
    technologies: ["React", "TypeScript", "Firebase"],
  },
  {
    id: 5,
    title: "MeTube - YouTube for Programmers",
    image: "./public/metube.jpeg",
    imageAlt: "Metube Image",
    link: "https://me-tube-beta.vercel.app",
    technologies: ["React", "Material UI", "API Integration"],
  },
  {
    id: 6,
    title: "Localscene - Cultural Events",
    image: "./public/localscene.jpeg",
    imageAlt: "Localscene Project",
    link: "https://github.com/parthkaul-bit/localscene",
    linkText: "View Code",
    technologies: ["Django", "Python", "MySQL"],
  },
  {
    id: 7,
    title: "Fittube - An Exercise Partner",
    image: "./public/fittube.jpeg",
    imageAlt: "Fittube Project Image",
    link: "https://ephemeral-raindrop-5bcbbc.netlify.app",
    technologies: ["React", "API Integration", "Material UI"],
  },
  {
    id: 8,
    title: "Rock Paper Scissors Game",
    image: "./public/rockpaperscissors.jpeg",
    imageAlt: "Rock Paper Scissors Game",
    link: "https://rock-paper-scissors-zeta-beige.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

// Add this CSS to your stylesheet
const styles = `
    .project-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .project-card.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .text-center {
        text-align: center;
    }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

function createProjectCard(project) {
  const {
    title,
    image,
    imageAlt,
    link,
    technologies,
    linkText = "View Project",
  } = project;

  return `
        <div class="project-card bg-white overflow-hidden relative rounded-xl">
            <div class="aspect-w-1 aspect-h-1 relative rounded-xl">
                <img
                    src="${image}"
                    alt="${imageAlt}"
                    class="object-cover rounded-xl"
                />
                <a
                    href="${link}"
                    target="_blank"
                    class="absolute rounded-xl inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-70 transition-opacity duration-300"
                >
                    <i class="fas fa-eye text-white text-4xl"></i>
                </a>
            </div>
            <div class="py-6">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
                    <h3 class="text-xl font-semibold mb-2 lg:mb-0">
                        ${title}
                    </h3>
                    <a
                        href="${link}"
                        target="_blank"
                        class="text-sm font-semibold hover:underline flex items-center group pr-1"
                    >
                        ${linkText}
                        <i class="fas fa-external-link-alt ml-2 transform transition-opacity duration-300 opacity-0 group-hover:opacity-100"></i>
                    </a>
                </div>
                <div class="flex flex-wrap gap-2">
                    ${technologies
                      .map(
                        (tech) => `
                        <span class="dark:text-black dark:bg-gray-200 px-4 py-1 bg-gray-200 text-sm rounded-full">
                            ${tech}
                        </span>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `;
}

function renderProjects(startIndex, endIndex) {
  const projectsToRender = projectsData.slice(startIndex, endIndex);
  const projectCards = projectsToRender
    .map((project) => createProjectCard(project))
    .join("");

  const projectsContainer = document.querySelector("#projects .grid");
  if (projectsContainer) {
    projectsContainer.insertAdjacentHTML("beforeend", projectCards);

    // Trigger reflow to ensure transitions work
    setTimeout(() => {
      const newCards = document.querySelectorAll(".project-card:not(.visible)");
      newCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 100); // Stagger the animations
      });
    }, 50);
  }
}

function initializeProjects() {
  const projectsSection = document.querySelector("#projects");
  const projectsContainer = document.querySelector("#projects .grid");

  // Clear any existing content
  projectsContainer.innerHTML = "";

  // Render initial 4 projects
  renderProjects(0, 4);

  // Add "Show More" button if there are more projects
  if (projectsData.length > 4) {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "text-center";
    buttonContainer.innerHTML = `
            <button class="btn btn-primary bg-green-700 text-white transition-transform duration-300 ease-in-out transform hover:scale-105 show-more-btn">
                See All Projects
            </button>
        `;

    projectsSection.appendChild(buttonContainer);

    const showMoreBtn = buttonContainer.querySelector(".show-more-btn");
    showMoreBtn.addEventListener("click", () => {
      // Render remaining projects
      renderProjects(4, projectsData.length);
      // Hide the button
      buttonContainer.style.display = "none";
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeProjects);
