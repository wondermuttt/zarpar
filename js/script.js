// Mobile navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nav-toggle');
    var navbar    = document.querySelector('.navbar');
    navToggle.addEventListener('click', function() {
      navbar.classList.toggle('open');
    });
  
    // Toggle Case Studies menu item visibility
    var caseStudiesEnabled = false;  // Set this to true to enable the Case Studies page in the menu
    if (!caseStudiesEnabled) {
      var caseNavItem = document.getElementById('nav-case');
      if (caseNavItem) {
        caseNavItem.style.display = 'none';
      }
    }
  });
  