const profileLink = document.querySelector(".profile");
const projectLink = document.querySelector(".projects");
const contactLink = document.querySelector(".contacts");
const skillLink = document.querySelector(".skill")
const homeLink = document.querySelector(".home")
const menuBar = document.getElementById("menu-bar");
const listElement = document.querySelector(".list-container")


const profileSection = document.querySelector(".profile-container");
const projectsSection = document.querySelector(".projects-container");
const project10 = document.querySelector(".project-box10");
const contactSection = document.querySelector(".contact-container");
const skillsSection = document.querySelector(".skills-container");
const nameSection = document.querySelector(".name-container");


contactLink.addEventListener("click",iconContacts);
profileLink.addEventListener("click", iconProfile);
projectLink.addEventListener("click", iconProjects);
skillLink.addEventListener("click",skillAction)
homeLink.addEventListener("click",homPage);
menuBar.addEventListener("click",listAction)



listElement.style.maxHeight = "0px";


function homPage(){
    window.location.href = "./index.html"
}



function iconProfile() {
     profileSection.style.display = "block";
    // profileSection.style.display = "flex";
    // projectsSection.style.display = "block";
     project10.style.display = "none",
    contactSection.style.display = "none";
    skillsSection.style.display = "none";
    nameSection.style.display = "none";
}


function iconProjects() {
    profileSection.style.display = "none";
    // projectsSection.style.display = "block";
    project10.style.display = "block",
    contactSection.style.display = "none";
    skillsSection.style.display = "none";
    nameSection.style.display = "none";
    nameSection.style.display = "none";
}


function iconContacts() {
     // projectsSection.style.display = "none";
     project10.style.display = "none",
    contactSection.style.display = "block";
    profileSection.style.display = "none";
    skillsSection.style.display = "none";
    nameSection.style.display = "none";
}

function skillAction() {
     // projectsSection.style.display = "none";
     project10.style.display = "none",
    skillsSection.style.display = "block";
    profileSection.style.display = "none";
     contactSection.style.display = "none";
     nameSection.style.display = "none";
}

function listAction(){
    if(menuBar.classList.contains("fa-bars")){
        menuBar.classList.replace("fa-bars","fa-x")
      }else{
        menuBar.classList.replace("fa-x","fa-bars")
      }
      if(listElement.style.maxHeight == "0px"){
        listElement.style.maxHeight = "400px"
      }else{
         listElement.style.maxHeight = "0px"
      }
}