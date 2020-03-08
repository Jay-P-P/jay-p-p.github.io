window.onload = function(event) {
  var navbarButton = document.querySelector('.navbar-toggle');
  var menu = document.querySelector('.navbar');
  var toggleNavBar = function() {
    if (!menu.classList.contains('navbar-show')) {
      menu.classList.toggle('navbar-show');
      navbarButton.style.transform = 'rotate(0)';
      navbarButton.style.color = 'white';
      navbarButton.innerHTML = '&times;';
    } else {
      menu.classList.toggle('navbar-show');
      navbarButton.style.transform = 'rotate(90deg)';
      navbarButton.style.color = 'black';
      navbarButton.textContent = '|||';
    }
  };
  navbarButton.addEventListener('click', toggleNavBar);

  var sections = {};
  var links = Array.from(menu.children);
  links.map(function(link) {
    var sectionName = link.textContent.toLowerCase().replace(' ', '_');
    sections[sectionName] = document.querySelector(`#${sectionName}`);
    link.addEventListener('click', function() {
      toggleNavBar();
    });
  });

  var skillsHeading = document.querySelectorAll('.subheading');
  var skillsChildren = Array.from(
    document.querySelectorAll('.skills .content-container img')
  );
  var colors = ['orange', 'blue', 'gold', 'lightblue', 'green'];

  skillsChildren.map(function(skill, index) {
    skill.addEventListener('mouseover', function() {
      skillsHeading.forEach(function(el) {
        el.style.backgroundColor = `${colors[index]}`;
      });
    });

    skill.addEventListener('mouseleave', function() {
      skillsHeading.forEach(function(el) {
        el.style.backgroundColor = 'var(--subheading-background-color)';
      });
    });
  });
};
