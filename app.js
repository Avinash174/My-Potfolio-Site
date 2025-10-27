// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with localStorage + tiny spin
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const saved = localStorage.getItem('theme');
if(saved){
  if(saved === 'light') root.setAttribute('data-theme','light');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
  root.setAttribute('data-theme','light');
}
themeBtn.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  root.setAttribute('data-theme', isLight ? 'dark' : 'light');
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
  themeBtn.setAttribute('aria-pressed', String(!isLight));
  themeBtn.animate([{transform:'rotate(0deg)'},{transform:'rotate(360deg)'}], {duration:500, easing:'ease-out'});
});

// Header shadow on scroll
const header = document.querySelector('header');
const onScroll = () => {
  if(window.scrollY > 6) header.classList.add('scrolled'); else header.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Reveal-on-scroll (IntersectionObserver)
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.12, rootMargin: '0px 0px -10% 0px'});
reveals.forEach(el => io.observe(el));

// Subtle tilt on hover for cards
const tilts = document.querySelectorAll('.tilt');
tilts.forEach(card => {
  const damp = 20;
  let rect = null;
  const update = (e) => {
    rect = rect || card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -damp;
    const ry = ((x / rect.width) - 0.5) * damp;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const reset = () => {
    card.style.transform = '';
    rect = null;
  };
  card.addEventListener('pointermove', update);
  card.addEventListener('pointerleave', reset);
  card.addEventListener('blur', reset);
});

// Smooth scroll for internal links (improved focus)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id) || document.querySelector(`[name='${id}']`);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      // move focus for accessibility
      el.setAttribute('tabindex','-1');
      el.focus({preventScroll:true});
    }
  });
});
