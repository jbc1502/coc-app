// Funcționalitate 1: Animația pașilor la scroll


    document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll('.animated-step');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });})

 
  // Obține butonul
let mybutton = document.getElementById("scrollToTopBtn");

// Arată butonul când utilizatorul ajunge la 75% paginii
window.onscroll = function() {
    // Calculăm jumătatea paginii
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollPosition > (documentHeight *0.75) - windowHeight) {
      mybutton.style.display = "block"; // Arată butonul
    } else {
      mybutton.style.display = "none"; // Ascunde butonul
    }
  };

// Când butonul este apăsat, face scroll în susul paginii
mybutton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // Efect de scroll lin
  });
});

