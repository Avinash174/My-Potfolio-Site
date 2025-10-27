document.getElementById('year').textContent = new Date().getFullYear();

const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const saved = localStorage.getItem('theme');
if(saved){ if(saved==='light') root.setAttribute('data-theme','light'); }
themeBtn.addEventListener('click',()=>{
  const isLight = root.getAttribute('data-theme')==='light';
  root.setAttribute('data-theme', isLight?'dark':'light');
  localStorage.setItem('theme', isLight?'dark':'light');
});

// reveal on scroll
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');obs.unobserve(entry.target);}});
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));