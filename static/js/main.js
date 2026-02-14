document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target); // animate once
      }
    });
  }, options);

  reveals.forEach(el => {
    observer.observe(el);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const sectionHeight = targetElement.offsetHeight;
        const viewportHeight = window.innerHeight;
        const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

        let scrollToPosition;
        if (sectionHeight < viewportHeight) {
          // Center short sections
          const offset = (viewportHeight - sectionHeight) / 2;
          scrollToPosition = elementTop - offset - headerHeight / 2;
        } else {
          // Top-align tall sections
          scrollToPosition = elementTop - headerHeight - 10; // small extra padding
        }

        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // Optional: reveal elements when they enter viewport
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight * 0.85) {
        el.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on page load
});

document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

});


