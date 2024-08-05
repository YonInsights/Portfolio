"use strict";

// Helper function to toggle 'active' class on an element
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Modal handling for testimonials
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Function to toggle the modal visibility
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Event listener for each testimonial item to open the modal
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

// Event listeners for closing the modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select dropdown and filtering
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle the select dropdown
select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Event listener for select items
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Filtering functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const projectItems = document.querySelectorAll('[data-filter-item]');
  const selectValue = document.querySelector('[data-select-value]');
  const filterSelect = document.querySelector('.filter-select');
  const selectList = document.querySelector('.select-list');

  // Function to filter project items based on category
  const filterProjects = (category) => {
    projectItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-filter-item') === category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  // Function to highlight the selected filter button
  const highlightFilterBtn = (category) => {
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter-btn') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  // Event listeners for filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter-btn');
      highlightFilterBtn(category);
      filterProjects(category);
    });
  });

  // Event listeners for select items
  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.getAttribute('data-select-item');
      selectItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      selectValue.textContent = item.textContent;
      highlightFilterBtn(category);
      filterProjects(category);
      selectList.classList.remove('active');
      filterSelect.classList.remove('active'); // Close dropdown on mobile
    });
  });

  // Toggle the select dropdown list
  filterSelect.addEventListener('click', () => {
    selectList.classList.toggle('active');
  });

  // Close the select dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!filterSelect.contains(event.target)) {
      selectList.classList.remove('active');
    }
  });
});

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Event listener for form input fields to enable/disable the submit button
formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Event listener for navigation links to show the corresponding page
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = this.getAttribute('data-nav-link');
    pages.forEach(page => {
      if (page.getAttribute('data-page') === targetPage) {
        page.classList.add('active');
        window.scrollTo(0, 0);
      } else {
        page.classList.remove('active');
      }
    });
    navigationLinks.forEach(nav => {
      if (nav.getAttribute('data-nav-link') === targetPage) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    });
  });
});
