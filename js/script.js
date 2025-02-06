// const projects = [
//   {
//     title: "Project 1",
//     image: "image1.jpg",
//     liveLink: "https://example.com/project1",
//     githubLink: "https://github.com/user/project1",
//     technologies: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     title: "Project 2",
//     image: "image2.jpg",
//     liveLink: "https://example.com/project2",
//     githubLink: "https://github.com/user/project2",
//     technologies: ["React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Project 3",
//     image: "image3.jpg",
//     liveLink: "https://example.com/project3",
//     githubLink: "https://github.com/user/project3",
//     technologies: ["Python", "Django", "PostgreSQL"],
//   },
//   {
//     title: "Project 4",
//     image: "image4.jpg",
//     liveLink: "https://example.com/project4",
//     githubLink: "https://github.com/user/project4",
//     technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//   },
//   {
//     title: "Project 5",
//     image: "image5.jpg",
//     liveLink: "https://example.com/project5",
//     githubLink: "https://github.com/user/project5",
//     technologies: ["React", "Redux", "Node.js"],
//   },
//   // Add more projects here...
// ];

// document.addEventListener("DOMContentLoaded", () => {
//   const projectsContainer = document.getElementById("projectsContainer");
//   const seeMoreBtn = document.getElementById("seeMoreBtn");
//   const projectsToShow = 4;
//   let allProjectsVisible = false;

//   function createProjectCard(project) {
//     return `
//         <div class="bg-white overflow-hidden rounded-xl relative">
//           <div class="aspect-w-1 aspect-h-1 relative rounded-xl">
//             <img src="${project.image}" alt="${
//       project.title
//     }" class="object-cover" />
//             <a href="${project.liveLink || project.githubLink}" target="_blank"
//               class="absolute rounded-xl inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-70 transition-opacity duration-300">
//               <i class="fas fa-eye text-white text-4xl"></i>
//             </a>
//           </div>
//           <div class="py-6 text-black">
//             <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
//               <h3 class="text-xl font-semibold mb-2 lg:mb-0">${
//                 project.title
//               }</h3>
//               <a href="${
//                 project.liveLink || project.githubLink
//               }" target="_blank"
//                 class="text-sm font-semibold hover:underline flex items-center group pr-1">
//                 ${project.liveLink ? "View Project" : "View Code"}
//                 <i class="fas fa-external-link-alt ml-2 transform transition-opacity duration-300 opacity-0 group-hover:opacity-100"></i>
//               </a>
//             </div>
//             <div class="flex flex-wrap gap-2">
//               ${project.technologies
//                 .map(
//                   (tech) => `
//                 <span class="dark:text-black dark:bg-gray-200 px-4 py-1 bg-gray-200 text-sm rounded-full">${tech}</span>
//               `
//                 )
//                 .join("")}
//             </div>
//           </div>
//         </div>
//       `;
//   }

//   function displayProjects(start, end) {
//     const projectsToDisplay = projects.slice(start, end);
//     projectsToDisplay.forEach((project) => {
//       projectsContainer.innerHTML += createProjectCard(project);
//     });
//   }

//   function handleSeeMore() {
//     if (!allProjectsVisible) {
//       displayProjects(projectsToShow, projects.length);
//       seeMoreBtn.textContent = "See Less";
//       allProjectsVisible = true;
//     } else {
//       projectsContainer.innerHTML = "";
//       displayProjects(0, projectsToShow);
//       seeMoreBtn.textContent = "See More Projects";
//       allProjectsVisible = false;
//     }
//   }

//   // Initial display
//   displayProjects(0, projectsToShow);

//   // Event listener for See More button
//   seeMoreBtn.addEventListener("click", handleSeeMore);
// });
