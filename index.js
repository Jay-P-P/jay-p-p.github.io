window.onload = function(event) {
  var landing = document.querySelector('.landing');
  var [landingFirstName, landingLastName, landingTitle] = Array.from(
    landing.children
  );
  var about = document.querySelector('.about');
  var face = document.querySelector('.face');
  var education = document.querySelector('.education');
  var projects = document.querySelector('.projects');

  landingFirstName.style.width = '100%';
  setTimeout(function() {
    landingLastName.style.width = '100%';
  }, 250);
  setTimeout(function() {
    landingTitle.style = 'opacity: 1; transform: translateY(0)';
  }, 500);

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
  var skillsChildren = Array.from(Array.from(skills.children)[1].children);
  var colors = ['orange', 'blue', 'gold', 'lightblue', 'green'];

  skillsChildren.map(function(skill, index) {
    skill.addEventListener('mouseover', function() {
      skillsHeading.style.color = `${colors[index]}`;
    });

    skill.addEventListener('mouseleave', function() {
      skillsHeading.style.color = 'inherit';
    });
  });

  function showAboutAndFace() {
    about.style = 'opacity: 1; transform: translateY(0);';
    face.children[0].style = 'opacity: 1; transform: translateY(0);';
  }

  function showEducation() {
    education.style = 'opacity: 1; transform: translateY(0);';
  }

  function showSkills() {
    let timeout = 200;

    skillsHeading.style.opacity = 1;

    skillsChildren.map(function(skill) {
      timeout += 200;
      setTimeout(function() {
        skill.style.opacity = '1';
      }, timeout);
    });
  }

  function showProjects() {
    projects.style = 'transform: translateY(0);';
    var projectsChildren = Array.from(
      projects.getElementsByClassName('project-container')
    );

    var timeout = 1000;
    projectsChildren.forEach(function(project) {
      setTimeout(function() {
        project.style = 'opacity: 1; transform: scale(1);';
      }, timeout);
      timeout += 250;
    });
  }

  var breakPoints = {
    aboutAndFace: {
      breakPointTrigger: landing.clientHeight / 2,
      triggerFunction: showAboutAndFace,
      shown: false
    },
    education: {
      breakPointTrigger: landing.clientHeight + about.clientHeight / 2,
      triggerFunction: showEducation,
      shown: false
    },
    skills: {
      breakPointTrigger: landing.clientHeight + about.clientHeight,
      triggerFunction: showSkills,
      shown: false
    },
    projects: {
      breakPointTrigger:
        landing.clientHeight + about.clientHeight + skills.clientHeight,
      triggerFunction: showProjects,
      shown: false
    }
  };

  var position = window.scrollY;
  var counter = 0;
  var breakPointNames = Object.keys(breakPoints);

  function checkForAnimationBreakpoints() {
    position = window.scrollY;

    breakPointNames.map(function(point, index) {
      if (
        !breakPoints[point].shown &&
        position >= breakPoints[point].breakPointTrigger
      ) {
        breakPoints[point].shown = true;
        breakPointNames.splice(index, 1);
        breakPoints[point].triggerFunction();

        if (breakPoints['projects'].shown) {
          window.removeEventListener('scroll', checkForAnimationBreakpoints);
        }
      }
    });
  }

  window.addEventListener('scroll', checkForAnimationBreakpoints);

  checkForAnimationBreakpoints();
};
