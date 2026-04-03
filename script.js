// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scrolled Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Subtle Parallax Effect for Background Blobs
window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  const blob1 = document.querySelector('.blob-1');
  const blob2 = document.querySelector('.blob-2');
  
  if (blob1) blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
  if (blob2) blob2.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
});

// Simple Click Handler for Demo Play Button
const playBtn = document.querySelector('.play-btn');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    alert("This demo video would show the AI-driven claim trigger in a real production environment. Stay tuned for the full walkthrough!");
  });
}
