console.log('JavaScript is successfully connected to my portifolio!');
const navlinks = document.querySelectorAll('.navbar-links a')
navlinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
    }
  });
});
const projectButton = document.querySelectorAll('.project-button');
projectButton.forEach(function(button) {
  ['click', 'touchend'].forEach(function(eventType) {
  button.addEventListener(eventType, function(event) {
    event.stopPropagation();
    event.preventDefault();
    const url = button.getAttribute('href');
    if (url && url !=='#') {
      window.location.href = url;
    }
    console.log('project button click');
  });
  });
});
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(function(card) {
  card.addEventListener('click', function() {
    if (event.target.tagName === 'A') {
      return;
    }
    projectCards.forEach(function(item) {
      item.classList.remove('selected');
    });
    card.classList.add('selected');
    console.log('project selected!');
  });
});
const contactButton = document.querySelector('.contact a');
if (contactButton) {
  contactButton.addEventListener('click', function() {
  console.log('Contact button clicked!');
});
}

const topButton = document.querySelector('#topbtn');
if (topButton) {
  topButton.addEventListener('click',  function() {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
});
}