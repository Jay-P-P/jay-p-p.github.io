window.onload = function(event) {
  var navbarButton = document.querySelector('.navbar-toggle');
  var menu = document.querySelector('.navbar');
  var toggleNavBar = function() {
    if (!menu.classList.contains('navbar-show')) {
      menu.classList.toggle('navbar-show');
      menu.classList.toggle('navbar-hide');
      navbarButton.textContent = 'x';
    } else {
      menu.classList.toggle('navbar-show');
      menu.classList.toggle('navbar-hide');
      navbarButton.textContent = '|||';
    }
  };
  navbarButton.addEventListener('click', toggleNavBar);

  const sections = {};
  var links = [...menu.children];
  links.map(function(link) {
    var sectionName = link.textContent.toLowerCase().replace(' ', '_');
    sections[sectionName] = document.querySelector(`#${sectionName}`);
    link.addEventListener('click', function() {
      toggleNavBar();
      sections[sectionName].scroll({
        top: sections[sectionName].offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    });
  });
};
