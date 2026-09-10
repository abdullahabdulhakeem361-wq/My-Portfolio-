console.log('JavaScript is successfully connected to my portifolio!');
const navlinks = document.querySelectorAll('.navbar-links a')
navlinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
    
  });
});
const projectButton = document.querySelectorAll('.project-button');
projectButton.forEach(function(button) {
  button.addEventListener('click', function() {
    console.log('project button click');
  });
});
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(function(card) {
  card.addEventListener('click', function() {
    projectCards.forEach(function(item) {
      item.classList.remove('selected');
    });
    card.classList.add('selected');
    console.log('project selected!');
  });
});
const contactButton = document.querySelector('.contact a');
contactButton.addEventListener('click', function() {
  console.log('Contact button clicked!');
});
const topButton = document.querySelector('#topbtn');
topButton.addEventListener('click',  function() {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
});