window.onload = function(event) {
  var landing = document.querySelector('.landing');
  var [landingFirstName, landingLastName, landingTitle] = landing.children;
  var about = document.querySelector('.about');
  var face = document.querySelector('.face');
  var education = document.querySelector('.education');

  landingFirstName.style.width = '100%';
  setTimeout(function() {
    landingLastName.style.width = '100%';
  }, 500);
  setTimeout(function() {
    landingTitle.style = 'opacity: 1; transform: translateY(0)';
  }, 1000);

  var animationsShown = {
    aboutAndFace: false,
    education: false,
    skills: false,
    projects: false
  };

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

  var skills = document.querySelector('.skills');
  var skillsHeading = skills.children[0];
  var skillsChildren = [...skills.children[1].children];
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
    animationsShown['aboutAndFace'] = true;
    about.style = 'opacity: 1; transform: translateY(0);';
    face.children[0].style = 'opacity: 1; transform: translateY(0);';
  }

  function showEducation() {
    animationsShown['education'] = true;
    education.style = 'opacity: 1; transform: translateY(0);';
  }

  function showSkills() {
    animationsShown['skills'] = true;
    let timeout = 200;

    skillsHeading.style.opacity = 1;

    skillsChildren.map(function(skill) {
      timeout += 200;
      setTimeout(function() {
        skill.style.opacity = '1';
      }, timeout);
    });
  }

  var lastScrollPosition = window.scrollY;

  function checkForAnimationBreakpoints() {
    position = window.scrollY;
    if (
      !animationsShown['aboutAndFace'] &&
      position >= landing.offsetHeight / 2
    ) {
      showAboutAndFace();
    }

    if (
      !animationsShown['education'] &&
      position >= landing.offsetHeight + about.offsetHeight / 2
    ) {
      showEducation();
    }

    if (
      !animationsShown['skills'] &&
      position >= landing.offsetHeight + about.offsetHeight
    ) {
      showSkills();
    }
  }

  window.addEventListener('scroll', function() {
    checkForAnimationBreakpoints();
  });

  checkForAnimationBreakpoints();
};
