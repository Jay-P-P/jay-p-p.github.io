window.onload = function(event) {
  var navbarButton = document.querySelector('.navbar-toggle');
  var menu = document.querySelector('.navbar');
  var toggleNavBar = function() {
    if (!menu.classList.contains('navbar-show')) {
      menu.classList.toggle('navbar-show');
      menu.classList.toggle('navbar-hide');
      navbarButton.style.transform = 'rotate(0)';
      navbarButton.innerHTML = '&times;';
    } else {
      menu.classList.toggle('navbar-show');
      menu.classList.toggle('navbar-hide');
      navbarButton.style.transform = 'rotate(90deg)';
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

  var skills = document.querySelector('.skills');
  var skillsHeading = Array.from(skills.children)[0];
  var skillsChildren = Array.from(
    Array.from(Array.from(skills.children)[1].children)[0].children
  );
  var colors = ['orange', 'blue', 'gold', 'lightblue', 'green'];

  skillsChildren.map(function(skill, index) {
    skill.addEventListener('mouseover', function() {
      skillsHeading.style.color = `${colors[index]}`;
    });

    skill.addEventListener('mouseleave', function() {
      skillsHeading.style.color = 'black';
    });
  });
};
