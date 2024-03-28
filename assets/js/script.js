'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// 
// 
// portfolio modal
// 
// 

// Project modal variables
const projectItems = document.querySelectorAll("[data-filter-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-project-overlay]");

// Modal content variables
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalText = document.querySelector("[data-project-modal-text]");

// Function to toggle project modal
const toggleProjectModal = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
};

// Consolidated click event for all project items
projectItems.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const imgElement = this.querySelector("img");
    const titleElement = this.querySelector(".project-title");
    const categoryElement = this.querySelector(".project-category");
    const descriptionElement = this.querySelector(".project-description");
    const skillsElement = this.querySelector(".project-skills");
    const skillsBuffer = this.querySelector(".skillsbuffer");
    const projectUrl = this.getAttribute("data-project-url"); // Retrieve the URL

    projectModalImg.src = imgElement.src;
    projectModalImg.alt = imgElement.alt;
    projectModalTitle.innerHTML = `${titleElement.innerText} <a href="${projectUrl}" target="_blank" style="text-decoration:none; display:inline-flex; align-items:center;">🔗</a>`;
    projectModalText.innerHTML = `<p>${categoryElement.innerText}</p>` + 
    (descriptionElement ? `<p>${descriptionElement.innerText}</p>` : '') + 
    (skillsBuffer && skillsBuffer.innerText.trim() ? `<p>${skillsBuffer.innerText}</p>` : '<p><br></p>') +
    (skillsElement ? `<i style="color: rgb(206, 177, 90);">${skillsElement.innerText}</i>` : '');

    toggleProjectModal();
  });
});

// Add click events to close the modal
projectModalCloseBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Consider preventing the default action here as well
  toggleProjectModal();
});
projectOverlay.addEventListener("click", function (e) {
  e.preventDefault(); // Consider preventing the default action here as well
  toggleProjectModal();
});

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');

  // Make the canvas cover the full screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  // Create particles
  function initParticles() {
    particles = [];
    let numberOfParticles = 30;
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (innerWidth - size * 2) + size;
      let y = Math.random() * (innerHeight - size * 2) + size;
      let directionX = (Math.random() * .4) - .2;
      let directionY = (Math.random() * .4) - .2;
      let color = '#d6d6d6';

      particles.push({
        x,
        y,
        directionX,
        directionY,
        size,
        color
      });
    }
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particles.length; i++) {
      ctx.beginPath();
      ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2, false);
      ctx.fillStyle = particles[i].color;
      ctx.fill();
      ctx.closePath();

      // Update particle position
      particles[i].x += particles[i].directionX;
      particles[i].y += particles[i].directionY;

      // Reverse the direction if particles go out of bounds
      if (particles[i].x + particles[i].size > canvas.width || particles[i].x - particles[i].size < 0) {
        particles[i].directionX = -particles[i].directionX;
      }
      if (particles[i].y + particles[i].size > canvas.height || particles[i].y - particles[i].size < 0) {
        particles[i].directionY = -particles[i].directionY;
      }
    }
  }

  initParticles();
  animate();

  // Handle window resizing
  window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    initParticles();
  });
});
