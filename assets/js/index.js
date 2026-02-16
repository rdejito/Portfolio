// Scroll spy
const sections = document.querySelectorAll("main > div");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3 - 70) { // account for fixed header
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove and re-add the class to restart animation
      entry.target.classList.remove('animate');
      void entry.target.offsetWidth; // force reflow
      entry.target.classList.add('animate');
    } else {
      // Optionally remove the class when leaving viewport
      entry.target.classList.remove('animate');
    }
  });
}, {
  threshold: 0.5 // trigger when 50% visible
});

// Observe each progress bar
progressBars.forEach(bar => observer.observe(bar));

const texts = [
  "A Computer Engineering Technology Student",
  "An Aspiring Computer Engineer",
  "A Web Developer",
  "A UI/UX Designer"
];

const typedElement = document.getElementById("typed-text");
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetweenTexts = 1500;

function type() {
  if (charIndex < texts[textIndex].length) {
    // update text with cursor
    typedElement.innerHTML =
      texts[textIndex].substring(0, charIndex + 1) + '<span class="cursor">|</span>';
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    typedElement.innerHTML =
      texts[textIndex].substring(0, charIndex - 1) + '<span class="cursor">|</span>';
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

// start typing effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
